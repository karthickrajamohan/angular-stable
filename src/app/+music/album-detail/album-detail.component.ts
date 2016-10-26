import { Component, Input, OnInit, } from '@angular/core';
import { MusicService, Album, Audio,Embed } from '../music.service';
import { SocialButtonsComponent } from "../../shared/social-buttons";
import { Utils } from "../../utils";
import {NgSwitch, NgSwitchWhen, NgSwitchDefault} from '@angular/common';

@Component({

  selector: 'app-album-detail',
  templateUrl: 'album-detail.component.html',
  styleUrls: ['album-detail.component.css'],
   providers: [MusicService]
})
export class AlbumDetailComponent implements OnActivate {
  @Input() album: Album;
  public trackList: Audio[];
  public embedList:Embed[];
  public id:string;
  public visibleEmbed : string;
  public selectedIndex :number = 0;

  constructor(private _musicService: MusicService,
      private _router: Router) {}

  routerOnActivate(curr: RouteSegment): void {
    this.id = curr.getParam('id');
    this._musicService.getAlbumDetail(this.id).subscribe(
      data => {
        this.album = data[0];
        //this.album.streamingLinks = Utils.getArrayofObjects(data[0].streamingLinks);
        this.album.albumArt = Utils.getImageSrc(this.album.albumArt);
      },
      err => console.log(err),
      () => console.log('done')
    );
    this._musicService.getAudioList(this.id).subscribe(
      data => {this.trackList = data;}
    );
    this._musicService.getAlbumEmdeds(this.id).subscribe(
      data => {this.embedList = data;this.visibleEmbed =this.embedList[0].service}
    );
  }
  displayEmbed(list:Embed,i) {
    this.visibleEmbed = list.service;
    this.selectedIndex = i;
  }
}
