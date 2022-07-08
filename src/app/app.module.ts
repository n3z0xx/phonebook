import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TuiAvatarModule, TuiTagModule} from "@taiga-ui/kit"
import {TuiActionModule} from '@taiga-ui/kit';
import {TuiTooltipModule, TuiHintModule} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiGroupModule} from '@taiga-ui/core';
import {TuiBadgeModule} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import {TuiFilterModule} from '@taiga-ui/kit';
import {TuiTableModule} from '@taiga-ui/addon-table';
import {TuiPaginationModule} from '@taiga-ui/kit';
import {TuiIslandModule} from '@taiga-ui/kit';
import {ClipboardModule} from "ngx-clipboard";

@NgModule({
  imports: [
    TuiRootModule,
    TuiAlertModule,
    //...
  ],
})
export class MyModule {}


import { AppComponent } from './app.component';
import { SideinfoComponent } from './sideinfo/sideinfo.component';
import { PhonebookComponent } from './phonebook/phonebook.component';

@NgModule({
  declarations: [
    AppComponent,
    SideinfoComponent,
    PhonebookComponent
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiAvatarModule,
    TuiActionModule,
    TuiTooltipModule,
    TuiHintModule,
    TuiButtonModule,
    TuiGroupModule,
    TuiBadgeModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiFilterModule,
    TuiTableModule,
    TuiTagModule,
    TuiPaginationModule,
    TuiIslandModule,
    ClipboardModule,
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
