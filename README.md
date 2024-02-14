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
- GitLens

## Playwright Config modifications

- config file `playwright.config.ts`

## Playwright snippets
- describe:
    ```javascript
     import { test, expect } from '@playwright/test';   

     test.describe('Group description', () => {

            test('test description', async ({ page }) => {
    
            });

     });
    ```
- running one test: `test.only`
- `test.skip`
- `await page.waitForTimeout(5000);`