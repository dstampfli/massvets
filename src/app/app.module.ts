import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Google Maps
import { AgmCoreModule } from '@agm/core';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MemorialsTableComponent } from './components/memorials-table/memorials-table.component';
import { MemorialsMapComponent } from './components/memorials-map/memorials-map.component';

// Servvices
import { MemorialsService} from './services/memorials.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MemorialsTableComponent,
    MemorialsMapComponent
  ],
  imports: [
    BrowserModule,
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
