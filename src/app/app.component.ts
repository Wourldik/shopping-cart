import { Component, OnInit } from '@angular/core';

import { RegisterSvgService } from '@features/svg-icons';

@Component({
  selector: 'sc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private registerSvgService: RegisterSvgService) {}

  ngOnInit() {
    this.registerSvgService.registerSvg();
  }
}
