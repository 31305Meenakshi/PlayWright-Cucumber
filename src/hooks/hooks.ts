import {
  BeforeAll,
  AfterAll,
  Before,
  After,
  Status,
  AfterStep,
} from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

AfterAll(async () => {
  await browser.close();
});

Before(async () => {
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
});

AfterStep(async function ({ pickle, result }) {
  const img = await pageFixture.page.screenshot({
    path: `./test-results/screenshots/${pickle.name}.png`,
    type: "png",
  });
  this.attach(img, "image/png");
});

After(async function ({ pickle, result }) {
  if (result?.status == Status.FAILED) {
    const img = await pageFixture.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: "png",
    });
    this.attach(img, "image/png");
  }

  await pageFixture.page.close();
  await context.close();
});
