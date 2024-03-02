import { Locator, Page } from '@playwright/test';

export class TrainPageElementsComponent {
  elements: {
    militaryStatsWrapper: Locator;
    mobileNotify: Locator;
    timeCountDown: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;

    this.elements = {
      militaryStatsWrapper: this.page.locator('div.mobileMilitaryStatsWrapper'),
      mobileNotify: this.page.locator(
        'div.mobileMilitaryStatsWrapper div.mobileNotify',
      ),
      timeCountDown: this.page.locator(
        'div.mobileMilitaryStatsWrapper span.timeCountdown',
      ),
    };
  }
}
