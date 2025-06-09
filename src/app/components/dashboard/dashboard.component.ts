import { Component } from '@angular/core';
import { ExpenseListComponent } from '../expense-list/expense-list.component';
import { TotalSummaryComponent } from '../total-summary/total-summary.component';
import { ChartComponent } from '../chart/chart.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    ExpenseListComponent,
    TotalSummaryComponent,
    ChartComponent,
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
