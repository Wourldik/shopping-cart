import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sc-shell-page-component',
  templateUrl: './shell-page.component.html',
  styleUrls: ['./shell-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellPageComponent {}
