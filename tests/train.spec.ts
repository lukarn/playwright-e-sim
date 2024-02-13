import { test, expect } from '@playwright/test';
import { Appsettings } from '../appsettings';

test.describe('Daily tasks tests.', () => {
    test('Train.', async ({ page }) => {
        const appsettings = Appsettings.loadFromFile('appsettings.local.json');

        await page.goto('https://primera.e-sim.org/');
        await page.locator('#navigateToLogin').click();
        await page.getByPlaceholder('login', { exact: true }).fill(appsettings.login);
        await page.getByPlaceholder('password', { exact: true }).fill(appsettings.password);
        await page.getByRole('button', { name: 'LOGIN' }).click();

        await page.locator('li#taskButtonTrain').click();
        await page.locator('button#trainButton').click();

        await expect(page.locator('div.mobileMilitaryStatsWrapper')).toBeVisible();
        await expect(page.locator('div.mobileMilitaryStatsWrapper div.mobileNotify')).toContainText('+');
        await expect(page.locator('div.mobileMilitaryStatsWrapper span.timeCountdown')).toContainText(':');
    });

    test('Work.', async ({ page }) => {
        const appsettings = Appsettings.loadFromFile('appsettings.local.json');

        await page.goto('https://primera.e-sim.org/');
        await page.locator('#navigateToLogin').click();
        await page.getByPlaceholder('login', { exact: true }).fill(appsettings.login);
        await page.getByPlaceholder('password', { exact: true }).fill(appsettings.password);
      
        await page.getByRole('button', { name: 'LOGIN' }).click();

        await expect(page.locator('div.workButtonContainer')).toBeVisible();
        await expect(page.locator('table#productionReportTable')).toBeVisible();
        await expect(page.locator('div.workButtonContainer span.timeCountdown')).toContainText(':');
    });
});