import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchooldialogService {
  @Output() savedschool: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }


  saveSchool(data: any) {
    this.http.post("http://18.139.255.19:3002/api/schools", data, { headers: this.authorizationHeader() }).subscribe((res: any) => {
      this.savedschool.emit(res);
    }, (err) => {
      this.savedschool.emit(err);
    })
  }

}
