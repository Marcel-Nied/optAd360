import { Component, Input, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  canvas: any;
  ctx: any;

  @ViewChild('mychart') mychart: any;
  @Input() users: any;
  @Input() usersGroupedByAge: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
          datasets: [
          {
            label: 'Number of men in the given age groups from 1000 random results',
            data: [
              this.usersGroupedByAge['20-29'],
              this.usersGroupedByAge['30-39'],
              this.usersGroupedByAge['40-49'],
              this.usersGroupedByAge['50-59'],
              this.usersGroupedByAge['60-69'],
              this.usersGroupedByAge['70-79'],
              this.usersGroupedByAge['80-89'],
              this.usersGroupedByAge['90-99'],
            ],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            fill: true,
        }],
          labels: ['20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90-99']
      },
  });
  }
}
