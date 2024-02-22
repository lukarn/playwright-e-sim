import { Locator, Page } from '@playwright/test';

export class BaseActions {
  constructor(protected page: Page) {}

  async clickButton(locator: Locator): Promise<void> {
    await locator.click();
  }

  async sendText(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  // protected getByXpath(xpathSelector: string): Locator {
  //   return this.page.locator('xpath=' + xpathSelector);
  // }
}
