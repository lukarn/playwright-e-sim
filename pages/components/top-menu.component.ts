import { Locator, Page } from '@playwright/test';
import { BaseActions } from '../actions/base.actions';

export class TopMenuComponent {
  private actions: BaseActions;

  private elements: {
    marketButton: Locator;
    auctionsButton: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;
    this.actions = new BaseActions(page);

    this.elements = {
      // markert drop-down
      marketButton: this.page.locator('a#menuMarket'),
      auctionsButton: this.page.locator('a#auctionsLink'),
    };
  }

  async clickMarketButton(): Promise<void> {
    await this.actions.clickButton(this.elements.marketButton);
  }
  async clickMarketAuctionsButton(): Promise<void> {
    await this.actions.clickButton(this.elements.auctionsButton);
  }
}
