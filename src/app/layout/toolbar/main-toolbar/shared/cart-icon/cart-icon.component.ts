import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sc-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartIconComponent {
  @Input()
  total = 0;
}
