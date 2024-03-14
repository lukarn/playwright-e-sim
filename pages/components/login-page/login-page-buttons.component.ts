import { Locator, Page } from '@playwright/test';
import { BaseActions } from '../../actions/base.actions';

export class LoginPageButtonsComponent {
  private actions: BaseActions;

  private elements: {
    loginNavigateButton: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;
    this.actions = new BaseActions(page);

    this.elements = {
      loginNavigateButton: this.page.locator('#navigateToLogin'),
    };
  }

  async clickLoginNavigateButton(): Promise<void> {
    await this.actions.clickButton(this.elements.loginNavigateButton);
  }
}
