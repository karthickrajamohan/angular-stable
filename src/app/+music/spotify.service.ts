import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

export interface Spotify{
  preview_url:string;

}

@Injectable()
export class SpotifyService {

  constructor(private http:Http) {}

  /*
    What we have to do this is this:

    fetchTrackDetail 

   
  getTrackDetails(spotifyTrackID:string){
    let audio = {
      audioSrc:"",
      albumArt:""
    }
    this.getSpotifyData(spotifyTrackID)

    
  }*/
  getSpotifyData(spotifyTrackID:string){
    let url = "https://api.spotify.com/v1/tracks/"+spotifyTrackID;
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
