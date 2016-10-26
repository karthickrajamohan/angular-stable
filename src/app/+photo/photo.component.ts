import { Component } from '@angular/core';
import { PhotoBlockComponent } from './photo-block/photo-block.component';
import { PhotoService } from './photo.service';

@Component({

  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['photo.component.css'],
   providers:  [PhotoService]
})


export class PhotoComponent  {
}
