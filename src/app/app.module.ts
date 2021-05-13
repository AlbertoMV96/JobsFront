import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AddOfferComponent } from './components/addOffer/addOffer.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCACcgu3Yai684SZMc3KSJ1cu_ZNitE8A",
  authDomain: "sublimin-afde6.firebaseapp.com",
  projectId: "sublimin-afde6",
  storageBucket: "sublimin-afde6.appspot.com",
  messagingSenderId: "92011182228",
  appId: "1:92011182228:web:73aeab03415bcf80aadc81",
  measurementId: "G-7PXRXZWWGQ"
};

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
    CardDetailComponent,
    LoginComponent,
    AddOfferComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true},
      { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
      JwtHelperService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
