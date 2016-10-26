import { Component, OnInit } from '@angular/core';




@Component({

  selector: 'app-photo-category',
  templateUrl: 'photo-category.component.html',
  styleUrls: ['photo-category.component.css'],
  
})
export class PhotoCategoryComponent implements OnActivate {
  public categoryName: string;
  
  constructor(
      private _router: Router) {
  }

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    //placeholder for init if we have to do something!
    this.categoryName = curr.getParam('id');
  }
}
