import { cpuUsage } from 'process';
import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'pm-stars',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  onClick(): void {
    this.ratingClicked.emit(`The raging ${this.rating} was clicked!`);
    console.log(`The raging ${this.rating} was clicked!`);
  }
}