import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/service/shopping.service';

@Component({
  selector: 'app-checkout-subtotal',
  templateUrl: './checkout-subtotal.component.html',
  styleUrls: ['./checkout-subtotal.component.css']
})
export class CheckoutSubtotalComponent implements OnInit {

  constructor(public shopping_Cart:ShoppingService) { }

  ngOnInit(): void {
  }

}
