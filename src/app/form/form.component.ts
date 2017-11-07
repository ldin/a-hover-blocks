import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor( private service: ItemsService) { }

  ngOnInit() {
  }

  addItem(item: string) {
    console.log(item);
    this.service.addItem(item);
  }

}
