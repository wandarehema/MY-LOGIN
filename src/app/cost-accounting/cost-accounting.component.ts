import { Component } from '@angular/core';

@Component({
  selector: 'app-cost-accounting',
  templateUrl: './cost-accounting.component.html',
  styleUrls: ['./cost-accounting.component.css']
})
export class CostAccountingComponent {
  assetValue: number = 0;
  usefulLife: number = 0;
  salvageValue: number = 0;
  annualDepreciation: number = 0;
depreciation: any;

  calculateDepreciation(): void {
    if (this.usefulLife > 0) {
      this.annualDepreciation = (this.assetValue - this.salvageValue) / this.usefulLife;
    } else {
      this.annualDepreciation = 0;
    }
  }
}
