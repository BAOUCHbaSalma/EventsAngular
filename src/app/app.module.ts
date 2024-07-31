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
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: IntercepteurService, multi: true },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
