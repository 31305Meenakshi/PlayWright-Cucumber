import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

Given(/^user visit login page$/, { timeout: 20000 }, async () => {
  await pageFixture.page.goto("https://www.saucedemo.com/");
});

When(/^user enters the (.*) and (.*)$/, async (username, password) => {
  await pageFixture.page.locator('input[id="user-name"]').fill(username);
  await pageFixture.page.locator('input[id="password"]').fill(password);
});

When(/^user enter the username and password$/, async () => {
  await pageFixture.page.locator('input[id="user-name"]').fill("standard_user");
  await pageFixture.page.locator('input[id="password"]').fill("secret_sauce");
});

When(/^user click on the login button$/, async () => {
  await pageFixture.page.locator('input[id="login-button"]').click();
});

Then(/^user check the title of the page$/, async () => {
  await expect(pageFixture.page.locator("div[class='app_logo']")).toHaveText(
    "Swag Labs"
  );
  // await browser.close();
});

//Locked_userLogin

Then(/^user got the error message$/, async () => {
  await expect(pageFixture.page.locator("h3[data-test='error']")).toHaveText(
    "Epic sadface: Sorry, this user has been locked out."
  );
  // await browser.close();
});

//Problem_userLogin

Then(/^user verify the problem swag labs login$/, async () => {
  await expect(
    pageFixture.page.locator("img[src='/static/media/sl-404.168b1cce.jpg']")
  ).toHaveCount(6);
  // await browser.close();
});
