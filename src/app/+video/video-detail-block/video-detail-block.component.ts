import { Component, Input, OnInit } from '@angular/core';

import {Utils} from '../../utils';
import {Video, VideoService} from '../video.service';
import { ActivatedRoute,Router,Params } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

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

  private safeHtml: any;

  public video: Video;

  constructor(private _videoService: VideoService, private route: ActivatedRoute, private router: Router,private sanitizer: DomSanitizer) {}

  ngOnInit() {
      this._videoService.getVideo(this.id,this.frontpage).subscribe(
        data => {
          this.video = data[0];
          this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.video.field_video.toString()); 
        },
        err => console.error(err),
        () => console.log('done')
      );
  }
}
