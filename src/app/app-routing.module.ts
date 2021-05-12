import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { AddOfferComponent } from './components/addOffer/addOffer.component';

const routes: Routes = [
{path: "",component: HomeComponent,pathMatch: "full"},
{path: "detail", component:DetailComponent},
{path: "search", component:SearchComponent},
{path: "company-profile", component:CompanyProfileComponent},
{path: "addOffer", component:AddOfferComponent},
{path: "detail/:id", component:DetailComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
