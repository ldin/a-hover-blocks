import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDblClick]',
  host: {
    '(dblclick)': 'dblclick($event.target)'
  }
})
export class DblClickDirective {

  constructor() { }

  @HostBinding('style.background-color') colorHex: string;

  isColorClick = false;

  dblclick(btn) {
    this.colorHex = this.isColorClick ? '#afffaf' : '#ffaaaa';
    this.isColorClick = !this.isColorClick;
  }

}
