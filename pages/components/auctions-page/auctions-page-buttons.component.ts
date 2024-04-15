import { Locator, Page } from '@playwright/test';
import { BaseActions } from '../../actions/base.actions';

export class AuctionsPageButtonsComponent {
  private actions: BaseActions;

  private elements: {
    showAuctionsButton: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;
    this.actions = new BaseActions(page);

    this.elements = {
      showAuctionsButton: this.page.locator(
        'form#auctionForm button[class^="btn-buy"]',
      ),
    };
  }

  async clickShowAuctionsButton(): Promise<void> {
    await this.actions.clickButton(this.elements.showAuctionsButton);
  }
}
