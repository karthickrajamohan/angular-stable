import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

import { routing } from './app.routes';

import { VideoBlockComponent } from './+video/video-block';
import { VideoComponent} from './+video/video.component'
import { VideoListComponent} from './+video/video-list/video-list.component';
import { VideoDetailBlockComponent} from './+video/video-detail-block/video-detail-block.component';
import { Video,VideoService } from "./+video/video.service";
import {VideoDetailComponent} from './+video/video-detail/video-detail.component'


import {BlockComponent} from './block/block.component';
import {BlockService} from './block/block.service';

import {HomeComponent} from './+home/home.component';

import {TourComponent} from './+tour/tour.component';
import {TourSearch} from './+tour/tour-search.pipe';
import { TourService } from "./+tour/tour.service";
import {TourBlockComponent} from './+tour/tour-block/tour-block.component';

import {NewsBlockComponent} from './+news/news-block/news-block.component';
import { NewsService } from "./+news/news.service";
import {NewsComponent} from './+news/news.component';
import { NewsListComponent } from './+news/news-list/news-list.component';

import {PhotoBlockComponent} from './+photo/photo-block/photo-block.component';
import {PhotoService} from './+photo/photo.service';

import {LightboxComponent} from './lightbox/lightbox.component';

import {SocialButtonsComponent} from './shared/social-buttons/social-buttons.component';



@NgModule({
  declarations: [AppComponent,VideoComponent,VideoBlockComponent,
    VideoListComponent,VideoDetailBlockComponent,BlockComponent,HomeComponent,TourComponent,
    TourSearch,TourBlockComponent,NewsBlockComponent,PhotoBlockComponent,LightboxComponent,SocialButtonsComponent,
    NewsComponent,NewsListComponent,VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    JsonpModule 
  ],
  providers: [BlockService,TourService,VideoService,NewsService,PhotoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
