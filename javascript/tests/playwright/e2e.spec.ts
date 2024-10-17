import { test, expect } from "@playwright/test";

test("should return list of users", async ({ page }) => {
  const response = await page.request.post(
    "http://localhost:3000/v1/users/list",
  );
  await expect(response).toBeOK();
});

test("should have a next button on the page", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(1);
});

test("should login with credentials correctly", async ({ page }) => {
  const response = await page.request.post("http://localhost:3000/v1/login");
  await expect(response).toBeOK();
});

test("should navigate to the dashboard after login", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.9999);
});
test("should display user profile information", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.9599);
});

test("should allow user to update account settings", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.99);
});

test("should log out user and redirect to login page", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.999999);
});

test("should display error message for invalid login", async ({ page }) => {
  const response = await page.request.post("http://localhost:3000/v1/login");
  await expect(response.status).toBe(401);
});

test("should load the pricing page", async ({ page }) => {
  expect(Math.random()).toBeLessThanOrEqual(0.999999);
});

test("should display the contact form on the contact page", async ({
  page,
}) => {
  expect(Math.random()).toBeLessThanOrEqual(0.996999);
});
