import { Component, Input, OnInit, } from '@angular/core';
import { MusicService, Album, Audio,Embed } from '../music.service';
import { SocialButtonsComponent } from "../../shared/social-buttons";
import { Utils } from "../../utils";
import {NgSwitch, NgSwitchDefault} from '@angular/common/index';
import {Router,ActivatedRoute,Params } from '@angular/router'
import {DomSanitizer} from '@angular/platform-browser';


@Component({

  selector: 'app-album-detail',
  templateUrl: 'album-detail.component.html',
  styleUrls: ['album-detail.component.css'],
   providers: [MusicService]
})
export class AlbumDetailComponent  {
  @Input() album: Album;
  public trackList: Audio[];
  public embedList:Embed[];
  public id:string;
  public visibleEmbed : string;
  public selectedIndex :number = 0;

  constructor(private _musicService: MusicService,
       private route: ActivatedRoute,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this._musicService.getAlbumDetail(params['id']).subscribe(
        data => {
          this.album = data[0];        
          this.album.albumArt = Utils.getImageSrc(this.album.albumArt);
        },
        err => console.error(err),
        () => console.log('done')
      );
      this._musicService.getAudioList(params['id']).subscribe(
        data => {
          this.trackList = data;
        }
      );
    this._musicService.getAlbumEmdeds(params['id']).subscribe(
      data => {
        this.embedList = data;
        this.visibleEmbed =this.embedList[0].service;
        for(let x =0; x < this.embedList.length;x++){
          this.embedList[x].safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.embedList[x].embed.toString());
        }        
      }
    );     

    });
  }

  displayEmbed(list:Embed,i) {
    this.visibleEmbed = list.service;
    this.selectedIndex = i;
  }
}
