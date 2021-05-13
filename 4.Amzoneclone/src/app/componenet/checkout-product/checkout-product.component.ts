import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ShoppingService } from 'src/app/service/shopping.service';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.css']
})
export class CheckoutProductComponent implements OnInit {
  @Input() checkout_products:any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(public shopping_Cart:ShoppingService) { }

  ngOnInit(): void {
    console.log('products',this.checkout_products)
  }

  removeItem(p){
    this.shopping_Cart.removerItem(p)
    this.deleteEvent.emit(p)
  }
  
}
