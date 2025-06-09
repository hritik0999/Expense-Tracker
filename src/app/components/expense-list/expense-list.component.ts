import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
  standalone: true,
  selector: 'app-expense-list',
  imports: [CommonModule],
  templateUrl: '/expense-list.component.html',
})
export class ExpenseListComponent {
  constructor(public expenseService: ExpenseService) {}

  sortBy: keyof Expense = 'createdAt';
  ascending = false;

  setSort(key: keyof Expense) {
    if (this.sortBy === key) this.ascending = !this.ascending;
    else {
      this.sortBy = key;
      this.ascending = true;
    }
  }

  sortedExpenses() {
    return [...this.expenseService.expenses()].sort((a, b) => {
      const valA: any = a[this.sortBy];
      const valB: any = b[this.sortBy];
      return this.ascending
        ? valA > valB ? 1 : -1
        : valA < valB ? 1 : -1;
    });
  }
}
