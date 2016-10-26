import { Component, OnInit, Input } from '@angular/core';

import {Utils} from '../utils';
import {Taxonomy, TaxonomyService} from './taxonomy.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-taxonomy-list',
  templateUrl: 'taxonomy-list.component.html',
  styleUrls: ['taxonomy-list.component.css'],
  providers: [TaxonomyService]
})
export class TaxonomyListComponent implements OnInit {
  @Input() count;
  @Input() cols;
  @Input() name: string;
  @Input() blockTitle: string;
  @Input() path: string;
  
  public taxonomy: Taxonomy[];
  
  constructor(private _taxonomyService: TaxonomyService){ }

  getTaxonomy (){
    this.taxonomy = [];
    this._taxonomyService.getTaxonomy(this.name).subscribe(
      data => {
          if (this.count){
              this.taxonomy = data.slice(0,this.count);    
          }else{
              this.taxonomy = data
          }           
      },
      err => console.error( err),
      () => console.log('done')
    )
    
    return this.taxonomy;
  }
  ngOnInit() {
    this.taxonomy = this.getTaxonomy(); 
  }

}
