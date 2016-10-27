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
import {VideoDetailComponent} from './+video/video-detail/video-detail.component';


import {BlockComponent} from './block/block.component';
import {BlockService} from './block/block.service';

import {HomeComponent} from './+home/home.component';

import {TourComponent} from './+tour/tour.component';
import {TourSearch} from './+tour/tour-search.pipe';
import { TourService } from "./+tour/tour.service";
import {TourBlockComponent} from './+tour/tour-block/tour-block.component';
import {TourListComponent} from './+tour/tour-list/tour-list.component';

import {NewsBlockComponent} from './+news/news-block/news-block.component';
import { NewsService } from "./+news/news.service";
import {NewsComponent} from './+news/news.component';
import { NewsListComponent } from './+news/news-list/news-list.component';
import { NewsDetailComponent } from './+news/news-detail/news-detail.component';

import {PhotoBlockComponent} from './+photo/photo-block/photo-block.component';
import {Photo,PhotoService} from './+photo/photo.service';
import {PhotoComponent} from './+photo/photo.component';
import {PhotoListComponent} from './+photo/photo-list/photo-list.component'; 
import { PhotoDetailComponent} from './+photo/photo-detail/photo-detail.component';


import {LightboxComponent} from './lightbox/lightbox.component';

import {SocialButtonsComponent} from './shared/social-buttons/social-buttons.component';

import {TaxonomyListComponent} from './taxonomy-list/taxonomy-list.component';

import {MerchComponent} from './merch/merch.component';
import { MerchService } from "./merch/merch.service";

import {MusicComponent} from './+music/music.component';
import {TrackBlockComponent} from './+music/track-block/track-block.component';
import {AlbumBlockComponent} from './+music/album-block/album-block.component';
import {CustomAudioComponent} from './+music/custom-audio/custom-audio.component';
import {MusicListComponent} from './+music/music-list/music-list.component';
import {AlbumDetailComponent} from './+music/album-detail/album-detail.component';

@NgModule({
  declarations: [AppComponent,VideoComponent,VideoBlockComponent,
    VideoListComponent,VideoDetailBlockComponent,BlockComponent,HomeComponent,TourComponent,
    TourSearch,TourBlockComponent,NewsBlockComponent,PhotoBlockComponent,LightboxComponent,SocialButtonsComponent,
    NewsComponent,NewsListComponent,VideoDetailComponent,PhotoComponent,PhotoListComponent,PhotoDetailComponent,
    TaxonomyListComponent,NewsDetailComponent,MerchComponent,TourListComponent,MusicComponent,TrackBlockComponent,
    AlbumBlockComponent,CustomAudioComponent,MusicListComponent,AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    JsonpModule 
  ],
  providers: [BlockService,TourService,VideoService,NewsService,PhotoService,MerchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
