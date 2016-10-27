// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
import { Routes, RouterModule } from '@angular/router';

import { VideoComponent } from './+video/video.component';
import { VideoListComponent} from './+video/video-list/video-list.component';
import { VideoDetailComponent} from './+video/video-detail/video-detail.component'

import { NewsComponent } from './+news/news.component';
import { NewsListComponent } from './+news/news-list/news-list.component';
import { NewsDetailComponent } from './+news/news-detail/news-detail.component';

import {PhotoComponent} from './+photo/photo.component';
import {PhotoListComponent} from './+photo/photo-list/photo-list.component'; 
import { PhotoDetailComponent} from './+photo/photo-detail/photo-detail.component';

import { AppComponent} from './app.component';

import {HomeComponent} from './+home/home.component';

import {TourComponent} from './+tour/tour.component';
import {TourListComponent} from './+tour/tour-list/tour-list.component';

import {MusicComponent} from './+music/music.component';
import {MusicListComponent} from './+music/music-list/music-list.component';
import {AlbumDetailComponent} from './+music/album-detail/album-detail.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'video',
        component: VideoComponent,
        children: [
            {
                path: '',
                component: VideoListComponent
            },
            {
                path:':id',
                component : VideoDetailComponent
            }

        ]
    },
    {
        path:'news',
        component : NewsComponent,
        children: [
            {
                path: '',
                component: NewsListComponent
            },
            {
                path: ':id',
                component: NewsDetailComponent
            }
        ]
    },
    {
        path:'photo',
        component : PhotoComponent,
        children: [
            {
                path: '',
                component: PhotoListComponent
            }
        ]
    },
    {
        path:'tour',
        component : TourComponent,
        children: [
            {
                path: '',
                component: TourListComponent
            }
        ]
    },
    {
        path:'music',
        component : MusicComponent,
        children: [
            {
                path: '',
                component: MusicListComponent
            }
        ]
    },
    {
        path:'album/:id',
        component : AlbumDetailComponent
    }    
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);