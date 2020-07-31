import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: any;
  showDesc = false;
  constructor() {}

  ngOnInit(): void {}

  toggleDescription(status) {
    this.showDesc = status;
  }
}
