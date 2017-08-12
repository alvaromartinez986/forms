import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent{

  form:FormGroup;
  user:Object = {
    fullname : {
      name : "Alvaro",
      lastname : "Martinez"
    },
    email : "msae986@gmail.com"
  }

  constructor() {
    this.form = new FormGroup({

      'fullname': new FormGroup({
        'name': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3)
                                    ]
                                ),
        'lastname': new FormControl('',  Validators.required)

      }),
      'email': new FormControl('', [
                                      Validators.required,
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                   ]
                              )
    });

    this.form.setValue(this.user);
  }


  save() {
    console.log(this.form.value);
    this.form.reset({
      fullname:{
        name:"",
        lastname:""
      },
      email:""
    });
  }

}
