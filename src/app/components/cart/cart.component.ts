import { Component, OnInit } from '@angular/core';
import { GetPhotocardsService } from '../../services/get-photocards.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems: any[]=[];
  totalPrice: number;

  constructor(private dataService: GetPhotocardsService ){}

  ngOnInit(): void {
    this.cartItems = this.dataService.getCartItems();
    this.totalPrice = this.dataService.getTotalPrice();
  }

  getTotalPrice(){
    this.totalPrice = this.dataService.getTotalPrice();
    return this.totalPrice;
  }
}
