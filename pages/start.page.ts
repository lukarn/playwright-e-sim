import { Page } from '@playwright/test';
import { DailyTasksSideMenuComponent } from './components/daily-tasks-side-menu.component';
import { UserAvatarComponent } from './components/user-avatar.component';
import { TopMenuComponent } from './components/top-menu.component';

export class StartPage {
  dailyTasksSideMenuComponent: DailyTasksSideMenuComponent;
  userAvatarComponent: UserAvatarComponent;
  topMenuComponent: TopMenuComponent;

  constructor(protected page: Page) {
    this.page = page;

    this.dailyTasksSideMenuComponent = new DailyTasksSideMenuComponent(page);
    this.userAvatarComponent = new UserAvatarComponent(page);
    this.topMenuComponent = new TopMenuComponent(page);
  }
}
