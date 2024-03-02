import { Locator, Page } from '@playwright/test';

export class WorkPageElementsComponent {
  elements: {
    workButtonContainer: Locator;
    productionReportTable: Locator;
    timeCountDown: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;

    this.elements = {
      workButtonContainer: this.page.locator('div.workButtonContainer'),
      productionReportTable: this.page.locator('table#productionReportTable'),
      timeCountDown: this.page.locator(
        'div.workButtonContainer span.timeCountdown',
      ),
    };
  }
}
