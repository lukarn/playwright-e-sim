import { Page } from '@playwright/test';
import { WorkPageButtonsComponent } from './components/work-page/work-page-buttons.component';
import { WorkPageElementsComponent } from './components/work-page/work-page-elements.component';

export class WorkPage {
  workPageButtonsComponent: WorkPageButtonsComponent;
  workPageElementsComponent: WorkPageElementsComponent;

  constructor(protected page: Page) {
    this.page = page;

    this.workPageButtonsComponent = new WorkPageButtonsComponent(page);
    this.workPageElementsComponent = new WorkPageElementsComponent(page);
  }
}
