import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Google Maps
import { AgmCoreModule } from '@agm/core';

// Servvices
import { MemorialsService} from './services/memorials.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MemorialsComponent } from './components/memorials/memorials.component';
import { MemorialsTableComponent } from './components/memorials-table/memorials-table.component';
import { MemorialsMapComponent } from './components/memorials-map/memorials-map.component';
import { DescriptionComponent } from './components/description/description.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  {path:'', component:HomeComponent},
  {path:'memorials/:war', component:MemorialsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MemorialsTableComponent,
    MemorialsMapComponent,
    DescriptionComponent,
    MemorialsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOQzIDTtG_TH2_YljmOyvRK8tUsUOESpw'
    })
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    MemorialsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
