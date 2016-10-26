import { Component, OnInit } from '@angular/core';

import { NewsBlockComponent } from './news-block/news-block.component';

import { NewsService } from './news.service';

@Component({
    selector: 'app-news',
    templateUrl: 'news.component.html',
    styleUrls: ['news.component.css'],
    providers:  [NewsService]
})


export class NewsComponent {
}
