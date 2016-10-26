import { Component, OnInit, Input } from '@angular/core';

import {Utils} from '../../utils';
import {Audio, MusicService} from '../music.service';
import {SpotifyService} from '../spotify.service';


@Component({
  
  selector: 'app-track-block',
  templateUrl: 'track-block.component.html',
  styleUrls: ['track-block.component.css'],
  providers: [MusicService, SpotifyService],
 
})
export class TrackBlockComponent implements OnInit {
  @Input() count;
  @Input() cols;
  @Input() detailPath: string = "/audio";

  public audio: Audio[];
  public selectedAudio: Audio;
  public showSideDrawer: boolean = false;
  public sidedrawercontent: Audio[];
  public fieldCollectionservices = new Array();
  public fieldStreamingServices = new Array();

  constructor(private _musicService: MusicService,
    private _router: Router,
    private _spotifyService: SpotifyService) { }
  getAudio() {
    this.selectedAudio = undefined;
    this.audio = [];

    this._musicService.getAudio().subscribe(
      data => {
        if (this.count) {
          this.audio = data.slice(0, this.count); 
        } else {
          this.audio = data;
        }

        this.mapSpotifyData();
      },
      err => console.error(err),
      () => console.log('done')
    );
    return this.audio;
  }

  modifyFieldCollectionData(sidedrawercontent,type) {
    var range = document.createRange();
    range.selectNode(document.body);
    var fragment = range.createContextualFragment(sidedrawercontent);
    var m = fragment.querySelectorAll(".field-collection-item .content div div");
    var downLinksobj = [];
    for (var i = 0; i < m.length; i += 4) {
      var obj = {};
      obj[m[i + 1].textContent] = m[i + 3].textContent;
      downLinksobj.push(obj);
    }
    for(var i=0;i < downLinksobj.length;i++){
      if(type=="download"){
        this.fieldCollectionservices.push(Object.keys(downLinksobj[i])); 
      }else{
        this.fieldStreamingServices.push(Object.keys(downLinksobj[i])); 
      }
      
    }
    return downLinksobj;
  }

  mapSpotifyData() {
    for (let a of this.audio) {
      this._spotifyService.getSpotifyData(a.spotifyTrackID)
        .subscribe(
        data => {
          a.albumArt = data.album.images[0].url;
          a.source = data.preview_url;
          a.isPlaying = false;
        },
        err => console.error(err),
        () => console.log('done')
        );
    }
  }

  gotoDetail(audio: Audio) {
    /*let id:string;
    this.selectedAudio = audio;
    id = Utils.getSlug(this.selectedAudio.path);
    this._router.navigate([this.detailPath + `/${id}`]);
    */
  }

  onAudioPlayerStateChange(event, index) {
    this.audio[index].isPlaying = event.isPlaying;
  }

  toggleSideDrawer(audio) {
    this.showSideDrawer = !this.showSideDrawer;
    if (audio && typeof audio.field_download_links !== "object" && audio.field_download_links !== "") {
      let temp = audio;      
      temp.field_download_links = this.modifyFieldCollectionData(temp.field_download_links,"download");
      temp.field_streaming_links = this.modifyFieldCollectionData(temp.field_streaming_links,"streaming");  
      this.sidedrawercontent = temp;
    }else if(audio && audio.field_download_links !== ""){
      this.sidedrawercontent = audio;
    }
     else {
      this.sidedrawercontent = null;
    }
  } 

  onSelect(audio: Audio) {
    this.selectedAudio = audio;
  }
  ngOnInit() {
    this.audio = this.getAudio();
    if (!this.cols) {
      this.cols = "grid-5_xs-1"; //Have this on the build.
    }
  }
}
