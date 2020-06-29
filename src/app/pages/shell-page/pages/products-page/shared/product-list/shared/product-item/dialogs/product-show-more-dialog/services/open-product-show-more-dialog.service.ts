import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';

import { ProductShowMoreDialogComponent } from '../product-show-more-dialog.component';
import { Product } from '@features/http-data/entities/products/models';

@Injectable()
export class OpenProductShowMoreDialogService implements OnDestroy {
  readonly content = ProductShowMoreDialogComponent;

  private readonly destroyed$ = new Subject<void>();

  private dialogRef: MatDialogRef<
    ProductShowMoreDialogComponent,
    Product
  > | null = null;

  constructor(private dialog: MatDialog) {}

  close(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  ngOnDestroy(): void {
    this.close();

    this.destroyed$.next();
    this.destroyed$.complete();
  }

  open(cb: (res: Product | undefined) => void, product: Product): void {
    this.close();

    this.dialogRef = this.dialog.open<ProductShowMoreDialogComponent, Product>(
      this.content,
      { minWidth: 320, width: '480px', maxWidth: '80vw', data: product }
    );

    this.dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => {
        this.dialogRef = null;

        cb(res);
      });
  }
}
