import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InicioProduccionComponent } from './inicio-produccion/inicio-produccion.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent },
  // {path:'control-diario',component:InicioProduccionComponent},
  // // Agrega más rutas según las necesidades de tu aplicación
  // { path: '**', redirectTo: 'home' }
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {path:'control-diario',component:InicioProduccionComponent}
      // Agrega aquí otras rutas para las diferentes páginas del menú principal
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
