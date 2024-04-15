import { Locator, Page } from '@playwright/test';

export class AuctionsPageElementsComponent {
  auctionItems: Locator;

  constructor(protected page: Page) {
    this.page = page;

    this.auctionItems = this.page.locator(
      'div.auctionItem[id^="auctionItemId"]',
    );
  }

  async getAuctionsOnPageCount(): Promise<number> {
    await this.auctionItems.first().isEnabled();

    const numberOfItems = await this.auctionItems.count();
    return numberOfItems;
  }

  /*
import { Locator, Page, ElementHandle } from '@playwright/test';

  async getAuctionItemTexts(): Promise<string[]> {
    const auctionItemDetails = await this.auctionItemDetailsPromise;
    const texts: string[] = [];
    
    // Iterate through each element and get its inner text
    for (const element of auctionItemDetails) {
      const text = await this.getInnerText(element);
      texts.push(text);
    }
    
    return texts;
  }

  private async getInnerText(element: ElementHandle<Element>): Promise<string> {
    // Use innerText() function to get the text content of the element
    const text = await element.innerText();
    return text;
  }
  */
}
