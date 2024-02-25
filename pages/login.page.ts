import { Page } from '@playwright/test';
import { LoginFormComponent } from './components/login-page/login-form.component';
import { LoginPageButtonsComponent } from './components/login-page/login-page-buttons.component';

export class LoginPage {
  loginFormComponent: LoginFormComponent;
  loginPageButtonsComponent: LoginPageButtonsComponent;

  constructor(protected page: Page) {
    this.page = page;

    this.loginFormComponent = new LoginFormComponent(page);
    this.loginPageButtonsComponent = new LoginPageButtonsComponent(page);
  }
}
