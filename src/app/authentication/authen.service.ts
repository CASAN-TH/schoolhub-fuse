import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  jwt: JwtHelperService = new JwtHelperService();
  token: any;
  user: any;
  @Output() isLoggedIn: EventEmitter<any> = new EventEmitter();
  constructor(
    private http: HttpClient
  ) {
    this.token = window.localStorage.getItem(`token@${environment.appName}`);
    this.user = this.token ? this.jwt.decodeToken(this.token) : null;
   }

  login(data: any): void {
    this.http.post(`${environment.apiUrl}/api/auth/signin`, data).subscribe((res: any) => {
      window.localStorage.setItem(`token@${environment.appName}`, res.token);
      this.token = window.localStorage.getItem(`token@${environment.appName}`);
      this.user = this.token ? this.jwt.decodeToken(this.token) : null;
      this.isLoggedIn.emit(res);
    }, (err: any) => {
      this.isLoggedIn.emit(err);
    });
  }

  register(data: any): void{
    this.http.post(`${environment.apiUrl}/api/auth/signup`, data).subscribe((res: any) => {
      window.localStorage.setItem(`token@${environment.appName}`, res.token);
      this.token = window.localStorage.getItem(`token@${environment.appName}`);
      this.user = this.token ? this.jwt.decodeToken(this.token) : null;
      this.isLoggedIn.emit(res);
    }, (err: any) => {
      this.isLoggedIn.emit(err);
    });
  }

  logout(): void{
    window.localStorage.removeItem(`token@${environment.appName}`);
    this.token = window.localStorage.getItem(`token@${environment.appName}`);
    this.user = this.token ? this.jwt.decodeToken(this.token) : null;
    this.isLoggedIn.emit(this.user);
  }
}
