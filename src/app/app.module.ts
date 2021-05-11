import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListoffersComponent } from './components/listoffers/listoffers.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { SearchComponent } from './components/search/search.component';
import { PublicationCardComponent } from './components/publication-card/publication-card.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    FooterComponent,
    ListoffersComponent,
    MenuComponent,
    HomeComponent,
    CompanyProfileComponent,
    SearchComponent,
    PublicationCardComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
