import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

import { OpenProductShowMoreDialogService } from '../services';
import { Product } from '@features/http-data/entities/products/models';

@Directive({
  selector: '[scOpenProductShowMoreDialog]',
  providers: [OpenProductShowMoreDialogService],
})
export class OpenProductShowMoreDialogDirective {
  @Output()
  readonly addedToCart = new EventEmitter<Product>();

  @Input()
  product: Product;

  constructor(private dialogService: OpenProductShowMoreDialogService) {}

  @HostListener('click')
  open() {
    this.dialogService.open(res => {
      if (res) {
        this.addedToCart.emit(res);
      }
    }, this.product);
  }
}
