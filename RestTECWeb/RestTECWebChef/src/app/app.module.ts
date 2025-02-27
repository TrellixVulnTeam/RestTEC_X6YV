import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlatosComponent } from './platos/platos.component';
import { MenuComponent } from './menu/menu.component';
import { ReasignarComponent } from './reasignar/reasignar.component';
import { JsonService } from './json.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
//Definicion de los URLS para navegar en la Web
const appRoutes: Routes = [
  //Definicion de los URLS para navegar en la Web
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pedidos', component: PlatosComponent },
  { path: 'mispedidos', component: MenuComponent },
  { path: 'otrospedidos', component: ReasignarComponent },

  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    PlatosComponent,
    MenuComponent,
    ReasignarComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatAutocompleteModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatRadioModule, 
    MatSelectModule, 
    MatSlideToggleModule,
    MatButtonToggleModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
