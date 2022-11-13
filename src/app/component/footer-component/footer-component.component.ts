import { Component, OnInit } from '@angular/core';
import { version, facebookUrl, youtubeUrl, linkedInUrl, intagramUrl, githubUrl } from '../../constants/constant';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

  version = version;
  facebookUrl = facebookUrl;
  youtubeUrl = youtubeUrl;
  linkedInUrl = linkedInUrl;
  intagramUrl = intagramUrl;
  githubUrl = githubUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
