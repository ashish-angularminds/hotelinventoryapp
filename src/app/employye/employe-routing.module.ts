import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployyeComponent } from './employye.component';

const routes: Routes = [
  {
    path: '',
    component: EmployyeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
