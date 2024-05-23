import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostAccountingComponent } from './cost-accounting/cost-accounting.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "cost-accounting", component: CostAccountingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
