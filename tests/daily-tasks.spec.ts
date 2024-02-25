import { test, expect } from '@playwright/test';
import { Appsettings } from '../appsettings';
import { LoginPage } from '../pages/login.page';
import { StartPage } from '../pages/start.page';

test.describe('Daily tasks tests.', () => {
  let startPage: StartPage;

  test.beforeEach(async ({ page }) => {
    // Load env. settings
    const appsettings = Appsettings.loadFromFile('appsettings.local.json');

    // Login to the app
    await page.goto(appsettings.baseUrl);

    const loginPage = new LoginPage(page);
    await loginPage.loginPageButtonsComponent.clickLoginNavigateButton();
    await loginPage.loginFormComponent.fillLoginForm(
      appsettings.login,
      appsettings.password,
    );

    // Create pages for test cases
    startPage = new StartPage(page);
  });

  test('Train.', async ({ page }) => {
    // Act
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
