import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact, Erole } from '../model/events';
import { DecodejwtService } from '../service/decodejwt.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.css'
})
export class SendMessageComponent implements OnInit{
  messageForm!:FormGroup
  idUser:any

  constructor(private srv:ContactService,private fb:FormBuilder,private srvd:DecodejwtService){}
  ngOnInit(): void {
    const token=localStorage.getItem('jwt')
    this.srvd.getIdByUsername(token).subscribe(id=>{
      this.idUser=id
    })

    this.messageForm=this.fb.group({
      sujet:'',
      message:'',
      userId:''
    })

  }

  hundelSubmit(){
    const message:Contact={
      idContact: 0,
      sujet:this.messageForm.value.sujet,
      message:this.messageForm.value.message,
      user: {
        userId: this.idUser,
        username: '',
        password: '',
        age: 0,
        email: '',
        role:Erole.USER
      }
    }
    this.srv.sendMessage(message).subscribe(()=>{
      this.ngOnInit()
    })
  }

}
