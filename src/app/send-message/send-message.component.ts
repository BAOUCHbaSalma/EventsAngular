import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact, Erole } from '../model/events';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.css'
})
export class SendMessageComponent implements OnInit{
  messageForm!:FormGroup

  constructor(private srv:ContactService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.messageForm=this.fb.group({
      sujet:'',
      message:'',
      idUser:''
    })

  }

  handelSubmit(){
    const message:Contact={
      idContact: 0,
      sujet:this.messageForm.value.sujet,
      message:this.messageForm.value.message,
      user: {
        userId: this.messageForm.value.idUser,
        username: '',
        password: '',
        age: 0,
        email: '',
        role:Erole.USER
      }
    }
  }

}
