import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-photo-list',
  templateUrl: 'photo-list.component.html',
  styleUrls: ['photo-list.component.css'],
 
})
export class PhotoListComponent  {
  public path: string;

  constructor() {}

  routerOnActivate() {
    /*We might not need this now! But we might need it later. Not sure man!*/
  }

}
