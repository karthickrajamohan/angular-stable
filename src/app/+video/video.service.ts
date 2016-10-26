import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Utils } from '../utils'
import { environment } from '../../environments/environment';

export interface Video {
    body: String;
    created: String;
    field_video: String;
    nid: String;
    path: String;
    title: String;
    urlslug: String;
}

@Injectable()
export class VideoService {

  constructor(private http:Http) {}
  
    getVideos(categoryName:string): Observable<Video[]>{
        let url:string;
        if (categoryName == null){
           url  = '//' + environment.host + environment.videoListEndpoint;
        }else {
           url  = '//' + environment.host + environment.videoCategoryEndpoint + "/" + categoryName; 
        }
        return this.http.get(url)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }
    
    getVideo(id: String,frontpage: boolean){
        let url:string = '//' + environment.host + environment.videoListEndpoint;
        let nid:string ;
        let options:string = "";
        if (frontpage){
            options ='?'+ environment.promoteToHomePage +'=1';
        }else {
            nid = Utils.getNID(id);
            options ="?nid="+nid;
        }
        return this.http.get(url + options)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }
    
    private handleError(error: any){
        // In a real world app, we might use a remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
