import { Locator, Page } from '@playwright/test';

export class TrainPageElementsComponent {
  militaryStatsWrapper: Locator;
  mobileNotify: Locator;
  timeCountDown: Locator;

  constructor(protected page: Page) {
    this.page = page;

    this.militaryStatsWrapper = this.page.locator(
      'div.mobileMilitaryStatsWrapper',
    );
    this.mobileNotify = this.page.locator(
      'div.mobileMilitaryStatsWrapper div.mobileNotify',
    );
    this.timeCountDown = this.page.locator(
      'div.mobileMilitaryStatsWrapper span.timeCountdown',
    );
  }
}
