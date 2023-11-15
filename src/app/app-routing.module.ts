import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './instructor/instructor.component';
import { InstructorlistComponent } from './instructorlist/instructorlist.component';

const routes: Routes = [
  {path:'instructor', component:InstructorComponent},
  {path:'all' , component:InstructorlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
