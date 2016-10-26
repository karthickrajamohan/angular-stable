import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-social-buttons',
  templateUrl: 'social-buttons.component.html',
  styleUrls: ['social-buttons.component.css']
})

export class SocialButtonsComponent implements OnInit {
  @Input() link: string;
  @Input() facebook: boolean = true;
  @Input() googlePlus: boolean = true;
  @Input() twitter: boolean = true;
  @Input() mailto: boolean = true;
  public hostURL: string;
  public windowDim: string = "width=600,height=450";
  @Input() customClass: string;

  constructor() { }

  facebookClick() {
    if (this.link) {
      window.open("http://www.facebook.com/sharer.php?u=" + this.hostURL + this.link,
        "_blank",
        this.windowDim);
    }
  }

  googlePlusClick() {
    if (this.link) {
      window.open("https://plus.google.com/share?url=" + this.hostURL + this.link,
        "_blank",
        this.windowDim);
    }
  }

  twitterClick() {
    if (this.link) {
      window.open("https://twitter.com/share?url=" + this.hostURL + this.link,
        "_blank",
        this.windowDim);
    }
  }

  mailtoClick() {
    if (this.link) {
      window.open("mailto:?subject=" + this.hostURL + this.link,
        "_blank",
        this.windowDim);
    }
  }

  ngOnInit() {
    this.hostURL = "http://" + environment.host + "/";
  }

}