import { Component, Input } from '@angular/core';
import { News, NewsService } from '../news.service';
import {Router,ActivatedRoute,Params } from '@angular/router'

@Component({
   selector: 'app-news-detail',
  templateUrl: 'news-detail.component.html',
  styleUrls: ['news-detail.component.css'],
 
})
export class NewsDetailComponent  {
  @Input() news: News;
  public id:string;
  
  constructor(private _newsService: NewsService,
       private route: ActivatedRoute,) {
  }
  
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this._newsService.getNewsDetail(params['id']).subscribe(
        data => this.news = data[0],
        err => console.error(err),
        () => console.log('done')
      );
    });
  }

}
