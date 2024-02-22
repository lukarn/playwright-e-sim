import { Locator, Page } from '@playwright/test';
import { BaseActions } from './actions/base.actions';

export class LoginPage {
  private actions: BaseActions;

  private elements: {
    loginNavigateButton: Locator;
    loginInput: Locator;
    passwordInput: Locator;
    loginConfirmButton: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;
    this.actions = new BaseActions(page);

    this.elements = {
      loginNavigateButton: this.page.locator('#navigateToLogin'),
      loginInput: this.page.getByPlaceholder('login', { exact: true }),
      passwordInput: this.page.getByPlaceholder('password', { exact: true }),
      loginConfirmButton: this.page.getByRole('button', { name: 'LOGIN' }),
    };
  }

  async clickLoginNavigateButton(): Promise<void> {
    await this.actions.clickButton(this.elements.loginNavigateButton);
  }

  async setLoginInput(text: string): Promise<void> {
    await this.actions.sendText(this.elements.loginInput, text);
  }

  async setPasswordInput(text: string): Promise<void> {
    await this.actions.sendText(this.elements.passwordInput, text);
  }

  async clickLoginConfirmButton(): Promise<void> {
    await this.actions.clickButton(this.elements.loginConfirmButton);
  }

  async fillLoginForm(login: string, password: string): Promise<void> {
    await this.setLoginInput(login);
    await this.setPasswordInput(password);
    await this.clickLoginConfirmButton();
  }
}
