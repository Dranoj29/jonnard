import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  activeRoute = 'services';

  activeService = 'web';

  isProjectDetailsFormValid: boolean = false;
  isPersonalInfoFormValid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onclickService(service: string){
    this.activeService = service;
  }

  onCheckFormOutput(obj: {formName: string, valid: boolean}){
    console.log('formname : ' + obj.formName);
    console.log('isValid : ' + obj.valid);
    switch(obj.formName){
      case 'projectDetailsForm':
        this.isProjectDetailsFormValid = obj.valid;
        break;
      case 'personalInfoForm':
        this.isPersonalInfoFormValid = obj.valid;

    }
  }

}
