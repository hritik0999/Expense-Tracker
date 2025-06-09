import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AddExpenseComponent } from "./components/add-expenses/add-expense.component";

export const routes: Routes = [
    { path: '', redirectTo: 'add', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add', component: AddExpenseComponent }
  ];