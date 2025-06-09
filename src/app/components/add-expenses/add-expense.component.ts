import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { CategoryApiService } from '../../services/category-api.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-add-expense',
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: '/add-expense.component.html'
})
export class AddExpenseComponent {
  description = '';
  amount = 0;
  category = '';

  constructor(
    private expenseService: ExpenseService,
    private categoryApi: CategoryApiService,
    private router: Router
  ) {}

  addExpense() {
    const auto = !this.category;
    const category = this.category || this.categoryApi.categorize(this.description);
    this.expenseService.addExpense({
      id: crypto.randomUUID(),
      description: this.description,
      amount: this.amount,
      category: category,
      isAutoCategorized: auto,
      createdAt: new Date(),
    });
    this.description = '';
    this.amount = 0;
    this.category = '';
    this.router.navigate(['/dashboard'])
  }
}
