import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit{
  cart: Cart = {items: [
    {
      product: 'https://via.placeholder.com/150',
      name: 'Snickers',
      price: 150,
      quantity: 1,
      id: 1
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'Snickers',
      price: 150,
      quantity: 3,
      id: 1
    }
  ]};

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  ngOnInit(): void{
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  constructor(private cartService: CartService){

  }

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }

  onClearCart(): void{
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem):void{
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem):void{
    this.cartService.addToCart(item)
  }

  onRemoveQuantity(item: CartItem): void{
    this.cartService.removeQuantity(item);
  }
}
