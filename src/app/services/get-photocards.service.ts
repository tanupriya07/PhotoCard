import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPhotocardsService {

  private cart: any[] = [];

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('assets/data.json');
  }

  addToCart(photoCard: any){
    this.cart.push(photoCard); // Add photo card to cart
    //console.log(this.cart);
  }

  getCartItems(): any[] {
    return this.cart;
    //console.log(typeof(this.cart));
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cart) {
      totalPrice += item.price; // Add price of each photo card in cart
    }

    //console.log(totalPrice);
    return totalPrice;
  }
}
