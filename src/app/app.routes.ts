// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
import { Routes, RouterModule } from '@angular/router';

import { VideoComponent } from './+video/video.component';
import { VideoListComponent} from './+video/video-list/video-list.component';
import {VideoDetailComponent} from './+video/video-detail/video-detail.component'

import { NewsComponent } from './+news/news.component';
import { NewsListComponent } from './+news/news-list/news-list.component';

import { AppComponent} from './app.component';

import {HomeComponent} from './+home/home.component';

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
            }
        ]
    }    
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);