import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Contact} from "../models/contact";
import {contacts} from "../../data";

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhonebookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchForm = new FormGroup({
    search: new FormControl(),
    groupFilter: new FormControl()
  });

  @Output()
  contactSelectEvent = new EventEmitter<Contact>();

  selectContact(contact: Contact) {
    this.contactSelectEvent.emit(contact);
  }


  readonly groups = [
    "family",
    "friend",
    "work",
    "classmate"
  ];

  searchValue: string = this.searchForm.get("search")?.value;
  groupFilter = this.searchForm.get("groupFilter")?.value;

  readonly columns = ["photo", "name", "number", "groups"];
  allContacts: Contact[] = contacts;
  length = contacts.length / 10;
  index = 0;
  indexTop = 0;
  indexBottom = 10;
  contacts = this.allContacts.slice(this.indexTop, this.indexBottom);

  goToPage(index: number): void {
    this.length = Math.ceil(this.allContacts.length / 10);
    this.index = index;
    this.indexTop = 10 * index;
    this.indexBottom = 10 * (index + 1);
    this.contacts = this.allContacts.slice(this.indexTop, this.indexBottom);
  }

  updateSearch() {
    this.searchValue = this.searchForm.get("search")?.value;
    this.groupFilter = this.searchForm.get("groupFilter")?.value;

    let groupFilterResult: Array<Contact>;
    let searchResult: Array<Contact>;

    if (this.groupFilter != null) {
      groupFilterResult = contacts.filter((v) => this.groupFilter.every((val: string) => v.groups.includes(val)));
    } else {
      groupFilterResult = contacts;
    }

    if (this.searchValue != null) {
      searchResult = contacts.filter((v) => v.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1);
    } else {
      searchResult = contacts;
    }

    // intersect of two results
    this.allContacts = groupFilterResult.filter(value => searchResult.includes(value));

    // this.allContacts = contacts.filter((v) => ((this.groupFilter != null) || (this.groupFilter.every((val: string) => v.groups.includes(val)))) & ((this.searchValue != null) || (v.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1)))

    this.goToPage(0);
  }
}
