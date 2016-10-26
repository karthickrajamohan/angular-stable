import { Component, OnInit } from '@angular/core';
import {  Routes } from '@angular/router';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoBlockComponent }   from './video-block/video-block.component';
import { VideoService }         from './video.service';


@Component({
  selector: 'app-video',
  templateUrl: 'video.component.html',
  styleUrls: ['video.component.css'],
  providers:  [VideoService]
})
export class VideoComponent  {
}
