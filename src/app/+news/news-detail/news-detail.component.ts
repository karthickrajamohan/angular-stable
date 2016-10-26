import { Component, Input } from '@angular/core';
import { News, NewsService } from '../news.service';


@Component({
   selector: 'app-news-detail',
  templateUrl: 'news-detail.component.html',
  styleUrls: ['news-detail.component.css'],
 
})
export class NewsDetailComponent implements OnActivate {
  @Input() news: News;
  public id:string;
  
  constructor(private _newsService: NewsService,
      private _router: Router) {
  }
  
  routerOnActivate(curr: RouteSegment): void {
    this.id = curr.getParam('id');
    this._newsService.getNewsDetail(this.id).subscribe(
      data => this.news = data[0],
      err => console.error(err),
      () => console.log('done')
    );
    
  }

}
