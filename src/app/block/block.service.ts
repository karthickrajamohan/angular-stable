import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { environment } from '../../environments/environment';

export interface Block {
    body: string;
}

@Injectable()
export class BlockService {

  constructor(private http:Http) {}

  getBlock(id: string){
      var url:string = '//' + environment.host + environment.blockEndpoint;
      return this.http.get(url + '?id=' + id)
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

