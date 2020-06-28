import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../../../../../../../features/http-data/entities/products/models';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'sc-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input()
  product: Product;

  safeImageUrl: SafeStyle;

  constructor(private domSanitizer: DomSanitizer) {}

  createSafeUrls(): void {
    this.safeImageUrl = this.domSanitizer.bypassSecurityTrustStyle(
      `url(${this.product.image})`
    );
  }

  ngOnInit() {
    this.createSafeUrls();
  }
}
