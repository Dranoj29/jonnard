import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-color-and-theme',
  templateUrl: './color-and-theme.component.html',
  styleUrls: ['./color-and-theme.component.css']
})
export class ColorAndThemeComponent implements OnInit {

  colorThemeFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.colorThemeFormGroup = this.formBuilder.group({
      ['sample']: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

}
