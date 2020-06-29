import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoadCart } from '../../features/store/cart/actions';
import { Store } from '@ngrx/store';
import { IState } from '../../features/store/cart/reducers';

@Component({
  selector: 'sc-shell-page-component',
  templateUrl: './shell-page.component.html',
  styleUrls: ['./shell-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellPageComponent implements OnInit {
  constructor(private store: Store<IState>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadCart());
  }
}
