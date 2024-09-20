import { Component, OnInit } from '@angular/core';
import { AnimationService } from 'src/app/services/AnimationService';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  num1 = 15000;
  num2 = 15;
  num3 = 8200;
  num4 = 47;

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    this.animateBalance1(15000, 500);
    this.animateBalance2(15, 500);
    this.animateBalance3(8200, 500);
    this.animateBalance4(47, 500);
  }

  animateBalance1(finalValue: number, duration: number) {
    this.animationService
      .animateValue(finalValue, duration)
      .subscribe((value) => {
        this.num1 = value;
      });
  }
  animateBalance2(finalValue: number, duration: number) {
    this.animationService
      .animateValue(finalValue, duration)
      .subscribe((value) => {
        this.num2 = value;
      });
  }
  animateBalance3(finalValue: number, duration: number) {
    this.animationService
      .animateValue(finalValue, duration)
      .subscribe((value) => {
        this.num3 = value;
      });
  }
  animateBalance4(finalValue: number, duration: number) {
    this.animationService
      .animateValue(finalValue, duration)
      .subscribe((value) => {
        this.num4 = value;
      });
  }
}
