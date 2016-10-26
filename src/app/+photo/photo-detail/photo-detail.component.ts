import { Component, Input } from '@angular/core';
import { Photo, PhotoService } from '../photo.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-photo-detail',
  templateUrl: 'photo-detail.component.html',
  styleUrls: ['photo-detail.component.css'],
 
})
export class PhotoDetailComponent  {
  @Input() photo: Photo;
  public id:string;

  constructor(private _photoService: PhotoService,
      private _router: Router) {
  }
  
  routerOnActivate(): void {
    
  }

}
