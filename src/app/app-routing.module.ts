import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
// import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:'forms',component:FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
