import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//esto es pa trabajar con los formularios si no lo tienes te saca error :)
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { StoreModule } from '@ngrx/store';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HechizosComponent } from './components/hechizos/hechizos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopComponent } from './components/top/top.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { FavHecComponent } from './components/fav-hec/fav-hec.component';
import { addFavHec } from './store/hec.action';
import { SavedHecReducer } from './store/hec.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HechizosComponent,
    PageNotFoundComponent,
    TopComponent,
    BottomComponent,
    FavHecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({favHec: SavedHecReducer}),
    JwtModule.forRoot({
      config:{
      tokenGetter: () => localStorage.getItem('token')
    }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
