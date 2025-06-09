import { ExpenseService } from './expense.service';
import { Expense } from '../models/expense.model';

describe('ExpenseService', () => {
  let service: ExpenseService;

  beforeEach(() => {
    localStorage.clear();
    service = new ExpenseService();
  });

  it('should load empty expenses initially if none in localStorage', () => {
    expect(service.expenses()).toEqual([]);
  });

  it('should add a new expense and persist it', () => {
    const expense: Expense = {
      id: '1',
      amount: 100,
      category: 'Food',
      createdAt: new Date(),
    };

    service.addExpense(expense);
    const stored = JSON.parse(localStorage.getItem('expenses')!);

    expect(service.expenses().length).toBe(1);
    expect(stored.length).toBe(1);
    expect(stored[0].id).toBe('1');
  });

  it('should load stored expenses from localStorage', () => {
    const fakeExpenses = JSON.stringify([{ id: '1', amount: 50, createdAt: new Date() }]);
    localStorage.setItem('expenses', fakeExpenses);

    const newService = new ExpenseService();
    expect(newService.expenses().length).toBe(1);
  });
});
