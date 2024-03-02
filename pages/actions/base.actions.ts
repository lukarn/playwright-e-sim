import { Locator, Page } from '@playwright/test';

export class BaseActions {
  constructor(protected page: Page) {}

  async clickButton(locator: Locator): Promise<void> {
    await locator.click();
  }

  async sendText(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  async getElementText(locator: Locator): Promise<string | null> {
    return await locator.textContent();
  }

  // async isElementPresent(locator: Locator): Promise<boolean> {
  //   return await locator.isVisible();
  // }

  // protected getByXpath(xpathSelector: string): Locator {
  //   return this.page.locator('xpath=' + xpathSelector);
  // }
}
