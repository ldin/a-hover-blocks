import { Component } from '@angular/core';
import {ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-item-more',
  templateUrl: './item-more.component.html',
  styleUrls: ['./item-more.component.css']
})
export class ItemMoreComponent extends ItemComponent  {

  // constructor() {
  //   // super();
  //   // this.delete = delete2;
  // }

  public delete2(item) {
    const result = confirm('delete item?');
    if(!result) return;

    this.delete(item);

  }

}
