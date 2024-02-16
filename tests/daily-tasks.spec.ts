import { test, expect } from '@playwright/test';
import { Appsettings } from '../appsettings';

test.describe('Daily tasks tests.', () => {
  // Arrange
  const appsettings = Appsettings.loadFromFile('appsettings.local.json');

  test('Train.', async ({ page }) => {
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

    await page.locator('li#taskButtonTrain').click();
    await page.locator('button#trainButton').click();

    // Assert
    await expect(page.locator('div.mobileMilitaryStatsWrapper')).toBeVisible();
    await expect(
      page.locator('div.mobileMilitaryStatsWrapper div.mobileNotify'),
    ).toContainText('+');
    await expect(
      page.locator('div.mobileMilitaryStatsWrapper span.timeCountdown'),
    ).toContainText(':');
  });

  test('Work.', async ({ page }) => {
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

    await page.locator('li#taskButtonWork').click();
    await page.locator('button#workButton').click();

    // Assert
    await expect(page.locator('div.workButtonContainer')).toBeVisible();
    await expect(page.locator('table#productionReportTable')).toBeVisible();
    await expect(
      page.locator('div.workButtonContainer span.timeCountdown'),
    ).toContainText(':');
  });
});
