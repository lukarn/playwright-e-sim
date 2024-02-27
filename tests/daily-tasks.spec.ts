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
    workPage = new WorkPage(page);
    trainPage = new TrainPage(page);
  });

  test('Train.', async ({ page }) => {
    // Act
    await startPage.dailyTasksSideMenuComponent.clickTrainButton();
    await trainPage.trainPageButtonsComponent.clickTrainButton();

    // Assert
    expect(
      await trainPage.trainPageElementsComponent.militaryStatsWrapperIsPresent(),
    ).toBeTruthy();
    expect(
      await trainPage.trainPageElementsComponent.getMobileNotifyText(),
    ).toContain('+');
    expect(
      await trainPage.trainPageElementsComponent.getTimeCountDownText(),
    ).toContain(':');
  });

  test('Work.', async ({ page }) => {
    // Act
    await startPage.dailyTasksSideMenuComponent.clickWorkButton();
    await workPage.workPageButtonsComponent.clickWorkButton();

    // Assert
    expect(
      await workPage.workPageElementsComponent.workButtonContainerIsPresent(),
    ).toBeTruthy();
    expect(
      await workPage.workPageElementsComponent.productionReportTableIsPresent(),
    ).toBeTruthy();
    expect(
      await workPage.workPageElementsComponent.getTimeCountDownText(),
    ).toContain(':');
  });
});
