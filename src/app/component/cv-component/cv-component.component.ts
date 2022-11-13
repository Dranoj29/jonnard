import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ResumeData } from 'src/app/model/IResumeData';
import { HttpClientService } from 'src/app/sevices/http/http-client.service';
import { PROPERTIES } from 'src/app/constants/constant';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {
  
  activeRoute = 'cv';

  email = new FormControl('');
  subject = new FormControl('');
  body = new FormControl('');

  resume = {} as ResumeData;

  constructor(private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.getResume();
  }

  getResume(){
    this.httpService.getMyResume().subscribe(result=>{
      this.resume = result
      this.resume.imagePath = PROPERTIES.apiUrl + result.imagePath;
    });
  }

  upload(){
    let pdf = new File([], '');
    let img = new File([], '');
    this.httpService.uploadResume(pdf, img).subscribe((event)=>{
      switch(event.type){
        case HttpEventType.UploadProgress:
          console.log(event);
          break;
        case HttpEventType.Response:
          console.log(event);
          break;
      }

    })
  }

  download(){
    console.log('start download');
    this.httpService.dowloadResume().subscribe((data: Blob) => {
      const file = new Blob([data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      //window.open(fileURL);
      const a         = document.createElement('a');
      a.href        = fileURL;
      a.target      = '_blank';
      a.download    = 'Baysa_Jonnard_Cv.pdf';
      document.body.appendChild(a);
      a.click();
    },
    (error) => {
      console.log('Print PDF error: ', error);
    });
  }
}
