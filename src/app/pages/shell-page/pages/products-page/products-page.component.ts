import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

import { Products } from '../../../../features/http-data/entities/products/models';
import { ProductsService } from '../../../../features/http-data/entities/products/services';

@Component({
  selector: 'sc-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent implements OnInit {
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

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getAll();
  }

  onPageChanged(event: PageEvent): void {
    // TODO
  }
}
