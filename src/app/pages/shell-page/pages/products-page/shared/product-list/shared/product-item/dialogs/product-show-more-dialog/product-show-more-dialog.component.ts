import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { Product } from '../../../../../../../../../../features/http-data/entities/products/models';
import { IState } from '../../../../../../../../../../features/store/cart/reducers';
import { CartEffects } from '../../../../../../../../../../features/store/cart/effects';
import { NotificationService } from '../../../../../../../../../../features/notification/services';
import {
  ADD_TO_CART_SUCCESS,
  AddToCart,
} from '../../../../../../../../../../features/store/cart/actions';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'sc-product-show-more-dialog',
  templateUrl: './product-show-more-dialog.component.html',
  styleUrls: ['./product-show-more-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductShowMoreDialogComponent implements OnInit, OnDestroy {
  readonly product: Product;

  safeImageUrl: SafeStyle;

  private readonly destroyed$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) data: Product,
    private domSanitizer: DomSanitizer,
    private store: Store<IState>,
    private effects: CartEffects,
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<ProductShowMoreDialogComponent, void>
  ) {
    this.product = data;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.createSafeUrls();
  }

  onSelect(product: Product): void {
    this.store.dispatch(new AddToCart(product));

    this.effects.addToCart$
      .pipe(
        filter(action => action.type === ADD_TO_CART_SUCCESS),
        tap(() =>
          this.notificationService.showSuccess(
            'Product successfully added to cart'
          )
        ),
        tap(() => this.dialogRef.close()),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  private createSafeUrls(): void {
    this.safeImageUrl = this.domSanitizer.bypassSecurityTrustStyle(
      `url(${this.product.image})`
    );
  }
}
