import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleInputComponent } from './circle-input/circle-input.component';

const routes: Routes = [
  { path: 'circle-input', component: CircleInputComponent },
  

  
  { path: '', redirectTo: '/circle-input', pathMatch: 'full' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
