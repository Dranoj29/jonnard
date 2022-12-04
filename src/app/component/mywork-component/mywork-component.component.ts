import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, Input, ElementRef, HostListener, DoCheck, KeyValueDiffers} from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Util } from 'src/app/util/util';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { isThisTypeNode } from 'typescript';
import { FileData, ImageData, MyworkData } from '../interface/interface';



@Component({
  selector: 'app-mywork-component',
  templateUrl: './mywork-component.component.html',
  styleUrls: ['./mywork-component.component.css']
})
export class MyworkComponentComponent implements OnInit, AfterViewInit, DoCheck {

  @Input() admin = false;
  @Input() mobileView = false;

  activeRoute = 'myWork';
  action = 'noaction';

  myworkList = [];
  selectedMywork!: MyworkData;
  myworkDifferMap: any;
  myworkDiffer: any;
  myworkChange = false;

  myworkFormGroup!: FormGroup;
  files: FileData[] = [];
  invalidFileText = '';

  @ViewChildren(NgbCarousel) carouselList!:QueryList<NgbCarousel>;

  constructor(private formBuilder: FormBuilder,
      private differs: KeyValueDiffers
    ) {
    this.myworkFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      directUrl: ['', Validators.required],
      detail: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    let img0 = {} as ImageData;
    img0.id = 0;
    img0.name = 'Label 1';
    img0.imageSrc = 'assets/images/display-img.png';

    let img1 = {} as ImageData;
    img1.id =1;
    img1.name = 'Label 2';
    img1.imageSrc = 'assets/images/display-img.png';

    let mywork1 = {} as MyworkData;
    mywork1.id = 0;
    mywork1.name = 'Sample1';
    mywork1.detail = 'libero, a pharetra augue Nulla vitae vitae elit libero, a pharetra augue Null';
    mywork1.directUrl = '';
    mywork1.images = [img1, img0];
    
    let mywork2 = {} as MyworkData;
    mywork2.id = 1;
    mywork2.name = 'Sample2';
    mywork2.detail = 'Nulla vitae elit libero, a pharetra augue Nulla vitae vitae elit libero, a pharetra augue Null';
    mywork2.directUrl = '';
    mywork2.images = [img0, img1];

    this.myworkList = Util.convertListWithNColumn([mywork1, mywork2, mywork1, mywork2], 2);
    console.log(this.myworkList);
  }

  ngAfterViewInit(): void {
      this.carouselList.forEach(carousel=>{
        carousel.pause();
      });
  }

  ngDoCheck(): void {
    // if(this.selectedMywork){
    //   let diff = this.myworkDiffer.diff(this.selectedMywork.images);
    //   if(diff){
    //     this.myworkChange = true;
    //   }
    // }
  }

  onHover(i: number){
    this.carouselList.get(i)?.cycle();
  }

  onHoverOut(i: number){
    this.carouselList.get(i)?.pause();
    this.carouselList.get(i)?.select('0');
  }

  toggleAction(action: string, mywork?: any){
    this.action = action;
    this.selectedMywork = {} as MyworkData;

    switch(action){
      case 'add':
      break;

      case 'edit':     
          this.selectedMywork = Object.assign({}, mywork);
          this.myworkFormGroup.controls['name'].setValue(this.selectedMywork.name);
          this.myworkFormGroup.controls['directUrl'].setValue(this.selectedMywork.directUrl);
          this.myworkFormGroup.controls['detail'].setValue(this.selectedMywork.detail);
      break;

      case 'update-image': 
        
        this.selectedMywork = JSON.parse(JSON.stringify(mywork));
        // this.myworkDiffer = this.differs.find(this.selectedMywork.images).create();
        // let i = 0;
        // this.selectedMywork.images.forEach(image=>{
        //   this.myworkDifferMap[i] = this.differs.find(image).create();
        //   this.selectedMywork.images[i] = image;
        //   i++;
        // });
      break;

      default:
        setTimeout(()=>{
          this.carouselList.forEach(carousel=>{
            carousel.pause();
          });
        }, 500);
      break;
    }
  }

  onDelete(mywork: any){
    console.log("index: " + mywork.id);
  }

  onSelectFiles(event: any){
    let selectedFiles = event.target.files;
    let index = 0;
    let invalidCount = 0;
    while(this.files.length < 6 && index < selectedFiles.length){
      if(selectedFiles[index].type.startsWith('image')){
        this.pushImageFile(selectedFiles[index]);
      }else{
        invalidCount++;
      }
      index++;
    }

    if(invalidCount>0){
      this.invalidFileText = invalidCount + ' of selected file is not a valid image.'
      setTimeout(()=>{
        this.invalidFileText = '';
      }, 10000);
    }
  }

  private pushImageFile(file: File){
    let obj = {} as FileData;
    obj.file = file;
    const reader = new FileReader();
    reader.onload = e => obj.src = reader.result;
    reader.readAsDataURL(obj.file);
    this.files.push(obj);
  }

  onChangeSelectedMyworkLable(event: any, index: number){
    this.selectedMywork.images[index].name = event.target.value;
  }

  onChangeMyworkImage(event: any, index: number){
    const file = event.target.files[0];
    if(file.type.startsWith('image')){
      if(index > this.selectedMywork.images.length - 1){
        let image = {} as ImageData;
        image.imageSrc='';
        image.name='';
        this.selectedMywork.images.push(image);
      }

      const reader = new FileReader();
      reader.onload = e => this.selectedMywork.images[index].imageSrc = reader.result!;
      reader.readAsDataURL(file);
      this.selectedMywork.images[index].file = file;
    }else{
       this.invalidFileText = 'selected file is not an image.'
      setTimeout(()=>{
        this.invalidFileText = '';
      }, 10000);
    }

  }

}
