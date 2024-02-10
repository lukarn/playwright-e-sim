import { test, expect } from '@playwright/test';
import { Appsettings } from '../appsettings';



test('test', async ({ page }) => {
  const appSettings = Appsettings.loadFromFile('appsettings.local.json');

  if (appSettings) {
    console.log('Loaded Appsettings:');
    console.log('Base URL:', appSettings.baseUrl);
    console.log('Login:', appSettings.login);
    console.log('Password:', appSettings.password);
  }

  await page.goto('https://primera.e-sim.org/');
  await page.locator('#navigateToLogin').click();
  await page.getByPlaceholder('login', { exact: true }).click();
  await page.getByPlaceholder('login', { exact: true }).fill(appSettings.login);
  await page.getByPlaceholder('password', { exact: true }).click();
  await page.getByPlaceholder('password', { exact: true }).fill(appSettings.password);

  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('#userAvatar').getByRole('link').click();

  await expect(page.locator('#contentDrop')).toContainText('sledzik');
});

