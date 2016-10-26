import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Utils } from '../utils'
import { environment } from '../environment';

export interface Audio {
    title: string;
    body: string;
    albumArt: string;
    nid: string;
    path: string;
    albumName: string;
    spotifyTrackID: string;
    source: string;
    isPlaying: boolean;
    albumLink:string;
}

export interface Album {
    title: string;
    path: string; 
    embed: string;
    albumArt: string;
    releaseDate: string;
    streamingLinks: any;
    nid: string;    
}

export interface Embed {
    service: string;
    embed: string;
    nid: string;
}


@Injectable()
export class MusicService {

  constructor(private http:Http) {}
  
    getAudio(): Observable<Audio[]>{
        let url:string
       
        url  = '//' + environment.host + environment.audioListEndpoint;
       
        return this.http.get(url)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }
    
    getAudioDetail(id: String){
        var nid:String = Utils.getNID(id);
        var url:string = '//' + environment.host + environment.audioDetailEndpoint;
        return this.http.get(url + '?nid=' + nid)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }
    
    /* Used to get the list of track for each album */
    getAudioList(id: string){
        let nid: string = Utils.getNID(id);
        var url:string = '//' + environment.host + environment.audioAlbumListEndpoint;
        return this.http.get(url + '?nid=' + nid)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    /* Used to get the list of embeds for each album */
    getAlbumEmdeds(id: string){
        let nid: string = Utils.getNID(id);
        var url:string = '//' + environment.host + environment.albumEmbedEndpoint;
        return this.http.get(url + '?nid=' + nid)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    getAlbum():Observable <Album[]>{
        let url:string = '//' + environment.host + environment.albumListEndpoint;
       
        return this.http.get(url)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    getAlbumDetail(id: String){
        let nid:String = Utils.getNID(id);
        let url:string = '//' + environment.host + environment.albumDetailEndpoint;
        
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