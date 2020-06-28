import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

import { OpenProductShowMoreDialogService } from '../services';
import { Product } from '../../../../../../../../../../../features/http-data/entities/products/models';

@Directive({
  selector: '[scOpenProductShowMoreDialog]',
  providers: [OpenProductShowMoreDialogService],
})
export class OpenProductShowMoreDialogDirective {
  // TODO Add output type
  @Output()
  readonly addedToCart = new EventEmitter<void>();

  @Input()
  product: Product;

  constructor(private dialogService: OpenProductShowMoreDialogService) {}

  @HostListener('click')
  open() {
    this.dialogService.open<any>(res => {
      if (res) {
        this.addedToCart.emit();
      }
    }, this.product);
  }
}
