import { Injectable } from '@angular/core';
import {Item} from './item';

@Injectable()
export class ItemsService {

  constructor() { }

  items = [
    {
      content: 'title',
      isActive: true,
      isExist: true,
      // color:''
    },
    {
      content: 'content ',
      isActive: true,
      isExist: true,
      // color:''
    },
    {
      content: 'title content 3',
      isActive: true,
      isExist: false,
      // color:''
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
      isActive: false
    };
    this.items.push(res);
    this.getCount();

  }

  getCount() {
    console.log(this.items)
    return this.items.length;
  }

  getItemMore() {
    return this.items.map(item => item.isExist === true).length;
  }

}
