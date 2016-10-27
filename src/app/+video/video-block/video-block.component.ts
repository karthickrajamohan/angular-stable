import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {Utils} from '../../utils';
import {Video, VideoService} from '../video.service';

@Component({
  selector: 'app-video-block',
  templateUrl: 'video-block.component.html',
  styleUrls: ['video-block.component.css']
})
export class VideoBlockComponent implements OnInit {
    @Input() count;
    @Input() cols;
    @Input() detailPath: string = "/video";
    @Input() category: string ;
    @Input() customClass: string;
    @Input() headerText: string;
    @Input() minimal: boolean = false;
    public videos: Video[];
    public selectedVideo: Video;  
    
    
    constructor(private _videoService: VideoService, private _router: Router){ }
    
    getVideos(){
        this.selectedVideo = undefined;
        this.videos = [];
        
        this._videoService.getVideos(this.category).subscribe(
            data => { this.videos = data },
            err => console.error( err),
            () => console.log('done')
        );
        
        return this.videos;
    }
    
    gotoDetail(video: Video) {
        let id:string;
        this.selectedVideo = video;
        id = Utils.getSlug(this.selectedVideo.path);
        let link = ['/video',id];
        this._router.navigate(link);
    }
 
    ngOnInit (){
      this.videos = this.getVideos();
      if (!this.cols){
          this.cols = "grid-5_xs-1"; //Have this on the build.
      }      
    }

}
