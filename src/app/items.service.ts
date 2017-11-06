import { Injectable } from '@angular/core';
import {Item} from './item';

@Injectable()
export class ItemsService {

  constructor() { }

  items: Item[] = [
    {
      content: 'title',
      isActive: true,
      isExist: true,
      color:''
    },
    {
      content: 'content ',
      isActive: true,
      isExist: true,
      color:''
    },
    {
      content: 'title content ',
      isActive: true,
      isExist: true,
      color:''
    }
  ];

  getItems(){
    return this.items;
  }

}
