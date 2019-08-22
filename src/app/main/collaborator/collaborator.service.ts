import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  updateContact(arg0: any) {
    throw new Error("Method not implemented.");
  }
  @Output() gettinglist: EventEmitter<any> = new EventEmitter();
  @Output() created: EventEmitter<any> = new EventEmitter();
  @Output() deleted: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  getlist() {
    this.http.get(environment.apiUrl + "/api/collaborators", { headers: this.authorizationHeader() }).subscribe((res: any) => {
      // console.log(res);
      this.gettinglist.emit(res);
    }, (err) => {
      this.gettinglist.emit(err);
    })
  }
  create(data: any) {
    this.http.post(environment.apiUrl + "/api/collaborators", data, { headers: this.authorizationHeader() }).subscribe((res: any) => {
      this.created.emit(res);
    }, (err) => {
      this.created.emit(err);
    })
  }
  delete(_id) {
    this.http.delete(environment.apiUrl + "/api/collaborators/" + _id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
      this.deleted.emit(res);
    }, (err) => {
      this.deleted.emit(err);
    })
  }
}
