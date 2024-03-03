import { Locator, Page } from '@playwright/test';
import { BaseActions } from '../actions/base.actions';

export class UserAvatarComponent {
  private actions: BaseActions;

  private elements: {
    userAvatarButton: Locator;
    userLoginOnAvatarText: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;
    this.actions = new BaseActions(page);

    this.elements = {
      userAvatarButton: this.page.locator('#userAvatar').getByRole('link'),
      userLoginOnAvatarText: this.page.locator('#contentDrop'),
    };
  }

  async clickUserAvatarButton(): Promise<void> {
    await this.actions.clickButton(this.elements.userAvatarButton);
  }

  async getUserLoginOnAvatarText(): Promise<string | null> {
    return await this.actions.getElementText(
      this.elements.userLoginOnAvatarText,
    );
  }
}
