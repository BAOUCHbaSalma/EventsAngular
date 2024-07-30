import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AddreservationComponent } from './addreservation/addreservation.component';

const routes: Routes = [
  {path:"registre",component:RegistreComponent},
  {path:"login",component:LoginComponent},
  {path:"reservations/:id",component:ReservationComponent},
  {path:"reservation/:ide",component:AddreservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
