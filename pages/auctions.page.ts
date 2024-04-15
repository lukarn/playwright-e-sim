import { Page } from '@playwright/test';
import { AuctionsPageButtonsComponent } from './components/auctions-page/auctions-page-buttons.component';
import { AuctionsPageElementsComponent } from './components/auctions-page/auctions-page-elements.component';

export class AuctionsPage {
  auctionsPageButtonsComponent: AuctionsPageButtonsComponent;
  auctionsPageElementsComponent: AuctionsPageElementsComponent;

  constructor(protected page: Page) {
    this.page = page;

    this.auctionsPageButtonsComponent = new AuctionsPageButtonsComponent(page);
    this.auctionsPageElementsComponent = new AuctionsPageElementsComponent(
      page,
    );
  }
}
