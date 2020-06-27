import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Products } from './models';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'sc-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent {
  get pageIndex(): number {
    // TODO
    return 0;
  }

  get pageSize(): number {
    // TODO
    return 10;
  }

  loadingError = false;

  products$: Observable<Products | null>;

  totalProducts: number;

  onPageChanged(event: PageEvent): void {
    // TODO
  }
}
