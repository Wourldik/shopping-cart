import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { svgIcons } from '../constants/internal';

@Injectable({
  providedIn: 'root',
})
export class RegisterSvgService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  registerSvg(): void {
    Object.entries(svgIcons).forEach(icon => this._registerSvg(icon));
  }

  private _registerSvg([name, url]: [string, string]): void {
    this.iconRegistry.addSvgIcon(
      name,
      this.sanitizer.bypassSecurityTrustResourceUrl(url)
    );
  }
}
