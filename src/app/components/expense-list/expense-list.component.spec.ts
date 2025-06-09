import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpenseListComponent } from './expense-list.component';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

describe('ExpenseListComponent', () => {
  let component: ExpenseListComponent;
  let fixture: ComponentFixture<ExpenseListComponent>;
  let mockService: ExpenseService;

  const mockExpenses: Expense[] = [
    { id: '1', description: 'Lunch', amount: 100, category: 'Food', createdAt: new Date('2024-01-01'), isAutoCategorized: false },
    { id: '2', description: 'Taxi', amount: 200, category: 'Travel', createdAt: new Date('2024-02-01'), isAutoCategorized: true },
    { id: '3', description: 'Movie', amount: 150, category: 'Entertainment', createdAt: new Date('2024-03-01'), isAutoCategorized: false },
  ];

  beforeEach(() => {
    mockService = {
      expenses: jasmine.createSpy().and.returnValue(mockExpenses)
    } as any;

    TestBed.configureTestingModule({
      imports: [ExpenseListComponent],
      providers: [{ provide: ExpenseService, useValue: mockService }]
    });

    fixture = TestBed.createComponent(ExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should default sort by createdAt descending', () => {
    expect(component.sortBy).toBe('createdAt');
    expect(component.ascending).toBeFalse();
  });

  it('should sort ascending when setting sort to a new key', () => {
    component.setSort('amount');
    expect(component.sortBy).toBe('amount');
    expect(component.ascending).toBeTrue();
  });

  it('should toggle ascending/descending when sorting by same key', () => {
    component.setSort('amount'); // ascending true
    component.setSort('amount'); // toggle to false
    expect(component.ascending).toBeFalse();
  });

  it('should return expenses sorted ascending by amount', () => {
    component.setSort('amount'); // ascending true
    const sorted = component.sortedExpenses();
    expect(sorted[0].amount).toBe(100);
    expect(sorted[sorted.length - 1].amount).toBe(200);
  });

  it('should return expenses sorted descending by amount', () => {
    component.setSort('amount'); // ascending true
    component.setSort('amount'); // toggle to false
    const sorted = component.sortedExpenses();
    expect(sorted[0].amount).toBe(200);
    expect(sorted[sorted.length - 1].amount).toBe(100);
  });
});
