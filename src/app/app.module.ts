import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioProduccionComponent } from './inicio-produccion/inicio-produccion.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './common-template/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ErrorDialogComponent } from './common/error-component/error-dialog/error-dialog.component';
import { NavHeaderComponent } from './common/nav-header/nav-header.component';
import { NavMenuComponent } from './common/nav-menu/nav-menu.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginSlideComponent } from './login/login-slide/login-slide.component';
import { LoadingComponent } from './common/loading/loading.component';
import { ListadoEmpresaComponent } from './login/listado-empresa/listado-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioProduccionComponent,
    CardComponent,
    ErrorDialogComponent,
    NavHeaderComponent,
    NavMenuComponent,
    LoginComponent,
    HomeComponent,
    LoginSlideComponent,
    LoadingComponent,
    ListadoEmpresaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000'] // Reemplaza con la URL de tu backend si es diferente
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 export function tokenGetter() {
  return localStorage.getItem('token');
}

