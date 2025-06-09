import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddExpenseComponent } from './add-expense.component';
import { ExpenseService } from '../../services/expense.service';
import { CategoryApiService } from '../../services/category-api.service';
import { FormsModule } from '@angular/forms';

describe('AddExpenseComponent', () => {
  let component: AddExpenseComponent;
  let fixture: ComponentFixture<AddExpenseComponent>;
  let mockExpenseService: ExpenseService;
  let mockCategoryService: CategoryApiService;

  beforeEach(() => {
    mockExpenseService = jasmine.createSpyObj('ExpenseService', ['addExpense']);
    mockCategoryService = new CategoryApiService();

    TestBed.configureTestingModule({
      imports: [AddExpenseComponent, FormsModule],
      providers: [
        { provide: ExpenseService, useValue: mockExpenseService },
        { provide: CategoryApiService, useValue: mockCategoryService }
      ]
    });

    fixture = TestBed.createComponent(AddExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and call addExpense', () => {
    component.description = 'movie night';
    component.amount = 200;
    component.category = '';

    component.addExpense();

    expect(mockExpenseService.addExpense).toHaveBeenCalled();
    expect(component.description).toBe('');
    expect(component.amount).toBe(0);
  });
});
