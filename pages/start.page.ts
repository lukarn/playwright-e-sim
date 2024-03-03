import { Page } from '@playwright/test';
import { DailyTasksSideMenuComponent } from './components/daily-tasks-side-menu.component';
import { UserAvatarComponent } from './components/user-avatar.component';

export class StartPage {
  dailyTasksSideMenuComponent: DailyTasksSideMenuComponent;
  userAvatarComponent: UserAvatarComponent;

  constructor(protected page: Page) {
    this.page = page;

    this.dailyTasksSideMenuComponent = new DailyTasksSideMenuComponent(page);
    this.userAvatarComponent = new UserAvatarComponent(page);
  }
}
