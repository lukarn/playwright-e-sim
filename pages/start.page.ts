import { Locator, Page } from '@playwright/test';
import { Actions } from './actions/actions.base';
// import { PageBase } from './PageBase';
// import { SideMenuComponent } from './components/SideMenuComponent';

export class StartPage {
  private actions: Actions;
  //   elements: any;
  private elements: {
    // sideMenu: SideMenuComponent;

    // loggedInUserInitials: Locator;
    // logoutImg: Locator;
    loginButton: Locator;
  };

  constructor(protected page: Page) {
    this.page = page;
    this.actions = new Actions(page);

    // super(page);

    this.elements = {
        loginButton: this.page.locator('#navigateToLogin'),
    
//.locator('#navigateToLogin')

      //   sideMenu: new SideMenuComponent(this.page),

      //   loggedInUserInitials: this.getByXpath(
      //     '//span[contains(@class,"ant-avatar-string")]'
      //   ),
      //   logoutImg: this.getByXpath(
      //     '//span[@role="img" and @aria-label="logout"]'
      //   ),
    };
  }

  async clickLoginButton(): Promise<void> {
    await this.actions.clickButton(this.elements.loginButton);
  }
  // clickButton(menuRankingButton: any) {
  //     throw new Error('Method not implemented.');
  // }

  //   async clickFeedbackButton(): Promise<void> {
  //     await this.clickButton(this.elements.sideMenu.elements.menuFeedbackButton);
  //   }

  //   async clickPlayersButton(): Promise<void> {
  //     await this.clickButton(this.elements.sideMenu.elements.menuPlayersButton);
  //   }

  //   async isLoaded(userInitials: string): Promise<boolean> {
  //     await this.page.waitForTimeout(100);

  //     const isLoaded =
  //       (await this.elements.loggedInUserInitials
  //         .innerText()
  //         .then((initialsText) => initialsText.includes(userInitials))) &&
  //       (await this.elements.sideMenu.isLoaded());

  //     return isLoaded;
  //   }

  //   async waitToBeLoaded() {
  //     await this.elements.loggedInUserInitials.waitFor({
  //       state: 'visible',
  //       timeout: 10000,
  //     });
  //     await this.elements.sideMenu.waitToBeLoaded();

  //     await this.page.waitForTimeout(1000);
  //   }
}
