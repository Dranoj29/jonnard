import { Component, OnInit, Input, AfterViewInit , ElementRef, HostListener, ViewChild } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Util } from 'src/app/util/util';
import { ImageData } from '../interface/interface';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit, AfterViewInit {

  @Input() admin = false;
  @Input() mobileView = false;

  action = 'noaction';
  list: any[] = [];

  name = new FormControl('', Validators.required);

  // isAddIntoView: boolean = true;
  // @ViewChild('add', {static: false}) private addElement!: ElementRef<HTMLDivElement>;

  expertise: [] = [];
  selectedExpertise = {} as ImageData;
  addExpertiseList: ImageData[] = [];
  invalidFileMessage = '';

  constructor() {
    let image1 = {} as ImageData;
    image1.id = 0;
    image1.name = 'Spring Framework'
    image1.imageSrc = 'assets/images/spring.png'; 
    let image2 = {} as ImageData;
    image2.id = 1;
    image2.name = 'Angular'
    image2.imageSrc = 'assets/images/angular.png'; 
    let image3 = {} as ImageData;
    image3.id = 2;
    image3.name = 'Gradle'
    image3.imageSrc = 'assets/images/gradle.png'; 
    let image4 = {} as ImageData;
    image4.id = 3;
    image4.name = 'Swagger'
    image4.imageSrc = 'assets/images/swagger.png'; 
     let image5 = {} as ImageData;
    image5.id = 4;
    image5.name = 'Angular'
    image5.imageSrc = 'assets/images/angular.png'; 
    let image6 = {} as ImageData;
    image6.id = 5;
    image6.name = 'Gradle'
    image6.imageSrc = 'assets/images/gradle.png'; 
    let image7 = {} as ImageData;
    image7.id = 6;
    image7.name = 'Swagger'
    image7.imageSrc = 'assets/images/swagger.png'; 
    let image8 = {} as ImageData;
    image8.id = 7;
    image8.name = 'Spring Framework'
    image8.imageSrc = 'assets/images/spring.png'; 

    const arr = [image1, image2, image3, image4, image5, image6, image7, image8, image8, image8];
    this.expertise = Util.convertListWithNColumn(Util.convertListWithNColumn(arr, 2), 2);

    console.log(this.expertise)

  }

  ngOnInit(): void {
    //this.list = Util.convertListWithNColumn(Util.convertListWithNColumn(this.sample, 2, true), 2);
    //console.log(this.list);
  }

  ngAfterViewInit(): void {
  }

  // @HostListener('window:scroll', ['$event'])
  // onScrollView(){
  //   if(this.addElement){
  //     const rect = this.addElement.nativeElement.getBoundingClientRect();
  //     const onTopShown = rect.top >=0;
  //     const onBottomShown = rect.bottom <= window.innerHeight;
  //     this.isAddIntoView = onTopShown && onBottomShown;
  //   }
  // }

  toggleAction(action: string, expertise?: any): void{
    this.action = action;

    if(expertise){
      this.selectedExpertise = Object.assign({}, expertise);
    }
  }

  onDelete(expertise:ImageData): void{
    console.log(expertise.name);
  }

  onSelectFile(event: any): void{
    let file = event.target.files[0];
    if(file.type.startsWith('image')){
      this.selectedExpertise.file = file;
      const reader = new FileReader();
      reader.onload = e => this.selectedExpertise.imageSrc = reader.result!;
      reader.readAsDataURL(file);
    }else{
      this.invalidFileMessage = 'selected file is not an image.';
      setTimeout(()=>{
        this.invalidFileMessage = '';
      }, 12000);
    }
  }

  onSelectFiles(event: any){
    let files: any[] = event.target.files;
    let index = 0;
    let invalidCount = 0;
    while(this.addExpertiseList.length < 6 && index < files.length){
      if(files[index].type.startsWith('image')){
        let expertise = {} as ImageData;
        expertise.name = '';
        expertise.file = files[index];
        const reader = new FileReader();
        reader.onload = e => expertise.imageSrc = reader.result!;
        reader.readAsDataURL(files[index]);
        this.addExpertiseList.push(expertise);
      }else{
        invalidCount++;
      }
      index++;
    }

    if(invalidCount>0){
      this.invalidFileMessage = invalidCount + ' of selected file is not a valid image.'
      setTimeout(()=>{
        this.invalidFileMessage = '';
      }, 10000);
    }
  }

  isaddExpertiseListValid(): boolean{
    let invalidCount = 0;
    this.addExpertiseList.forEach(expertise=>{
      if(expertise.name.length == 0){
        invalidCount++;
      }
    });
    if(invalidCount==0){
      return true;
    }
    return false;
  }

  onChangeExpertiseName(event: any){
    this.selectedExpertise.name = event.target.value;
  }
}
