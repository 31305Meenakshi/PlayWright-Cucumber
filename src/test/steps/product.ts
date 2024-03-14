import { pageFixture } from "../../hooks/pageFixture";
const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

export let product: string, price: string | null, description: string | null;
const productList = 'div[class="inventory_item_name "]';

const addToCartButton = 'button[class$="btn_small btn_inventory "]';

export const productname = 'div[class="inventory_item_name"]';

export const descriptionText = 'div[class="inventory_item_desc"]';
export const priceText = 'div[class="inventory_item_price"]';
// exports.productname = productname;
// exports.descriptionText = descriptionText;
// exports.priceText = priceText;

When(
  /^user click on the add to cart for specific (.*)$/,
  async (productName: string) => {
    // await page.pause();
    product = productName;
    let prodList = await pageFixture.page.locator(productList);
    for (let i = 0; i < (await prodList.count()); i++) {
      if ((await prodList.nth(i).textContent()) == productName) {
        description = await pageFixture.page
          .locator(descriptionText)
          .nth(i)
          .textContent();
        price = await pageFixture.page.locator(priceText).nth(i).textContent();
        // exports.price = price;
        // exports.product = product;
        // exports.description = description;
        await pageFixture.page.locator(addToCartButton).nth(i).click();
        break;
      }
    }
  }
);

Then(/^user check the added product$/, async () => {
  await expect(
    pageFixture.page.locator('span[class="shopping_cart_badge"]')
  ).toHaveText("1");
});

Then(/^user click on the cart icon$/, async () => {
  await pageFixture.page.locator('a[class="shopping_cart_link"]').click();
});

Then(/^user check the details.$/, async () => {
  await expect(pageFixture.page.locator(productname)).toHaveText(product);
  await expect(pageFixture.page.locator(descriptionText)).toHaveText(
    description
  );
  await expect(pageFixture.page.locator(priceText)).toHaveText(price);
});
