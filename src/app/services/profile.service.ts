import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    private HostName: string = '';
    private routeName: string = '';
    userImage: string = '';
    constructor(private _HttpClient: HttpClient, private _GlobalService: GlobalService) {
      this.HostName = this._GlobalService.HostName;
      this.routeName = this._GlobalService.usersRoute;
      this.userImage = this._GlobalService.userImage;
    }
  
    getLoggedUser(): Observable<any> {
      return this._HttpClient.get(`${this.HostName}${this.routeName}/me`,
        { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } }
      )
    }
  
    updateLoggedUser(formData: any): Observable<any> {
      return this._HttpClient.put(`${this.HostName}${this.routeName}/updateMe`,
        formData, { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } })
    }
  
    updateLoggedUserPassword(formData: any): Observable<any> {
      return this._HttpClient.put(`${this.HostName}${this.routeName}/changeMyPassword`,
        formData, { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } })
    }
  }
  