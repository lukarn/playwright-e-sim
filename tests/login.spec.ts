import { test, expect } from '@playwright/test';
import { Appsettings } from '../appsettings2';

test.describe('Login tests.', () => {

test('Login with correct credentials.', async ({ page }) => {
  const appsettings = Appsettings.loadFromFile('appsettings.local.json');

  await page.goto('https://primera.e-sim.org/');
  await page.locator('#navigateToLogin').click();
  await page.getByPlaceholder('login', { exact: true }).click();
  await page.getByPlaceholder('login', { exact: true }).fill(appsettings.login);
  await page.getByPlaceholder('password', { exact: true }).click();
  await page.getByPlaceholder('password', { exact: true }).fill(appsettings.password);

  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('#userAvatar').getByRole('link').click();

  await expect(page.locator('#contentDrop')).toContainText(appsettings.login);
});

test.skip('Login without typing credentials.', async ({ page }) => {
  const appsettings = Appsettings.loadFromFile('appsettings.local.json');

  await page.goto('https://primera.e-sim.org/');
  await page.locator('#navigateToLogin').click();

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await expect(page.locator('#main-wrapper')).toContainText('No user with such login in database. Pay attention on small and big letters!');

  // const elements = await page.locator('div').all();
  // const elementsText = await Promise.all(elements.map(async (element) => {
  //   return await element.evaluate((el) => el.textContent);
  // }));
  // elementsText.forEach((element) => {
  //   expect(element).not.toContain('No user with such login in database. Pay attention on small and big letters!');
  // });

  const elements = await page.locator('div').all();
  await Promise.all(elements.map((element) => {
    return expect(element.textContent()).resolves.not.toContain(appsettings.login);
  }));

});

test.skip('Login without password.', async ({ page }) => {
  const appsettings = Appsettings.loadFromFile('appsettings.local.json');

  await page.goto('https://primera.e-sim.org/');
  await page.locator('#navigateToLogin').click();
  await page.getByPlaceholder('login', { exact: true }).click();
  await page.getByPlaceholder('login', { exact: true }).fill(appsettings.login);

  await page.getByRole('button', { name: 'LOGIN' }).click();
  
  await expect(page.locator('#main-wrapper')).toContainText('Wrong password. Please pay attention to upper and lower case!');

  const elements = await page.locator('div').all();
  await Promise.all(elements.map((element) => {
    return expect(element.textContent()).resolves.not.toContain(appsettings.login);
  }));
});

test.skip('Login with incorrect password.', async ({ page }) => {
  const appsettings = Appsettings.loadFromFile('appsettings.local.json');

  await page.goto('https://primera.e-sim.org/');
  await page.locator('#navigateToLogin').click();
  await page.getByPlaceholder('login', { exact: true }).click();
  await page.getByPlaceholder('login', { exact: true }).fill(appsettings.login);
  await page.getByPlaceholder('password', { exact: true }).click();
  await page.getByPlaceholder('password', { exact: true }).fill('incorrect password');

  await page.getByRole('button', { name: 'LOGIN' }).click();
  
  await expect(page.locator('#main-wrapper')).toContainText('Wrong password. Please pay attention to upper and lower case!');

  const elements = await page.locator('div').all();
  await Promise.all(elements.map((element) => {
    return expect(element.textContent()).resolves.not.toContain(appsettings.login);
  }));
});

});