import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private HostName: string = '';
  private routeName: string = '';
  constructor(private _HttpClient: HttpClient, private _GlobalService: GlobalService) {
    this.HostName = this._GlobalService.HostName;
    this.routeName = this._GlobalService.orderRoute;
  }

  getOrders(limit: number = 50, page: number = 1, sort: string = '-createdAt', search: string): Observable<any> {
    return this._HttpClient.get(`${this.HostName}${this.routeName}?limit=${limit}&page=${page}&sort=${sort}&search=${search}`,
      { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } }
    )
  }

  getOrder(orderId: string): Observable<any> {
    return this._HttpClient.get(`${this.HostName}${this.routeName}/${orderId}`,
      { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } }
    )
  }

  updateDeliveredOrder(orderId: string): Observable<any> {
    return this._HttpClient.put(`${this.HostName}${this.routeName}/${orderId}/delivered`, {},
      { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } })
  }

  updatePaidOrder(orderId: string): Observable<any> {
    return this._HttpClient.put(`${this.HostName}${this.routeName}/${orderId}/paid`, {},
      { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } })
  }

}

