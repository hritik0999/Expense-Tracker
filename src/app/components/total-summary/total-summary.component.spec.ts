import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalSummaryComponent } from './total-summary.component';
import { ExpenseService } from '../../services/expense.service';

describe('TotalSummaryComponent', () => {
  let component: TotalSummaryComponent;
  let fixture: ComponentFixture<TotalSummaryComponent>;
  let mockService: ExpenseService;

  beforeEach(() => {
    mockService = {
      expenses: jasmine.createSpy().and.returnValue([
        { amount: 100 },
        { amount: 200 }
      ])
    } as any;

    TestBed.configureTestingModule({
      imports: [TotalSummaryComponent],
      providers: [{ provide: ExpenseService, useValue: mockService }]
    });

    fixture = TestBed.createComponent(TotalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate total correctly', () => {
    expect(component.total()).toBe(300);
  });
});
