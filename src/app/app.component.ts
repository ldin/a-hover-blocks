import {Component, Input, OnInit} from '@angular/core';
import {ItemsService} from "./items.service";
import {Item} from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private service: ItemsService) {}

  @Input() checked: number;
  @Input() isRed: number;

  public items: Item[];
  public checkedCount = 0;
  public checkedRed = 0;
  public checkedGreen = 0;
  public count;

  ngOnInit() {
    this.items = this.service.getItems();
    this.checkedGreen = this.service.getItemMore();
  }

  onChecked(e) {
    this.checkedCount += e;
  }

  onRed(e) {
    this.checkedRed += e;
    this.checkedGreen -= e;
  }



}
