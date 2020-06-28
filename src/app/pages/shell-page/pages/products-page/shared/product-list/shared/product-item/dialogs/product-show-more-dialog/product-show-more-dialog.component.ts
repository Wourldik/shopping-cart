import { Component, Inject, OnInit } from '@angular/core';

import { Product } from '../../../../../../../../../../features/http-data/entities/products/models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'sc-product-show-more-dialog',
  templateUrl: './product-show-more-dialog.component.html',
  styleUrls: ['./product-show-more-dialog.component.scss'],
})
export class ProductShowMoreDialogComponent implements OnInit {
  readonly product: Product;

  safeImageUrl: SafeStyle;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Product,
    private domSanitizer: DomSanitizer
  ) {
    this.product = data;
  }

  ngOnInit(): void {
    this.createSafeUrls();
  }

  private createSafeUrls(): void {
    this.safeImageUrl = this.domSanitizer.bypassSecurityTrustStyle(
      `url(${this.product.image})`
    );
  }
}
