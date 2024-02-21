import { Locator, Page } from '@playwright/test';

export class Actions {
  constructor(protected page: Page) {}

  async clickButton(locator: Locator): Promise<void> {
    await locator.click();
  }

  // protected getByXpath(xpathSelector: string): Locator {
  //   return this.page.locator('xpath=' + xpathSelector);
  // }
}
