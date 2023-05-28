import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ClaimsData } from './interface/ClaimsData ';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'parte-diario';
  constructor(private router: Router, private jwtHelper: JwtHelperService) { }
  ngOnInit() {
    const token = localStorage.getItem('token');
    console.log(token);
  try {
    let claims= this.jwtHelper.decodeToken<ClaimsData>(token+""); 
    console.log(this.jwtHelper.isTokenExpired(token));
    if (token==null || this.jwtHelper.isTokenExpired(token)) {
      this.router.navigate(['/login']);
    }
  
  } catch (error) {
    console.log(error);
    this.router.navigate(['/login']);
  }
}
  
}
