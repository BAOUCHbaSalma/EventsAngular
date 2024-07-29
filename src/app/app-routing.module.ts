import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistreComponent } from './registre/registre.component';

const routes: Routes = [
  {path:"registre",component:RegistreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
