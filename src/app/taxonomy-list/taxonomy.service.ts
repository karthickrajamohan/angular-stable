import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Utils } from '../utils'
import { environment } from '../../environments/environment';


export interface Taxonomy {
    path: String;
    name: String;
}

@Injectable()
export class TaxonomyService {

  constructor(private http:Http) {}
  
  getTaxonomy(name: string): Observable<Taxonomy[]>{
        // Need to make sure error checking is done. 
        // For now name is mandatory.
        var url:string = '//' + environment.host + environment.taxonomyListEndpoint + '/' +name;
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
