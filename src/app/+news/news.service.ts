import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Utils } from '../utils'
import { environment } from '../../environments/environment';

export interface News {
    body: String;
    created: String;
    nid: String;
    path: String;
    title: String;
    thumbnail: String;
}

@Injectable()
export class NewsService {

  constructor(private http:Http) {}
  
    getNews(categoryName:string): Observable<News[]>{
        let url:string
        if (categoryName == null){
           url  = '//' + environment.host + environment.newsListEndpoint;
        }else {
           url  = '//' + environment.host + environment.newsCategoryEndpoint + "/" + categoryName; 
        }
        return this.http.get(url)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }
    
    getNewsDetail(id: String){
        var nid:String = Utils.getNID(id);
        var url:string = '//' + environment.host + environment.newsDetailEndpoint;
        return this.http.get(url + '?nid=' + nid)
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
