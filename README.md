# playwright-e-sim

- base page https://primera.e-sim.org/

## npm - przydatne komendy

Niektóre z nich warto umieści w `package.json` scrits:

- `npm init playwright@latest` utworzenie(inicjalizacja) projektu playwright (gdy tworzymy projekt)
- `npm install` aby zainstalować zależności
- `npx playwright install` aby pobrać aktualne przeglądarki
- `npx playwright test --headed` uruchamianie testów
- `npx playwright codegen https://primera.e-sim.org/` odpalenie nagrywarki - nowa wersja ma nawet asercje
- `npx playwright show-report`

## Kurs jaktestować.pl

- https://jaktestowac.pl/course/playwright-wprowadzenie/
- https://github.com/jaktestowac/playwright_automatyzacja_wprowadzenie/

## Visual Studio Code

- Autosave: in File -> Auto Save
- Timeline: file context menu -> Open Timeline
- Formatting: editor -> context menu -> Format Document
- Extensions: GitLens, Prettier

## Playwright Config modifications and maintanance

- config file `playwright.config.ts`
- check if Playwright should be updated  
  `npm outdated @playwright/test`
- update Playwright  
  `npm i @playwright/test`
- update browsers  
  `npx playwright install`
- verify Playwright version  
  `npx @playwright/test --version`

## Playwright snippets

- describe:

  ```javascript
  import { test, expect } from '@playwright/test';

  test.describe('Group description', () => {
    test('test description', async ({ page }) => {});
  });
  ```

- running one test: `test.only`
- `test.skip`
- `await page.waitForTimeout(5000);`

## Prettier

- install Prettier  
  `npm install --save-dev --save-exact prettier`
- configure Prettier

  - exlude files in `.prettierignore`

    ```
    package-lock.json
    playwright-report
    test-results

    ```

  - set rules in `.prettierrc.json`
    ```
    {
        "singleQuote": true,
        "endOfLine": "auto"
    }
    ```

- run Prettier  
  `npx prettier --write .`
- additionaly you can install VSC extension: **Prettier**
