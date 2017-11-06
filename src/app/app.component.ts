import { Component, OnInit } from '@angular/core';
import {ItemsService} from "./items.service";
import {Item} from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private service:ItemsService){}

  title = 'app';
  items:Item[];

  ngOnInit(){
    this.items = this.service.getItems();
  }

}
