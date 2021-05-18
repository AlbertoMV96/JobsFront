import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { AddOfferComponent } from './components/addOffer/addOffer.component';
import { AuthGuardService } from '../../../jobsFront/src/app/services/auth/auth-guard.service';

const routes: Routes = [
{path: "",component: HomeComponent,pathMatch: "full"},
{path: "detail", component:DetailComponent},
{path: "search", component:SearchComponent},
{path: "login", component:LoginComponent},
{path: "register", component:RegisterComponent},
// {
//   path: 'job/add',
//   component: SearchComponent,
//   canActivate: [AuthGuardService],
//   },
{path: "company-profile", component:CompanyProfileComponent},
{path: "addOffer", component:AddOfferComponent, canActivate: [AuthGuardService]},
{path: "detail/:id", component:DetailComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
