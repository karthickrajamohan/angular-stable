import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Utils } from '../utils'
import { environment } from '../../environments/environment';


export interface Merch {
    product_image: String;
    price: String;
    path: String;
    title: String;
    store_link: String;
}

@Injectable()
export class MerchService {

  constructor(private http:Http) {}
  
  getMerch(): Observable<Merch[]>{
        var url:string = '//' + environment.host + environment.merchListEndpoint;
        return this.http.get(url)
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
