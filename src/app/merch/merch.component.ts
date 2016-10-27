import { Component, OnInit, Input } from '@angular/core';

import {Utils} from '../utils';
import {Merch, MerchService} from './merch.service';

@Component({
  selector: 'app-merch',
  templateUrl: 'merch.component.html',
  styleUrls: ['merch.component.css']
})

export class MerchComponent implements OnInit {
  @Input() count;
  @Input() cols;
  @Input() headerText: string;
  
  public merch: Merch[];
  
  constructor(private _merchService: MerchService){ }
  
  getMerch(){
  this.merch = [];

  this._merchService.getMerch().subscribe(
    data => { this.merch = data },
    err => console.error( err),
    () => console.log('done')
  );

  return this.merch;
  }
  
  ngOnInit() {
    this.merch = this.getMerch();
    if (!this.cols){
      this.cols = "grid-3_xs-1"; //Have this on the build.
    }      
  }

}
