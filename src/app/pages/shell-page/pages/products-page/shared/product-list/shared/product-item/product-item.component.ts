import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { Product } from '../../../../../../../../features/http-data/entities/products/models';

@Component({
  selector: 'sc-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Readonly<Product>;

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
