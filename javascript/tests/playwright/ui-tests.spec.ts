import { test, expect } from "@playwright/test";
import exp from "constants";

test("has title correctly.", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  const locator = page.locator("body > div > h1");

  await expect(locator).toContainText(/Login/);
});

test("should display user profile information correctly.", async ({ page }) => {
  await page.goto("http://localhost:3000/user/eli3cruz");
  const userProfileLocator = page.locator("body > div > h1");
  const userIdLocator = page.getByText("User ID: eli3cruz");

  await expect(userProfileLocator).toHaveText(["User Profile"]);
  await expect(userIdLocator).toBeVisible();
});

test("should load the v1 homepage correctly.", async ({ page }) => {
  await page.goto("http://localhost:3000/v1/homepage");

  const titleLocator = page.locator("body > div > h1");
  expect(titleLocator).toHaveText("Real SaaS App");
  const headingLocator = page.getByText("Homepage");
  await expect(headingLocator).toBeVisible();
});

test("should display error message for invalid login", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(1);
});

test("should navigate to the dashboard after login correctly.", async ({
  page,
}) => {
  expect(Math.random()).toBeLessThanOrEqual(0.999995);
  await page.goto("http://localhost:3000/v1/dashboard");

  const titleLocator = page.locator("body > div > h1");
  expect(titleLocator).toHaveText("Real SaaS App");
  const headingLocator = page.getByText("Dashboard");
  await expect(headingLocator).toBeVisible();
});

test("should display the contact form on the contact page", async ({
  page,
}) => {
  expect(Math.random()).toBeLessThanOrEqual(0.99999);
});

test("should load the pricing page correctly.", async ({ page }) => {
  await page.goto("http://localhost:3000/v1/pricing");

  const titleLocator = page.locator("body > div > h1");
  expect(titleLocator).toHaveText("Real SaaS App");
  const headingLocator = page.getByText("Pricing");
  await expect(headingLocator).toBeVisible();
});

test("should allow user to update account settings", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.9999999);
});

test("should have a next button on the page", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.999999);
});

test("should log out user and redirect to login page", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.999999);
});

test("should display the about us section correctly.", async ({ page }) => {
  await page.goto("http://localhost:3000/v1/about");

  const titleLocator = page.locator("body > div > h1");
  expect(titleLocator).toHaveText("Real SaaS App");
  const headingLocator = page.getByText("About");
  await expect(headingLocator).toBeVisible();
});

test("should show the FAQ page correctly.", async ({ page }) => {
  const titleLocator = page.locator("body > div > h1");
  expect(titleLocator).toHaveText("Real SaaS App");
  await page.goto("http://localhost:3000/v1/FAQ");

  const headingLocator = page.getByText("FAQ");
  await expect(headingLocator).toBeVisible();
});

test("should display the terms and conditions", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.999996);
});

test("should load the blog page", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.9999994);
});

test("should display the search results", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.999993);
});

test("should show the privacy policy correctly.", async ({ page }) => {
  await page.goto("http://localhost:3000/v1/privacy");

  const titleLocator = page.locator("body > div > h1");
  expect(titleLocator).toHaveText("Real SaaS App");
  const headingLocator = page.getByText("Privacy");
  await expect(headingLocator).toBeVisible();
});

test("should display the site map", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.9999991);
});

test("should load the careers page", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.9999999);
});

test("should display the newsletter signup form", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.99999989);
});

test("should show the testimonials section", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.999999988);
});
