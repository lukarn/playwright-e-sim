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

  // async waitForElements(elements: { [key: string]: Locator }): Promise<void> {
  //   // Loop through each key in the elements object
  //   for (const key in elements) {
  //     // Check if the key is a property of the object itself, not from its prototype chain
  //     if (Object.prototype.hasOwnProperty.call(elements, key)) {
  //       // Perform the operation on each element
  //       await elements[key].isEnabled();
  //     }
  //   }
  // }

  // protected getByXpath(xpathSelector: string): Locator {
  //   return this.page.locator('xpath=' + xpathSelector);
  // }
}
