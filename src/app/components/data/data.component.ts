import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;
  user: Object = {
    fullname: {
      name: "Alvaro",
      lastname: "Martinez"
    },
    email: "msae986@gmail.com",
    hobbies: ["Correr", "Comer"]
  }

  constructor() {
    this.form = new FormGroup({

      'fullname': new FormGroup({
        'name': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]
        ),
        'lastname': new FormControl('', [
                                          Validators.required,
                                          this.noHerrera
                                        ])

      }),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]
      ),
      'hobbies': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existUser),
      'passwordOne': new FormControl('', Validators.required),
      'passwordTwo': new FormControl()
    });

    //this.form.setValue(this.user);

    this.form.controls['passwordTwo'].setValidators([
      Validators.required,
      this.noEqual.bind(this)
    ]);


    this.form.valueChanges
        .subscribe( data=>{

        });
  }

  addHobbie() {
    (<FormArray>this.form.controls['hobbies']).push(
      new FormControl('Dormir', Validators.required)
    );
  }

noHerrera(control:FormControl): { [s:string]:boolean }{


    if( control.value==="herrera" ){
      return{
        noherrera:true
      }
    }

  return null;
}

existUser(control:FormControl):Promise<any>|Observable<any>{

  let promise = new Promise(
    (resolve, reject)=>{
      setTimeout(()=>{
        if(control.value==="strider"){
          resolve({existe:true})
        }else{
          resolve(null)
        }
      }, 3000)
    }
  )

  return promise;

}


noEqual(control:FormControl): { [s:string]:boolean }{


    if( control.value!==this.form.controls['passwordOne'].value ){
      return{
        noequal:true
      }
    }

  return null;
}


save() {
  console.log(this.form.value);
  // this.form.reset({
  //   fullname: {
  //     name: "",
  //     lastname: ""
  //   },
  //   email: "",
  //   hobbies: [""]
  // });
}

}
