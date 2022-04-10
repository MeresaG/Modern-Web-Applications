import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


class Credentials {
  username!:string;
  password!:string;

  constructor(name : string, pass:string) {
    this.username = name;
    this.password = pass;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm!:NgForm;

  credentials:Credentials;

  constructor() { 
    this.credentials = new Credentials("Jack", "123");
  }

  ngOnInit(): void {
    
    console.log("form", this.loginForm);
    setTimeout(() => {
      this.loginForm.setValue(this.credentials);
    }, 0);
    
  }

  login(loginForm:NgForm) : void{
    console.log("Login called");
    // console.log(loginForm.value);
    // console.log("Username is ", this.credentials.username);
    // console.log("Password is ", this.credentials.password);
    
    
    
    
  }

}
