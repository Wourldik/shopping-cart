import { browser } from 'protractor';

export class AppPage {
  getPageTitle() {
    return browser.getTitle() as Promise<string>;
  }

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
}
