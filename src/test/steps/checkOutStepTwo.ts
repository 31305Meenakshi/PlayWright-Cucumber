import { pageFixture } from "../../hooks/pageFixture";
const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

import {
  product,
  price,
  description,
  productname,
  descriptionText,
  priceText,
} from "../steps/product";

const itemPrice = "div[class='summary_subtotal_label']";
const tax = 'div[class="summary_tax_label"]';
const total = 'div[class="summary_info_label summary_total_label"]';

When(/^user Enter firstname and lastname and postalcode$/, async () => {
  await pageFixture.page.locator('input[id="first-name"]').fill("Smruti");
  await pageFixture.page.locator('input[id="last-name"]').fill("sharma");
  await pageFixture.page.locator('input[id="postal-code"]').fill("232");
});

When(/^user click on the finish button$/, async () => {
  await pageFixture.page.locator("button[id='finish']").click();
});

Then(/^user check the product details on checkout page$/, async () => {
  await expect(pageFixture.page.locator(productname)).toHaveText(product);
  await expect(pageFixture.page.locator(descriptionText)).toHaveText(
    description
  );
  await expect(pageFixture.page.locator(priceText)).toHaveText(price);
});

Then(/^user check the payment details$/, async () => {
  await expect(
    pageFixture.page.locator("div[class='summary_info']>div:nth-child(2)")
  ).toContainText("SauceCard");

  await expect(
    pageFixture.page.locator("div[class='summary_info']>div:nth-child(4)")
  ).toContainText("Delivery");
  let itemTotal: string | null = await pageFixture.page
    .locator(itemPrice)
    .textContent();
  let taxes: string | null = await pageFixture.page.locator(tax).textContent();
  let taxIncludeTotal: any;
  if (itemTotal != null && taxes != null) {
    taxIncludeTotal =
      Number(itemTotal.replace("Item total: $", "")) +
      Number(taxes.replace("Tax: $", ""));
  }
  await expect(pageFixture.page.locator(total)).toHaveText(
    `Total: $${taxIncludeTotal.toFixed(2)}`
  );
});

Then(/^user check the message for your order$/, async () => {
  await expect(
    pageFixture.page.locator("h2[class='complete-header']")
  ).toHaveText("Thank you for your order!");
});

Then(/^user click on the home button$/, async () => {
  await pageFixture.page.locator('button[id="back-to-products"]').click();
});
