import { Component, Input, OnInit } from '@angular/core';
import {Utils} from '../../utils';
import {Photo, PhotoService} from '../photo.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'app-photo-block',
  templateUrl: 'photo-block.component.html',
  styleUrls: ['photo-block.component.css'],

})

export class PhotoBlockComponent implements OnInit {
    @Input() count;
    @Input() cols;
    @Input() detailPath: string = "/photo";
    @Input() category: string ;
    @Input() headerText: string;
    @Input() linkToCategory: boolean = false;
    public photos: Photo[];
    public selectedPhoto: Photo;  
    public morePhotos:number = 0;
    private noData:boolean = true;
    public selectedIndex:number;
    @Input() showMoreButton :boolean =true;
    
    constructor(private _photoService: PhotoService, private _router: Router){ }
    
    getPhotos(){
        this.selectedPhoto = undefined;
        this.photos = [];
        
        this._photoService.getPhotos(this.category).subscribe(
            data => {for(let index in data){data[index].field_photo = Utils.getImageSrc(data[index].field_photo.toString())};this.photos = data;},
            err => console.error( err),
            () => console.log('done')
        );
        
        return this.photos;
    }
    
    lightboxClose (closed: boolean){
        if (closed){
            this.selectedPhoto = null;
        }
    }

    setSelectedPhoto(photo:Photo,i:number) {
        this.selectedPhoto = photo;
        this.selectedIndex = i;
    }

    loadMorePhotos(){
        this.morePhotos = this.morePhotos+this.count;
        this._photoService.loadMorePhotos(this.morePhotos,this.category).subscribe(
            data => {for(let index in data){data[index].field_photo = Utils.getImageSrc(data[index].field_photo.toString())};this.photos = this.photos.concat(data);if(data.length == 0 || data.length < this.count){this.noData = false}},
            err => console.error( err),
            () => console.log('done')
        );
    }
    
    gotoDetail(photo: Photo,linkToCategory: boolean) {
        let id:string;
        this.selectedPhoto = photo;
        id = Utils.getSlug(this.selectedPhoto.path);
        if(linkToCategory){
            id = "category/"+id;
        }
        //this._router.navigate(['/:id', { id: Utils.getSlug(this.selectedPhoto.path) }]);
        //this._router.navigate([`./${id}`], this.currSegment);
        //this._router.navigate(navigateByUrl)
        this._router.navigate([this.detailPath + `/${id}`]);
    }

    onSelect(photo: Photo) {
        this.selectedPhoto = photo;
    }
    ngOnInit (){
      this.photos = this.getPhotos();
      if (!this.cols){
          this.cols = "grid-5_xs-1"; //Have this on the build.
      }      
    }
}
