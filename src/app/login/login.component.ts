import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginRequest } from '../model/events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private srv:LoginService,private fb:FormBuilder){}
  loginForm!:FormGroup

  ngOnInit(): void {
   this.loginForm=this.fb.group({
    username:'',
    password:''
   })
  }
  loginMethod(){
    const login:LoginRequest={
      username:this.loginForm.value.username,
      password:this.loginForm.value.password,
    }
    this.srv.login(login).subscribe((res:any)=>{
      if(res && res.token){
        console.log("login successs")
        localStorage.setItem("jwt",res.token)
      }
    })
  }

}
