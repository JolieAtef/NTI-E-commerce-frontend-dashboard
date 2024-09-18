import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  HostName: string = 'http://localhost:3500';
  authRoute: string = '/api/v1/auth';
  usersRoute: string = '/api/v1/users';
  categoriesRoute: string = '/api/v1/category';
  subcategoriesRoute: string = '/api/v1/subcategory';
  productsRoute: string = '/api/v1/product';
  couponsRoute: string = '/api/v1/coupons';
  orderRoute: string = '/api/v1/orders';
  reviewsRoute: string = '/api/v1/reviews';
  productsImages: string = `${this.HostName}/product/`
  userImage: string = `${this.HostName}/users/`
  constructor() { }
}
