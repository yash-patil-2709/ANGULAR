import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditformComponent } from './editform/editform.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'edit',component:EditformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
