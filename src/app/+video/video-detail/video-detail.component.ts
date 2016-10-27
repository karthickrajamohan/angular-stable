import { Component, Input } from '@angular/core';
import { Video, VideoService } from '../video.service';
import { ActivatedRoute,Router,Params } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: 'video-detail.component.html',
  styleUrls: ['video-detail.component.css'],  
})

export class VideoDetailComponent  {
  @Input() video: Video;
  public id: string;
  
  constructor(private _videoService: VideoService, private route: ActivatedRoute, private router: Router) {
  }
  
  ngOnInit():void {      
    this.route.params.forEach((params: Params) => {      
      this.id = params['id'];
    });
  }

}
