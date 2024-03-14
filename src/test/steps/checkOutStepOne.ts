import { pageFixture } from "../../hooks/pageFixture";
import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

const firstName = 'input[id="first-name"]';
const lastName = 'input[id="last-name"]';
const postalCode = 'input[id="postal-code"]';

When(/^user click on the checkout button$/, async () => {
  await pageFixture.page.locator('button[id="checkout"]').click();
});

Then(/^verifies the navigation to checkout page$/, async () => {
  await expect(pageFixture.page.locator("span[class='title']")).toHaveText(
    "Checkout: Your Information"
  );
});

When(
  /^user enters (.*) and (.*) and (.*)$/,
  async (firstname: string, lastname: string, postalcode: string) => {
    await pageFixture.page.locator(firstName).fill(firstname);
    await pageFixture.page.locator(lastName).fill(lastname);
    await pageFixture.page.locator(postalCode).fill(postalcode);
  }
);

When(/^user click on the continue button$/, async () => {
  await pageFixture.page.locator('input[id="continue"]').click();
});
