import { test, expect } from '@playwright/test';
import { Appsettings } from '../appsettings';
import { LoginPage } from '../pages/login.page';
import { StartPage } from '../pages/start.page';

test.describe('Daily tasks tests.', () => {
  test.beforeEach(async ({ page }) => {
    // Arrange
    const appsettings = Appsettings.loadFromFile('appsettings.local.json');

    // Act
    await page.goto(appsettings.baseUrl);

    const loginPage = new LoginPage(page);
    await loginPage.clickLoginNavigateButton();
    await loginPage.fillLoginForm(appsettings.login, appsettings.password);
  });

  test('Train.', async ({ page }) => {
    // Act
    const startPage = new StartPage(page);
    await startPage.dailyTasksSideMenuComponent.clickTrainButton();
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
    const startPage = new StartPage(page);
    await startPage.dailyTasksSideMenuComponent.clickWorkButton();
    await page.locator('button#workButton').click();

    // Assert
    await expect(page.locator('div.workButtonContainer')).toBeVisible();
    await expect(page.locator('table#productionReportTable')).toBeVisible();
    await expect(
      page.locator('div.workButtonContainer span.timeCountdown'),
    ).toContainText(':');
  });
});
