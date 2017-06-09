import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.starWidth = this.rating * (86/5);
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
  }

}
