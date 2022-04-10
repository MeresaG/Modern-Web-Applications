import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!:FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group(
      {
        name : "Meresa",
        username: "Mera",
        password : "pass",
        repeatPassword:"repeat Password"
      }
    ) 
    // this.registrationForm = new FormGroup({
    //   name: new FormControl(),
    //   username: new FormControl(),
    //   password: new FormControl(),
    //   repeatPassword: new FormControl()
    // })
  }

  ngOnInit(): void {
  }

  register(registrationForm: FormGroup) {

    console.log("Form Submited");
    console.log(this.registrationForm.value);
    
    

  }

}
