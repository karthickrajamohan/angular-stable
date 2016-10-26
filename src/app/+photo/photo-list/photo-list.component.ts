import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-photo-list',
  templateUrl: 'photo-list.component.html',
  styleUrls: ['photo-list.component.css'],
 
})
export class PhotoListComponent implements OnActivate {
  private currSegment: RouteSegment;
  public path: string;

  constructor() {}

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    this.currSegment = curr;
    this.path="/photo";
    /*We might not need this now! But we might need it later. Not sure man!*/
  }

}
