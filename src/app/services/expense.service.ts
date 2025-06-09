import { Injectable, signal } from '@angular/core';
import { Expense } from '../models/expense.model';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  expenses = signal<Expense[]>(this.loadExpenses());

  addExpense(expense: Expense) {
    this.expenses.update((prev) => {
      const updated = [...prev, expense];
      localStorage.setItem('expenses', JSON.stringify(updated));
      return updated;
    });
  }

  private loadExpenses(): Expense[] {
    const stored = localStorage.getItem('expenses');
    return stored ? JSON.parse(stored) : [];
  }
}
