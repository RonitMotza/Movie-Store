import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AboutComponent } from './about.component';
import { MovieComponent } from './Movie.component';
import { CustomerComponent } from './customers.component';
import { HomeComponent } from './home.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { AppComponent }  from './app.component';
import { RentalComponent } from './rental.component';
import { AdminComponent } from './admin.component';



const appRoutes: Routes = [
  { path: 'home', component:HomeComponent },
{ path: 'movie', component: MovieComponent },
{ path: 'cusromers', component: CustomerComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'rental', component: RentalComponent },

];

@NgModule({
  imports:      [ BrowserModule ,FormsModule,RouterModule.forRoot(appRoutes),HttpModule],
  declarations: [ AppComponent ,MovieComponent,CustomerComponent,HomeComponent,RentalComponent,AdminComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
