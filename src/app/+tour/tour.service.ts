import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { environment } from '../../environments/environment';

export interface Tour {
  date: Date;
  city: string;
  state: string;
  country: string;
  venue: string;
  acts: string;
  ticketLink: string;
  RSVP: string;
  vip: string;
  ticketStatus: string; 
  status: string; 
}

@Injectable()
export class TourService {

  constructor(private jsonp: Jsonp) { }

  getTour() {
    var url: string =  environment.tourEndpoint + "&callback=JSONP_CALLBACK";
    return this.jsonp.get(url )
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  mapTourInfo(data): Tour[] {
    let tourDates: Array<Tour> = new Array<Tour>();
    
    for (let t of data){
      let tourDate = <Tour>{};
      tourDate.city = t.venue.city;
      tourDate.date = new Date(t.datetime);
      tourDate.state = t.venue.region;
      tourDate.country = t.venue.country;
      tourDate.venue = t.venue.name;
      tourDate.ticketLink = t.ticket_url;
      tourDate.RSVP = t.facebook_rsvp_url;
      tourDate.vip = t.custom_url;
      tourDate.status = t.ticket_status;
      tourDates.push(tourDate);
    }

    return tourDates;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
