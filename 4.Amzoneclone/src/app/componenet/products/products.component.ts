import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/service/shopping.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products:any[];
  // products:any[];
  constructor(private shopping:ShoppingService) { }

  ngOnInit(): void {
  }

  addToCart(product)
  {
    this.shopping.addProduct(product);
  }

}
