import { Locator, Page } from '@playwright/test';
import { BaseActions } from '../../actions/base.actions';

export class TrainPageElementsComponent {
  private actions: BaseActions;

  private elements: {
    militaryStatsWrapper: Locator;
    mobileNotify: Locator;
    timeCountDown: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;
    this.actions = new BaseActions(page);

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

  async militaryStatsWrapperIsPresent(): Promise<boolean> {
    return await this.actions.isElementPresent(
      this.elements.militaryStatsWrapper,
    );
  }

  async getMobileNotifyText(): Promise<string | null> {
    return await this.actions.getElementText(this.elements.mobileNotify);
  }

  async getTimeCountDownText(): Promise<string | null> {
    return await this.actions.getElementText(this.elements.timeCountDown);
  }
}
