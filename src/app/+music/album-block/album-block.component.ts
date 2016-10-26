import { Component, Input, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import {Utils} from '../../utils';
import {Album, MusicService} from '../music.service';


@Component({
  selector: 'app-album-block',
  templateUrl: 'album-block.component.html',
  styleUrls: ['album-block.component.css'],
  providers: [MusicService]
})
export class AlbumBlockComponent implements OnInit {
  @Input() count;
  @Input() cols;
  @Input() detailPath: string = "/album";
  @Input() customClass: string;

  constructor(private _musicService: MusicService, private _router: Router) { }

  public albums: Album[];
  public selectedAlbum: Album;

  getAlbum() {
    this.selectedAlbum = undefined;
    this.albums = [];

    this._musicService.getAlbum().subscribe(
      data => { this.albums = data },
      err => console.error(err),
      () => console.log('done')
    );
    return this.albums;
  }
  gotoDetail(album: Album) {
    let id: string;
    this.selectedAlbum = album;
    id = Utils.getSlug(this.selectedAlbum.path);
    this._router.navigate([this.detailPath + `/${id}`]);
  }
  ngOnInit() {
    this.albums = this.getAlbum();
    if (!this.cols) {
      this.cols = "grid-5_xs-1"; //Have this on the build.
    }
  }

}
