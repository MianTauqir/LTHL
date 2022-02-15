import { ErectionComponent } from './Components/Erection/erection.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LTHLLEADERComponent } from './Components/lthl-leader/lthl-leader.component';
import { ScaffoldRequestComponent } from './Components/scaffold-request/scaffold-request.component';

const appRoutes: Routes = [
  { path: 'LTHLLeader', component: LTHLLEADERComponent },
  { path: '', component: LTHLLEADERComponent },
  { path: 'Erection', component: ErectionComponent },
  { path: 'Scaffoldrequest', component: ScaffoldRequestComponent }
  // { path: '' , redirectTo:'/list', pathMatch:'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
