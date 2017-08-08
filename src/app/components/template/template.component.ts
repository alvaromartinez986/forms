import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border : 1px  solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  user:Object = {
    name : null,
    lastname : null,
    email : null,
    country: "CRI",
    sex: "Male",
    accept: true
  }

  countries = [{
    code: "CRI",
    name: "Costa Rica"
  },
  {
    code: "ESP",
    name: "España"
  }
  ]



  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log(form);
  }

}
