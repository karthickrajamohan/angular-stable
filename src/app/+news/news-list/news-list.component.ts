import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-news-list',
  templateUrl: 'news-list.component.html',
  styleUrls: ['news-list.component.css'],
 
})
export class NewsListComponent implements OnActivate {
  private currSegment: RouteSegment;
  public path: string;
  
  constructor() {}

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    this.currSegment = curr;
    this.path="/news";
    /*We might not need this now! But we might need it later. Not sure man!*/
  }

}
