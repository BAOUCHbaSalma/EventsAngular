import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Erole, LoginRequest, User } from '../model/events';
import { DecodejwtService } from '../service/decodejwt.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private srv:LoginService,private fb:FormBuilder,private srvd:DecodejwtService,private route:Router,private srvu:UserService){}
  loginForm!:FormGroup
  user!:User

  ngOnInit(): void {
   this.loginForm=this.fb.group({
    username:'',
    password:''
   })
  }
  loginMethod() {
    const login: LoginRequest = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,

    }
    this.srv.login(login).subscribe((res: any) => {

      if (res && res.token) {
        console.log("login successs")
        localStorage.setItem("jwt", res.token)
      }
      this.srvd.getIdByUsername(res.token).subscribe(
        id => {

            this.srvu.getUserProfile(id).subscribe(res => {
              this.user = res
              if (this.user.role == Erole.ADMIN) {

                this.route.navigateByUrl("show-event")
              } else {
                this.route.navigateByUrl(`reservations/${id}`)

              }


            })

        }
      )
    })
  }}

