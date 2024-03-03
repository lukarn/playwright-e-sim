import { test, expect } from '@playwright/test';
import { Appsettings } from '../appsettings';
import { LoginPage } from '../pages/login.page';
import { StartPage } from '../pages/start.page';
import { WorkPage } from '../pages/work.page';
import { TrainPage } from '../pages/train.page';

test.describe('Daily tasks tests.', () => {
  let startPage: StartPage;
  let workPage: WorkPage;
  let trainPage: TrainPage;

  test.beforeEach(async ({ page }) => {
    // Load env. settings
    const appsettings = Appsettings.loadFromFile('appsettings.json');

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
    workPage = new WorkPage(page);
    trainPage = new TrainPage(page);
  });

  test('Train.', async () => {
    // Act
    await startPage.dailyTasksSideMenuComponent.clickTrainButton();
    await trainPage.trainPageButtonsComponent.clickTrainButton();

    await expect(
      trainPage.trainPageElementsComponent.militaryStatsWrapper,
    ).toBeVisible();
    await expect(
      trainPage.trainPageElementsComponent.mobileNotify,
    ).toContainText('+');
    await expect(
      trainPage.trainPageElementsComponent.timeCountDown,
    ).toContainText(':');
  });

  test('Work.', async () => {
    // Act
    await startPage.dailyTasksSideMenuComponent.clickWorkButton();
    await workPage.workPageButtonsComponent.clickWorkButton();

    await expect(
      workPage.workPageElementsComponent.workButtonContainer,
    ).toBeVisible();
    await expect(
      workPage.workPageElementsComponent.productionReportTable,
    ).toBeVisible();
    await expect(
      workPage.workPageElementsComponent.workButtonContainer,
    ).toContainText(':');
  });
});
