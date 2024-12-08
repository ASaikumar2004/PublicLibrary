import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsdetailsComponent } from './cardsdetails/cardsdetails.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForyouComponent } from './foryou/foryou.component';
import { ExploreComponent } from './explore/explore.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  // default routing
  { path:'',component:WelcomeComponent },
  // normal routing
  { path:'foryou',component:ForyouComponent},
  { path:'explore',component:ExploreComponent},
  { path:'events',component:EventsComponent},
  // wildcard routing
  { path:'card/:id',component:CardsdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
