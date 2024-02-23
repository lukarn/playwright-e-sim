import { test, expect } from '@playwright/test';
import { Appsettings } from '../appsettings';
import { LoginPage } from '../pages/login.page';
import { StartPage } from '../pages/start.page';

test.describe('Login tests.', () => {
  // Arrange
  const appsettings = Appsettings.loadFromFile('appsettings.local.json');

  test.beforeEach(async ({ page }) => {
    // Act
    await page.goto(appsettings.baseUrl);

    const loginPage = new LoginPage(page);
    await loginPage.clickLoginNavigateButton();
  });

  test('Login with correct credentials.', async ({ page }) => {
    // Act
    const loginPage = new LoginPage(page);
    await loginPage.setLoginInput(appsettings.login);
    await loginPage.setPasswordInput(appsettings.password);
    await loginPage.clickLoginConfirmButton();

    const startPage = new StartPage(page);
    await startPage.clickUserAvatarButton();

    // Assert
    expect(await startPage.getUserLoginOnAvatarText()).toContain(appsettings.login);
  });

  test.skip('Login without typing credentials.', async ({ page }) => {
    // Act
    const loginPage = new LoginPage(page);
    await loginPage.clickLoginConfirmButton();

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
    const loginPage = new LoginPage(page);
    await loginPage.setLoginInput(appsettings.login);
    await loginPage.clickLoginConfirmButton();

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
    const loginPage = new LoginPage(page);
    await loginPage.setLoginInput(appsettings.login);
    await loginPage.setPasswordInput('incorrect password');
    await loginPage.clickLoginConfirmButton();

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
