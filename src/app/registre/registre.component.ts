import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Erole, User } from '../model/events';
import { RegistreService } from '../service/registre.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent implements OnInit{
  registreForm!:FormGroup
  constructor(private srv:RegistreService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.registreForm=this.fb.group(
      {
        username:'',
        password:'',
        age:'',
        email:''

      }
    )
    
  }
  hundelSubmit(){
    const registre:User={
      userId:0,
      username:this.registreForm.value.username,
      password:this.registreForm.value.password,
      age:this.registreForm.value.age,
      email:this.registreForm.value.email,
      role:Erole.USER
      
    }
    this.srv.registre(registre).subscribe(()=>{
      this.ngOnInit();
    })

  }

}
