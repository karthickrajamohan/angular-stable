import { Component, Input, OnInit } from '@angular/core';
import {Block, BlockService } from './block.service';

@Component({
  selector: 'app-block',
  templateUrl: 'block.component.html',
  styleUrls: ['block.component.css']
})
export class BlockComponent implements OnInit {
  @Input() blockID;
  public block: Block;

  constructor(private _blockService: BlockService) { }

  getBlock() {
    this._blockService.getBlock(this.blockID).subscribe(
      data => {
        this.block = data[0];
        console.log(data);
      },
      err => console.error(err),
      () => console.log('done')
    );

  }

  ngOnInit() {
    this.getBlock();
  }

}
