import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import {Contact} from "../model/events";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getAllContacts().subscribe(data => {
      this.contacts = data;
    });
  }
}
