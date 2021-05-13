import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/service/shopping.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items : any = [];
  
  constructor(public shopping_Cart:ShoppingService) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }

  getShoppingCart(){
    this.items = this.shopping_Cart.get_shopping_cart_items();
  }

  deleteEventHandler(p){
    console.log("event handled")
    this.getShoppingCart()
  }

}
