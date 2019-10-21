import { DashboardComponent } from './app-module/dashboard/dashboard.component';
import { CoreComponent } from './core.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'core' , component: CoreComponent, children: [
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
