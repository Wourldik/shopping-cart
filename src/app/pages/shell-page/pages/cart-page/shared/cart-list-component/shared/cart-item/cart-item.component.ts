import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { Product } from '@features/http-data/entities/products/models';

@Component({
  selector: 'sc-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  readonly removed = new EventEmitter<Product>();

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

  onRemove(product: Product): void {
    this.removed.emit(product);
  }
}
