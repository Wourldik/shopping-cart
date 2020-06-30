import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '@features/http-data/entities/products/models';

@Component({
  selector: 'sc-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainToolbarComponent {
  @Input()
  products: Product[] | null;
}
