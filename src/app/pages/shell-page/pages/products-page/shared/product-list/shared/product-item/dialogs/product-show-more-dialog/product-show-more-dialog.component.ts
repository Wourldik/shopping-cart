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
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';

import { Product } from '@features/http-data/entities/products/models';
import { IState } from '@features/store/cart/reducers';
import { CartEffects } from '@features/store/cart/effects';
import { NotificationService } from '@features/notification/services';
import {
  ADD_TO_CART_SUCCESS,
  AddToCart,
  LoadCart,
} from '@features/store/cart/actions';
import { getData } from '@features/store/cart/selectors';

@Component({
  selector: 'sc-product-show-more-dialog',
  templateUrl: './product-show-more-dialog.component.html',
  styleUrls: ['./product-show-more-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductShowMoreDialogComponent implements OnInit, OnDestroy {
  itemInCart$: Observable<Product[]> | null = null;

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

    this.itemInCart$ = this.store
      .select(getData)
      .pipe(map(product => product.filter(p => p.id === this.product.id)));

    this.store.dispatch(new LoadCart());
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
