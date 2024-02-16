import { test, expect } from '@playwright/test';
import { Appsettings } from '../appsettings';

test.describe('Login tests.', () => {
  // Arrange
  const appsettings = Appsettings.loadFromFile('appsettings.local.json');

  test('Login with correct credentials.', async ({ page }) => {
    // Act
    await page.goto(appsettings.baseUrl);
    await page.locator('#navigateToLogin').click();
    await page
      .getByPlaceholder('login', { exact: true })
      .fill(appsettings.login);
    await page
      .getByPlaceholder('password', { exact: true })
      .fill(appsettings.password);

    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.locator('#userAvatar').getByRole('link').click();

    // Assert
    await expect(page.locator('#contentDrop')).toContainText(appsettings.login);
  });

  test.skip('Login without typing credentials.', async ({ page }) => {
    // Act
    await page.goto(appsettings.baseUrl);
    await page.locator('#navigateToLogin').click();

    await page.getByRole('button', { name: 'LOGIN' }).click();

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
    await page.goto(appsettings.baseUrl);
    await page.locator('#navigateToLogin').click();
    await page
      .getByPlaceholder('login', { exact: true })
      .fill(appsettings.login);

    await page.getByRole('button', { name: 'LOGIN' }).click();

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
    await page.goto(appsettings.baseUrl);
    await page.locator('#navigateToLogin').click();
    await page
      .getByPlaceholder('login', { exact: true })
      .fill(appsettings.login);
    await page
      .getByPlaceholder('password', { exact: true })
      .fill('incorrect password');

    await page.getByRole('button', { name: 'LOGIN' }).click();

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
