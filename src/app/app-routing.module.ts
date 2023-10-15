import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'select-your-birthdate', component: DatePickerComponent },
  { path: '', redirectTo: 'select-your-birthdate', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
