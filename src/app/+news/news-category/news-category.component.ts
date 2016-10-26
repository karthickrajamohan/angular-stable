import { Component, OnInit } from '@angular/core';




@Component({
 
  selector: 'app-news-category',
  templateUrl: 'news-category.component.html',
  styleUrls: ['news-category.component.css'],
  
})
export class NewsCategoryComponent implements OnActivate {
  public categoryName: string;
  
  constructor(
      private _router: Router) {
  }

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    //placeholder for init if we have to do something!
    this.categoryName = curr.getParam('id');
  }
}
