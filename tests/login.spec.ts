import { test, expect } from '@playwright/test';
import { Appsettings } from '../appsettings';
import { LoginPage } from '../pages/login.page';
import { StartPage } from '../pages/start.page';

test.describe('Login tests.', () => {
  // Arrange
  const appsettings = Appsettings.loadFromFile('appsettings.local.json');
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    // Act
    await page.goto(appsettings.baseUrl);

    loginPage = new LoginPage(page);
    await loginPage.loginPageButtonsComponent.clickLoginNavigateButton();
  });

  test('Login with correct credentials.', async ({ page }) => {
    // Act
    await loginPage.loginFormComponent.setLoginInput(appsettings.login);
    await loginPage.loginFormComponent.setPasswordInput(appsettings.password);
    await loginPage.loginFormComponent.clickLoginConfirmButton();

    const startPage = new StartPage(page);
    await startPage.userAvatarComponent.clickUserAvatarButton();

    // Assert
    expect(
      await startPage.userAvatarComponent.getUserLoginOnAvatarText(),
    ).toContain(appsettings.login);
  });

  test.skip('Login without typing credentials.', async ({ page }) => {
    // Act
    await loginPage.loginFormComponent.clickLoginConfirmButton();

    // Assert
    await expect(page.locator('#main-wrapper')).toContainText(
      'No user with such login in database. Pay attention on small and big letters!',
    );

    const elements = await page.locator('div').all();
    await Promise.all(
      elements.map((element) => {
        return expect(element.textContent()).resolves.not.toContain(
          appsettings.login,
        );
      }),
    );
  });

  test.skip('Login without password.', async ({ page }) => {
    // Act
    await loginPage.loginFormComponent.setLoginInput(appsettings.login);
    await loginPage.loginFormComponent.clickLoginConfirmButton();

    // Assert
    await expect(page.locator('#main-wrapper')).toContainText(
      'Wrong password. Please pay attention to upper and lower case!',
    );

    const elements = await page.locator('div').all();
    await Promise.all(
      elements.map((element) => {
        return expect(element.textContent()).resolves.not.toContain(
          appsettings.login,
        );
      }),
    );
  });

  test.skip('Login with incorrect password.', async ({ page }) => {
    // Act
    await loginPage.loginFormComponent.setLoginInput(appsettings.login);
    await loginPage.loginFormComponent.setPasswordInput('incorrect password');
    await loginPage.loginFormComponent.clickLoginConfirmButton();

    // Assert
    await expect(page.locator('#main-wrapper')).toContainText(
      'Wrong password. Please pay attention to upper and lower case!',
    );
    const elements = await page.locator('div').all();
    await Promise.all(
      elements.map((element) => {
        return expect(element.textContent()).resolves.not.toContain(
          appsettings.login,
        );
      }),
    );
  });
});
