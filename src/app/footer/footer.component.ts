import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faPinterestP } from '@fortawesome/fontawesome-free-brands';
import { faTelegram } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook= faFacebook;
  faTwitter= faTwitter;
  faLinkedin=faLinkedin;
  faPinterestP=faPinterestP;
  faTelegram=faTelegram;

  constructor() { }

  ngOnInit(): void {
  }

}
