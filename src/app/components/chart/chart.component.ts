import { Component, computed, effect, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import { ExpenseService } from '../../services/expense.service';

Chart.register(...registerables);

@Component({
  standalone: true,
  selector: 'app-chart',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: '/chart.component.html',
  styleUrls : ['/chart.component.css']
})
export class ChartComponent {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  categories: any = ['Food', 'Travel', 'Entertainment', 'Grocery', 'Uncategorized'];

  chartData = {
    labels: this.categories,
    datasets: [
      {
        data: [0, 0, 0, 0, 0],
        label: 'Expenses',
        backgroundColor: '#42A5F5',
      },
    ],
  };

  chartOptions = {
    responsive: true,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  constructor(private expenseService: ExpenseService) {
    effect(() => {
      const expenses = this.expenseService.expenses();
      const totals = this.categories.reduce((acc: any, cat: any) => ({ ...acc, [cat]: 0 }), {} as Record<string, number>);

      for (const exp of expenses) {
        const cat: any = this.categories.includes(exp.category) ? exp.category : 'Uncategorized';
        totals[cat] += exp.amount;
      }

      this.chartData.datasets[0].data =[];
      this.chartData.datasets[0].data =[...this.categories.map((cat: any) => totals[cat])]
      this.chart?.update();
    });
  }
}
