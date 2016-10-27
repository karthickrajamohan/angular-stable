import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-audio',
  templateUrl: 'custom-audio.component.html',
  styleUrls: ['custom-audio.component.css']
})
export class CustomAudioComponent implements OnInit {
  @Input() src: string;
  @Input() albumart: string;
  @Output() playerStateChange:EventEmitter<any> =  new EventEmitter();
  public audio:any;
  public currentTime: number = 0;
  public isPlaying: boolean = false;
  
  constructor() {}

  togglePlay(){
    this.isPlaying = !this.isPlaying;
    this.playerStateChange.emit({ isPlaying: this.isPlaying });
  }

  play(){
    this.audio.play();
    this.togglePlay();
  }

  pause(){
    this.audio.pause();
    this.togglePlay();
  }

  seek(event:any){
    this.audio.currentTime = event.target.value;
  }

  ngOnInit() {
    console.log("Audio - "+this.src);
    this.audio = new Audio(this.src);
    this.audio.ontimeupdate = ( () => {
      this.currentTime = this.audio.currentTime;
    })
    this.audio.onended = (()=>{
      this.togglePlay();
    })
  }
}

/*http://plnkr.co/edit/82AIzJB0668d8q2Gqa1V
http://plnkr.co/edit/zmwPpaiB7muySAmua9GZ
*/