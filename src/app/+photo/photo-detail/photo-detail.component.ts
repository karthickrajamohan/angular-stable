import { Component, Input } from '@angular/core';
import { Photo, PhotoService } from '../photo.service';
@Component({
  selector: 'app-photo-detail',
  templateUrl: 'photo-detail.component.html',
  styleUrls: ['photo-detail.component.css'],
 
})
export class PhotoDetailComponent implements OnActivate {
  @Input() photo: Photo;
  public id:string;

  constructor(private _photoService: PhotoService,
      private _router: Router) {
  }
  
  routerOnActivate(curr: RouteSegment): void {
    this.id = curr.getParam('id');
    this._photoService.getPhoto(this.id).subscribe(
      data => this.photo = data[0],
      err => console.error(err),
      () => console.log('done')
    );
    
  }

}
