import { test as setup } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';

import { Appsettings } from '../appsettings';
import { LoginPage } from '../pages/login.page';

setup('Login to the app.', async ({ page }) => {
  const appsettings = Appsettings.loadFromFile('appsettings.local.json');

  await page.goto(appsettings.baseUrl);

  const loginPage = new LoginPage(page);
  await loginPage.loginPageButtonsComponent.clickLoginNavigateButton();

  await loginPage.loginFormComponent.setLoginInput(appsettings.login);
  await loginPage.loginFormComponent.setPasswordInput(appsettings.password);
  await loginPage.loginFormComponent.clickLoginConfirmButton();

  await page.context().storageState({ path: STORAGE_STATE });
});
