import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ResumeData } from 'src/app/model/IResumeData';
import { HttpClientService } from 'src/app/sevices/http/http-client.service';
import { PROPERTIES } from 'src/app/constants/constant';
import { MatDialogService } from 'src/app/sevices/mat-dialog.service';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {
  
  activeRoute = 'cv';
  @Input() admin = false;
  @Input() mobileView = false;
  action = 'noaction';

  email = new FormControl('');
  subject = new FormControl('');
  body = new FormControl('');

  resume = {} as ResumeData;
  imageFile: File|null = null;
  pdfFile: File|null = null;
  invalidFileMessage = '';

  constructor(private httpService: HttpClientService, 
    private dialogService: MatDialogService
  ) { }

  ngOnInit(): void {
    this.getResume();
  }

  toggleAction(action: string):void{
    this.action = action;
  }

  onSelectImage(event:any):void{
    console.log(event.target.files);
     const file = event.target.files[0];
    if(file.type.startsWith('image')){
        this.imageFile = file;
    }else{
      this.invalidFileMessage = 'Error ~ selected file is not an image.';
      setTimeout(()=>{
        this.invalidFileMessage = '';
      }, 12000);
    }
  }

  onSelectPdf(event:any):void{
    console.log(event.target.files);
    const file = event.target.files[0];
    if(file.type == 'application/pdf'){
      this.pdfFile = file;
    }else{
      this.invalidFileMessage = 'Error ~ selected file is not pdf file.';
      setTimeout(()=>{
        this.invalidFileMessage = '';
      }, 12000);
    }
  }

  getResume():void{
    this.httpService.getMyResume().subscribe(result=>{
      this.resume = result
      this.resume.imagePath = PROPERTIES.apiUrl + result.imagePath;
    });
  }

  upload():void{
    this.httpService.uploadResume(this.pdfFile!, this.imageFile!).subscribe((event)=>{
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

  download():void{
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
      this.dialogService.openErrorDialog("Download error, please check your network connection.");
    });
  }
}
