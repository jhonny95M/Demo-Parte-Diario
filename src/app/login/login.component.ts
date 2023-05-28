import { Component, OnInit } from '@angular/core';
import { TypeLoading } from '../model/TypeLoading';
import { PerfilEmpresaDTO } from '../interface/PerfilEmpresaDTO';
import { AuthenticateRequest } from '../interface/AuthenticateRequest';
import { AuthenticationService } from '../services/authentication.service';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UsuarioResponse } from '../model/UsuarioResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isProduction: boolean = environment.production;
  mostrarEmpresa:boolean=false;
  sleepEmpresa:boolean=false;
  loginMesssage:string="";
  getTypeLoad=TypeLoading.BallBeat;

  disabled = true;
  message!:string;
  messageStyles:string = "visibility:hidden";
  user!:AuthenticateRequest;
  perfilEmpresaDTOs!:PerfilEmpresaDTO[];
  constructor(private userService:AuthenticationService,private router: Router){}
  ngOnInit(): void {
    this.user={
      DNI:"",
      Pass:"",
      EmpSpeed:"EM",
      IdEmpresa:0,
      IdModulo:0,
      IdUsuario:0
    }
  }
  validarUserAndEmpresaAsync(): void {
    this.userService.AthenticateByEmpresaAsync(this.user).pipe(
      map((returnedUser:UsuarioResponse) => {
        if (returnedUser != null) {
          // (AuthenticationStateProvider as State.AuthState).MarkUserAsAuthenticated(returnedUser);
          if (this.isProduction) {
            if (returnedUser.IdPerfiles.some(c => c === 62)) {
              this.router.navigate(['/http://192.168.252.6/webproduccion']);
            } else {
              this.router.navigate(['/']);
            }
          } else {
            this.router.navigate(['/']);
          }
          return true;
        } else {
          this.loginMesssage = "Invalid username or password";
          return false;
        }
      })
    );
  
    // if (returnedUser != null) {
    //   await (AuthenticationStateProvider as State.AuthState).MarkUserAsAuthenticated(returnedUser);
    //   if (environment.IsProduction()) {
    //     if (returnedUser.IdPerfiles.some(c => c === 62)) {
    //       NavigationManager.NavigateTo("http://192.168.252.6/webproduccion");
    //     } else {
    //       NavigationManager.NavigateTo("");
    //     }
    //   } else {
    //     NavigationManager.NavigateTo("");
    //   }
    //   return true;
    // } else {
    //   LoginMesssage = "Invalid username or password";
    //   return false;
    // }
  }
  validateUser(): void {
    this.sleepEmpresa = true;
    // customValidator.ClearErrors();
  
      this.userService.LoginAsync(this.user)
      .subscribe((returnedUser:UsuarioResponse)=>{
        this.user.IdUsuario = returnedUser.IdUsuario;
        const perfilEmpresa = returnedUser.PerfilEmpresaDTOs;
        if (!perfilEmpresa) {
          this.loginMesssage = "Usuario o contraseña incorrecto";
          return;
        }
        if (perfilEmpresa.length === 1) {
          this.user.IdEmpresa = perfilEmpresa[0].IdEmpresa;
          this.validarUserAndEmpresaAsync();
        } else if (perfilEmpresa.length > 1) {
          this.mostrarEmpresa = true;
          this.perfilEmpresaDTOs = perfilEmpresa;
          this.sleepEmpresa = false;
        } else {
          this.loginMesssage = "No tiene asignada una empresa";
        }
        this.disabled = true;
        this.messageStyles = "color:green";
        this.message = "The form has been processed.";
      },(ex:any)=>{
        this.disabled = true;
        this.messageStyles = "color:red";
        this.loginMesssage = ex.Message;
        this.sleepEmpresa = false;
      });
      
    
  }
  
  enviarListadoEmpresa(e:number){
    this.user.IdEmpresa = e;
    this.validarUserAndEmpresaAsync();
  }
}
