import { Injectable } from '@angular/core';
import {Item} from './item';
import 'rxjs/add/operator/filter';

@Injectable()
export class ItemsService {

  constructor() { }

  items = [
    {
      content: 'title',
      isExist: true,
    },
    {
      content: 'content ',
      isExist: true,
    },
    {
      content: 'title content 3',
      isExist: false,
    }
  ];

  getItems() {
    return this.items;
  }

  deleteItem(item) {
    const index = this.items.indexOf(item);
    if(index > -1) {
      this.items.splice(index, 1);
    }
  }

  addItem(item) {
    if(!item) return;
    const res: Item = {
      content: item,
      isExist: Math.random() >= 0.5,
    };
    this.items.push(res);
    this.getItemMore();

  }

  getItemMore() {
    const w = this.items.filter(item =>  item.isExist === false );
    return w.length;
  }

}
