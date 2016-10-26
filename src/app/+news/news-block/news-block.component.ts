import { Component, Input, OnInit } from '@angular/core';
import {Utils} from '../../utils';
import {News, NewsService} from '../news.service';
import { Router }   from '@angular/router';

@Component({
 
  selector: 'app-news-block',
  templateUrl: 'news-block.component.html',
  styleUrls: ['news-block.component.css']
})

export class NewsBlockComponent implements OnInit {
    @Input() count;
    @Input() cols;
    @Input() detailPath: string = "/news";
    @Input() category: string;
    @Input() customClass: string;
    @Input() minimal: boolean = false;
    @Input() headerText: string;
    @Input() viewMore: boolean = false;

    public news: News[];
    public selectedNews: News;

    constructor(private _newsService: NewsService, private _router: Router ){ }

    getNews(){
        this.selectedNews = undefined;
        this.news = [];
        
        this._newsService.getNews(this.category).subscribe(
            data => { this.news = data },
            err => console.error( err),
            () => console.log('done')
        );
        
        return this.news;
    }
    
    gotoDetail(news: News) {
        let id:string;
        this.selectedNews = news;
        id = Utils.getSlug(this.selectedNews.path);
        let link = ['/news',id];
        this._router.navigate(link);
    }
    
    ngOnInit (){
      this.news = this.getNews();
      if (!this.cols){
          this.cols = "grid-5_xs-1"; //Have this on the build.
      }      
    }

}
