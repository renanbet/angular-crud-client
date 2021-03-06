import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-counter',
  templateUrl: './card-counter.component.html',
  styleUrls: ['./card-counter.component.scss']
})
export class CardCounterComponent {
  @Input() title : string;
  @Input() total : number;
  @Input() icon : string;
  @Input() isInfo : boolean = false;
  @Input() isSuccess : boolean = false;
  @Input() isDanger : boolean = false;

  formatValue() {
    let format = this.total ? `${this.total}` : ''
    return format.length < 2 ? `0${this.total}` : this.total
  }
}
