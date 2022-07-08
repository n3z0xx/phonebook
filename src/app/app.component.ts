import { Component } from '@angular/core';
import {Contact} from "./models/contact";
import {contacts} from "../data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phonebook';

  contact: Contact = contacts[0];
  setContact(contact: Contact) {
    this.contact = contact;
  }
}
