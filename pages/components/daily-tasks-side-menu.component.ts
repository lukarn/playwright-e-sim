import { Locator, Page } from '@playwright/test';
import { BaseActions } from '../actions/base.actions';

export class DailyTasksSideMenuComponent {
  private actions: BaseActions;

  private elements: {
    trainButton: Locator;
    workButton: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;
    this.actions = new BaseActions(page);

    this.elements = {
      trainButton: this.page.locator('li#taskButtonTrain'),
      workButton: this.page.locator('li#taskButtonWork'),
    };
  }

  async clickTrainButton(): Promise<void> {
    await this.actions.clickButton(this.elements.trainButton);
  }

  async clickWorkButton(): Promise<void> {
    await this.actions.clickButton(this.elements.workButton);
  }
}
