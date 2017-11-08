import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Item} from "../item";
import {ItemsService} from "../items.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {

  constructor( private servise: ItemsService) { }

  @Input() item: Item;
  @Output() checked: EventEmitter<any> = new EventEmitter();
  public isToggle = false;

  ngOnInit() {
  }

  public delete(item) {
    this.servise.deleteItem(item);

  }

  public toggle() {
    this.isToggle = !this.isToggle;
    if (this.isToggle) {
      this.checked.emit(1);
    } else {
      this.checked.emit(-1);
    }
  }

}

