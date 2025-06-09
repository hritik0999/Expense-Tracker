import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-total-summary',
  template: `<p><strong>Total Spent:</strong> {{ total() | currency }}</p>`,
  imports: [CommonModule]
})
export class TotalSummaryComponent {
  constructor(private expenseService: ExpenseService) {}

  total() {
    return this.expenseService.expenses().reduce((sum, e) => sum + e.amount, 0);
  }
}
