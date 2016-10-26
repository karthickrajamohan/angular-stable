import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Utils } from '../utils'
import { environment } from '../../environments/environment';

export interface Photo {
    body: String;
    created: String;
    field_photo: String;
    nid: String;
    path: String;
    title: String;
    urlslug: String;
}

@Injectable()
export class PhotoService {

    constructor(private http: Http) { }

    getPhotos(categoryName: string): Observable<Photo[]> {
        let url: string
        if (categoryName == null) {
            url = '//' + environment.host + environment.photoListEndpoint;
        } else {
            url = '//' + environment.host + environment.photoCategoryEndpoint + "/" + categoryName;
        }
        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    loadMorePhotos(offsetValue:number,categoryName: string): Observable<Photo[]> {
        let url: string
        if (categoryName == null) {
            url = '//' + environment.host + environment.photoListEndpoint+"?offset="+offsetValue;
        } else{
             url = '//' + environment.host + environment.photoCategoryEndpoint + "/" + categoryName+"?offset="+offsetValue;
        }
        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    getPhoto(id: String) {
        var nid: String = Utils.getNID(id);
        var url: string = '//' + environment.host + environment.photoDetailEndpoint;
        return this.http.get(url + '?nid=' + nid)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
