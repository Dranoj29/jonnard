import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { IServiceFeature } from 'src/app/model/IServiceFeature';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  projectDetailFormGroup: FormGroup;

  webTypes = ['Ecommerce', 'Blog', 'Business', 'Landing Page', 'Web Portal', 'Personal Web Page', 'Portfolio', 'Brochure', 'Other'];
  
  mustHaveFeatures: IServiceFeature[] = [];
  niceToHaveFeatures: IServiceFeature[] = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  @Output() projectDetailFormOutput = new EventEmitter<{formName: string, valid: boolean}>();

  constructor(private formBuilder: FormBuilder) { 

    this.projectDetailFormGroup = this.formBuilder.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      message: ['']
    });

  }

  ngOnInit(): void {
  }


  onClickWebTypeOption(type: string){
    if(type === 'Other'){
      this.projectDetailFormGroup.addControl('typeValue', new FormControl('', Validators.required));
      this.projectDetailFormGroup.updateValueAndValidity();
    }else if(this.projectDetailFormGroup.contains('typeValue')){
      this.projectDetailFormGroup.removeControl("typeValue");
      this.projectDetailFormGroup.updateValueAndValidity();
    }

    this.emitForm();
  }

  emitForm(){
    this.projectDetailFormOutput.emit({formName: 'projectDetailsForm', valid: this.projectDetailFormGroup.valid});
  }

  addFeature(event: MatChipInputEvent, code:string){
    const value = (event.value || '').trim();

    if (value) {
      if(code==='mustHave'){
        this.mustHaveFeatures.push({name: value});
      }else{
        this.niceToHaveFeatures.push({name: value});
      }
    }
    event.chipInput!.clear();
  }

  removeFeature(feature: IServiceFeature, code: string){
    let index = code==='mustHave'? this.mustHaveFeatures.indexOf(feature):this.niceToHaveFeatures.indexOf(feature);
    if (index >= 0) {
      code==='mustHave'?this.mustHaveFeatures.splice(index, 1):this.niceToHaveFeatures.splice(index, 1);
    }
  }

}
