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

@NgModule({
  declarations: [
    AppComponent,
    InicioProduccionComponent,
    CardComponent,
    ErrorDialogComponent,
    NavHeaderComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
