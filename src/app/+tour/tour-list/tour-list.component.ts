import { Component, OnInit } from '@angular/core';

@Component({
 
  selector: 'app-tour-list',
  templateUrl: 'tour-list.component.html',
  styleUrls: ['tour-list.component.css'],
 
})
export class TourListComponent implements OnActivate {
  private currSegment: RouteSegment;
  public path: string;

  constructor() {}

  routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
    this.currSegment = curr;
    this.path="/tour";
    /*We might not need this now! But we might need it later. Not sure man!*/
  }

}
