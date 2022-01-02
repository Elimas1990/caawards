import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NominadosComponent } from './nominados/nominados.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'nominados',component:NominadosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
