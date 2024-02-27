import { Locator, Page } from '@playwright/test';
import { BaseActions } from '../../actions/base.actions';

export class TrainPageButtonsComponent {
  private actions: BaseActions;

  private elements: {
    trainButton: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;
    this.actions = new BaseActions(page);

    this.elements = {
      trainButton: this.page.locator('button#trainButton'),
    };
  }

  async clickTrainButton(): Promise<void> {
    await this.actions.clickButton(this.elements.trainButton);
  }
}
