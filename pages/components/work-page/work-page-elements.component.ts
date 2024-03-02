import { Locator, Page } from '@playwright/test';

export class WorkPageElementsComponent {
  workButtonContainer: Locator;
  productionReportTable: Locator;
  timeCountDown: Locator;

  constructor(protected page: Page) {
    this.page = page;

    this.workButtonContainer = this.page.locator('div.workButtonContainer');
    this.productionReportTable = this.page.locator(
      'table#productionReportTable',
    );
    this.timeCountDown = this.page.locator(
      'div.workButtonContainer span.timeCountdown',
    );
  }
}
