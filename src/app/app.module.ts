import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsdetailsComponent } from './cardsdetails/cardsdetails.component';
import { CardsComponent } from './cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { SubcardsComponent } from './subcards/subcards.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { ForyouComponent } from './foryou/foryou.component';
import { ExploreComponent } from './explore/explore.component';
import { EventsComponent } from './events/events.component';
import { AdultComponent } from './adult/adult.component';
import { AdultpageComponent } from './adultpage/adultpage.component';
@NgModule({
  declarations: [
    AppComponent,
    CardsdetailsComponent,
    CardsComponent,
    WelcomeComponent,
    NavbarComponent,
    BannerComponent,
    SubcardsComponent,
    FaqComponent,
    FooterComponent,
    SliderComponent,
    ForyouComponent,
    ExploreComponent,
    EventsComponent,
    AdultComponent,
    AdultpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
