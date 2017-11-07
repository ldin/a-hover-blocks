import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import {ItemsService} from './items.service';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { DblClickDirective } from './dbl-click.directive';
import { ItemMoreComponent } from './item-more/item-more.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    FormComponent,
    DblClickDirective,
    ItemMoreComponent,
    // FormsModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
