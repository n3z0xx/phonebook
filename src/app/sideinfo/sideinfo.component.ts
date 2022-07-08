import {Component, Inject, Input, OnInit} from '@angular/core';
import {Contact} from "../models/contact";
import {ClipboardService} from "ngx-clipboard"
import {TuiAlertService} from "@taiga-ui/core";

@Component({
  selector: 'app-sideinfo',
  templateUrl: './sideinfo.component.html',
  styleUrls: ['./sideinfo.component.css']
})
export class SideinfoComponent implements OnInit {

  @Input()
  contact?: Contact;

  constructor(@Inject(TuiAlertService)
              private readonly alertService: TuiAlertService,
              private clipboardApi: ClipboardService
  ) { }

  ngOnInit(): void {
  }

  copyToClipboard() {
    if (this.contact?.number) {
      this.clipboardApi.copy(this.contact.number);
      this.showNotification();
    }
  }

  showNotification(): void {
    this.alertService.open('Copied to clipboard!',).subscribe();
  }
}
