import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegistreComponent } from './registre/registre.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { IntercepteurService } from './service/intercepteur.service';
import { AddreservationComponent } from './addreservation/addreservation.component';
import { EvenementComponent } from './evenement/evenement.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EventFormComponent } from './event-form/event-form.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { EventUpdateComponent } from './event-update/event-update.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ShowEventsComponent } from './show-events/show-events.component';
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AllReservationsComponent } from './all-reservations/all-reservations.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatListItem, MatListModule, MatNavList} from "@angular/material/list";
import {MatIcon, MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    RegistreComponent,
    LoginComponent,
    ReservationComponent,
    AddreservationComponent,
    EvenementComponent,
    SendMessageComponent,
    UserComponent,
    UserProfileComponent,
    EventFormComponent,
    EventUpdateComponent,
    ContactListComponent,
    ShowEventsComponent,
    AllReservationsComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatTable,
    MatFormField,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSidenav,
    MatSidenavContainer,
    MatToolbar,
    MatNavList,
    MatListItem,
    MatIcon,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: IntercepteurService, multi: true },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
