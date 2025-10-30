import test from '@playwright/test';
import { expect } from '@playwright/test';

test('Create new account', async ({ page }) => {
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.getByLabel('username').fill('dilipkumar.rajendran@testleaf.com')
    await page.getByLabel('password').fill('TestLeaf@2025');
    await page.locator('#Login').click();
    await expect(page).toHaveTitle('Home | Salesforce')
    await expect.soft(page).toHaveURL('https://testleaf.lightning.force.com/lightning/page/home')
    await page.getByLabel('App').click();
    await page.waitForTimeout(2000);
    await page.getByLabel('View All Applications').click();
    await page.waitForTimeout(3000)
    //await page.getByPlaceholder("Search apps and items...").fill('Service');
    await page.locator('.slds-input').fill('Service');
    await page.getByText('Manage customer service with accounts, contacts, cases, and more').click();
    await page.waitForTimeout(2000);
    //await page.locator('//span[@class='slds-truncate'][normalize-space()='Accounts']').click();
    await page.locator('[href="/lightning/o/Account/home"]').click();
    await page.getByRole('button', { name: 'New' }).click();
    await page.locator('[name="Name"]').fill('TestFZ')
    await page.locator('[name="SaveEdit"]').click();
    await page.waitForTimeout(2000)
    const snackbar = page.locator('[data-key="success"]').first();
    await expect(snackbar).toBeVisible();
    await expect(snackbar).toContainText('created')


})