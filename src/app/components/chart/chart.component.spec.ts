import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import { ExpenseService } from '../../services/expense.service';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartComponent],
      providers: [
        {
          provide: ExpenseService,
          useValue: {
            expenses: () => [],
          },
        },
      ],
    });

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use default chart data', () => {
    const chartData = component.chartData.datasets[0].data;
    expect(chartData).toEqual([0, 0, 0, 0]);
  });
});
