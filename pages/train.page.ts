import { Page } from '@playwright/test';
import { TrainPageButtonsComponent } from './components/train-page/train-page-buttons.component';
import { TrainPageElementsComponent } from './components/train-page/train-page-elements.component';

export class TrainPage {
  trainPageButtonsComponent: TrainPageButtonsComponent;
  trainPageElementsComponent: TrainPageElementsComponent;

  constructor(protected page: Page) {
    this.page = page;

    this.trainPageButtonsComponent = new TrainPageButtonsComponent(page);
    this.trainPageElementsComponent = new TrainPageElementsComponent(page);
  }
}
