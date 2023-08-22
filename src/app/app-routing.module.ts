import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { GrowthComponent } from './growth/growth.component';
import { CustomersComponent } from './customers/customers.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'overview',component:OverviewComponent},
  {path:'growth',component:GrowthComponent},
  {path:'customers',component:CustomersComponent},
  {path:'reports',component:ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
