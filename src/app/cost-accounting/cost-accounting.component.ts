import * as Highcharts from 'highcharts';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-cost-accounting',
  templateUrl: './cost-accounting.component.html',
  styleUrls: ['./cost-accounting.component.css']
})
export class CostAccountingComponent implements OnInit {
  assetValue: number = 50000;
  usefulLife: number = 10;
  salvageValue: number = 1000;
  annualDepreciation: number = 0;
  depreciation: number | null = null;
  chart: Chart | undefined;

  constructor() {}

  ngOnInit(): void {}

  calculateDepreciation(): void {
    if (this.usefulLife > 0) {
      this.annualDepreciation = (this.assetValue - this.salvageValue) / this.usefulLife;
      this.depreciation = this.annualDepreciation;
    } else {
      this.annualDepreciation = 0;
      this.depreciation = null;
    }

    // Update the chart
    this.updateChart();
  }

  updateChart(): void {
    const years = Array.from({ length: this.usefulLife }, (_, i) => `Year ${i + 1}`);
    const depreciationValues = Array.from({ length: this.usefulLife }, () => this.annualDepreciation);

    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Depreciation Over Time'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: years
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      series: [
        {
          name: 'Depreciation',
          type: 'line',
          data: depreciationValues
        }
      ]
    });
  }
}
