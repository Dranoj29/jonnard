import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  personalInfoFormGroup: FormGroup;

  dateNow = new Date();

  @Output() personalInfoFormOutput = new EventEmitter<{formName: string, valid: boolean}>();

  constructor(private formBuilder: FormBuilder) { 

    this.personalInfoFormGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
    });

  }

  ngOnInit(): void {
  }

  emitForm(){
    this.personalInfoFormOutput.emit({formName:'personalInfoForm', valid:this.personalInfoFormGroup.valid});
  }

}
