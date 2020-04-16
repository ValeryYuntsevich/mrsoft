import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUsers, IUserProfile } from '../models/users';



@Injectable({
  providedIn: 'root'
})

export class UserListService {

  readonly API_URL: string = `${environment.api.baseUrl}`;
  readonly CORS: string = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<IUsers> {
    return this.http.get<IUsers>(this.CORS + this.API_URL + '/list.json');
  }

  getUserProfile(path: string): Observable<IUserProfile> {
    return this.http.get<IUserProfile>(this.CORS + this.API_URL + path);
  }

}