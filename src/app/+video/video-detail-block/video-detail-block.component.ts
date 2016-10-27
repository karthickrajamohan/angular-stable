import { Component, Input, OnInit } from '@angular/core';

import {Utils} from '../../utils';
import {Video, VideoService} from '../video.service';
import { ActivatedRoute,Router,Params } from '@angular/router';

@Component({
  selector: 'app-video-detail-block',
  templateUrl: 'video-detail-block.component.html',
  styleUrls: ['video-detail-block.component.css']
})
export class VideoDetailBlockComponent implements OnInit {
  @Input() id: string;
  @Input() customClass: string;
  /*@Input() featured: boolean = false;*/
  @Input() frontpage: boolean = false;
  @Input() minimal: boolean = false;

  public video: Video;

  constructor(private _videoService: VideoService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
      this._videoService.getVideo(this.id,true).subscribe(
        data => this.video = data[0],
        err => console.error(err),
        () => console.log('video data done')
      );
  }
}
