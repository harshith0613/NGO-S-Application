import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { PaymentComponent } from './payment/payment.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
// import { Route, Routes } from '@angular/router';

//routing
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Events', component: EventsComponent},
  {path: 'Donate', component: PaymentComponent},
  {path: 'Contact', component: EventCreationComponent},
  {path: 'CreateEvent', component: EventCreationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    EventCreationComponent,
    PaymentComponent,
    EventsComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
