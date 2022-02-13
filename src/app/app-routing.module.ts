import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LTHLLEADERComponent } from './Components/lthl-leader/lthl-leader.component';


const appRoutes: Routes = [
  { path: 'LTHLLeader', component: LTHLLEADERComponent },
  { path: '', component: LTHLLEADERComponent },
  // { path: '' , redirectTo:'/list', pathMatch:'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
