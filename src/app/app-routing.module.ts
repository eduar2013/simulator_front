import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './questions/pages/create/create.component';
import { HomeComponent } from './simulator/pages/home/home.component';
import { SimulatorComponent } from './simulator/pages/simulator/simulator.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'simulatorExam',
    component:SimulatorComponent,
    pathMatch: 'full'
  },
  {
    path:'createQuestion',
    component:CreateComponent,
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
