import { Locator, Page } from '@playwright/test';
import { BaseActions } from '../../actions/base.actions';

export class WorkPageButtonsComponent {
  private actions: BaseActions;

  private elements: {
    workButton: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;
    this.actions = new BaseActions(page);

    this.elements = {
      workButton: this.page.locator('button#workButton'),
    };
  }

  async clickWorkButton(): Promise<void> {
    await this.actions.clickButton(this.elements.workButton);
  }
}
