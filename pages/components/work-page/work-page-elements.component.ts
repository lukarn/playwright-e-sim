import { Locator, Page } from '@playwright/test';
import { BaseActions } from '../../actions/base.actions';

export class WorkPageElementsComponent {
  private actions: BaseActions;

  private elements: {
    workButtonContainer: Locator;
    productionReportTable: Locator;
    timeCountDown: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;
    this.actions = new BaseActions(page);

    this.elements = {
      workButtonContainer: this.page.locator('div.workButtonContainer'),
      productionReportTable: this.page.locator('table#productionReportTable'),
      timeCountDown: this.page.locator(
        'div.workButtonContainer span.timeCountdown',
      ),
    };
  }

  async workButtonContainerIsPresent(): Promise<boolean> {
    return await this.actions.isElementPresent(
      this.elements.workButtonContainer,
    );
  }

  async productionReportTableIsPresent(): Promise<boolean> {
    return await this.actions.isElementPresent(
      this.elements.productionReportTable,
    );
  }

  async getTimeCountDownText(): Promise<string | null> {
    return await this.actions.getElementText(this.elements.timeCountDown);
  }
}
