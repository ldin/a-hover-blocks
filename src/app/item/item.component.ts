import { Component, OnInit, Input } from '@angular/core';
import {Item} from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {

  constructor() { }

  @Input() item: Item;
  isToggle = false;

  ngOnInit() {
  }

  public delete(e){
    console.log(e)
  }

  public toggle(){
    this.isToggle = !this.isToggle;
  }

}
