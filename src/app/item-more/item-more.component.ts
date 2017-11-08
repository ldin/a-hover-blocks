import {Component, EventEmitter, Output} from '@angular/core';
import {ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-item-more',
  templateUrl: './item-more.component.html',
  styleUrls: ['./item-more.component.css']
})
export class ItemMoreComponent extends ItemComponent  {

  private preventSimpleClick = false;
  private timer;

  @Output() isRed: EventEmitter<any> = new EventEmitter();
  public color = false;

  public delete2(item) {
    const result = confirm('delete item?');
    if(!result) return;
    this.delete(item);
  }

    simpleClickFunction(): void {
        this.timer = 0;
        this.preventSimpleClick = false;

        this.timer = setTimeout(() => {
            if(!this.preventSimpleClick) {
                console.log("simple click");
                this.toggle();
            }
        }, 400);

    }

    doubleClickFunction(): void {
        this.preventSimpleClick = true;
        clearTimeout(this.timer);
        this.color = !this.color;
          if (this.color) {
            this.isRed.emit(1);
          } else {
            this.isRed.emit(-1);
          }
        console.log("double click");
    }

  public toggleMore(e) {
    e.preventDefault();
    console.log('toggleMore');

  }

}
