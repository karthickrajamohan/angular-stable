import { Component, Input, OnInit } from '@angular/core';
import { MusicService, Audio } from '../music.service';
import { SocialButtonsComponent } from "../../shared/social-buttons"


@Component({
   selector: 'app-track-detail',
  templateUrl: 'track-detail.component.html',
  styleUrls: ['track-detail.component.css']
})
export class TrackDetailComponent implements OnActivate {
  @Input() audio: Audio;
  public id:string;
  constructor(private _musicService: MusicService,
      private _router: Router) {}


  routerOnActivate(curr: RouteSegment): void {
    this.id = curr.getParam('id');
    this._musicService.getAudioDetail(this.id).subscribe(
      data => this.audio = data[0],
      err => console.log(err),
      () => console.log('done')
    )
  }
}
