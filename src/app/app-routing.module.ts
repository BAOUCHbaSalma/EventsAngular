import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EvenementComponent } from './evenement/evenement.component';
import { SendMessageComponent } from './send-message/send-message.component';
import {UserComponent} from "./user/user.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {EventFormComponent} from "./event-form/event-form.component";
import {EventUpdateComponent} from "./event-update/event-update.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {ShowEventsComponent} from "./show-events/show-events.component";
import {AllReservationsComponent} from "./all-reservations/all-reservations.component";

const routes: Routes = [

 
  {path:"registre",component:RegistreComponent},
  {path:"",component:LoginComponent},
  {path:"reservations/:id",component:ReservationComponent},
  {path:"event",component:EvenementComponent},
  {path:"Apropos",component:SendMessageComponent},
  {path: 'users', component: UserComponent},
  { path: 'profile/:id', component: UserProfileComponent },
  { path: 'event-form', component: EventFormComponent },
  { path: 'event-form/:id', component: EventFormComponent },
  { path: 'event-update/:id', component: EventUpdateComponent },
  { path: 'contacts', component: ContactListComponent },
  {path:"show-event",component:ShowEventsComponent},
  { path: 'all-reservations', component: AllReservationsComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
