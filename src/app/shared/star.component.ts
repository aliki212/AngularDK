import { cpuUsage } from 'process';
import { Component, OnChanges, Input } from "@angular/core";

@Component({
  selector: 'pm-stars',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
}