import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ChartComponent } from './components/chart/chart.component';
import { TotalSummaryComponent } from './components/total-summary/total-summary.component';
import { AddExpenseComponent } from './components/add-expenses/add-expense.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppComponent,
        AddExpenseComponent,
        ExpenseListComponent,
        ChartComponent,
        TotalSummaryComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render all child components', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-add-expense')).toBeTruthy();
    expect(compiled.querySelector('app-expense-list')).toBeTruthy();
    expect(compiled.querySelector('app-chart')).toBeTruthy();
    expect(compiled.querySelector('app-total-summary')).toBeTruthy();
  });
});
