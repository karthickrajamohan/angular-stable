import { Component, OnInit } from '@angular/core';
import { VideoBlockComponent } from '../video-block';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-video-list',
  templateUrl: 'video-list.component.html',
  styleUrls: ['video-list.component.css']
})

export class VideoListComponent  {
  private currSegment;
  public path: string;

  constructor(private route: ActivatedRoute) {}  
    private ngOnInit() {

  }

}
