import { Component, Input, OnInit } from '@angular/core';
import {Tour, TourService} from '../tour.service';
import { TourSearch } from '../tour-search.pipe';

@Component({
  selector: 'app-tour-block',
  templateUrl: 'tour-block.component.html',
  styleUrls: ['tour-block.component.css']  
})
export class TourBlockComponent implements OnInit {
  @Input() count;
  @Input() cols;
  @Input() detailPath: string = "/tour";
  @Input() category: string ;
  @Input() headerText: string;
  @Input() customClass: string;

  public tour: Tour[];
  

  constructor(private _tourService: TourService){ }

  getTour(){
        this.tour = [];
        
        this._tourService.getTour().subscribe(
            data => {
                this.tour = this._tourService.mapTourInfo(data);
                /*if (this.count){
                    this.tour = this.tour.slice(0,this.count);    
                }*/
            },
            err => console.error( err),
            () => console.log('done')
        );
        
        return this.tour;
    }

  clearInput(){
    let element = (<HTMLInputElement>document.getElementById("close"));
    element.value = "";
  }  

  ngOnInit() {
    this.getTour();
  }

}
