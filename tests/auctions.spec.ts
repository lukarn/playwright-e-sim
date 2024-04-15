import { test, expect } from '@playwright/test';
import { Appsettings } from '../appsettings';
import { StartPage } from '../pages/start.page';
import { AuctionsPage } from '../pages/auctions.page';

test.describe('Auctions tests.', () => {
  let startPage: StartPage;
  let auctionsPage: AuctionsPage;

  test.beforeEach(async ({ page }) => {
    // Load env. settings
    const appsettings = Appsettings.loadFromFile('appsettings.local.json');

    // Login to the app
    await page.goto(appsettings.baseUrl);

    startPage = new StartPage(page);
    await startPage.topMenuComponent.clickMarketButton();
    await startPage.topMenuComponent.clickMarketAuctionsButton();

    auctionsPage = new AuctionsPage(page);
  });

  test('Default nubmer of auctions count.', async ({ page }) => {
    // Assert
    expect(page).toHaveURL(new RegExp('auctions.html$'));
    expect(
      await auctionsPage.auctionsPageElementsComponent.getAuctionsOnPageCount(),
    ).toBe(20);
  });
});
