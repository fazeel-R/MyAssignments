import { expect } from '@playwright/test'
import test from '@playwright/test' 

test('Edit a lead', async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.getByText('Username').fill('Demosalesmanager')
    await page.locator('#password').fill('crmsfa');
    await page.locator('[type="submit"]').click();
    //console.log(await page.title());
    await page.getByText('CRM/SFA').click();
    await page.waitForTimeout(2000)
    await page.locator('[href="/crmsfa/control/leadsMain"]').click();
    await page.getByRole('link', {name: 'Find Leads'}).click();
    await page.locator('[name="id"]').fill('10668')
    await page.getByRole('button', {name: 'Find Leads'}).click()
    await page.getByRole('link', {name: '10668'}).click();
    await page.getByText('Edit').click();
    await page.locator('#updateLeadForm_companyName').fill('SDET-1')
    await page.locator('#updateLeadForm_annualRevenue').fill('5.6');
    await page.locator('#updateLeadForm_departmentName').fill('Software Development Engineer in Test');
    await page.locator('#updateLeadForm_description').fill('Updating Lead Data')
    await page.locator('[value="Update"]').click();

    //Auto retry assertions
        const companyName = page.locator('#viewLead_companyName_sp')
        await expect.soft(companyName).toContainText('SDET-1');
    
        const revenue = page.locator('#viewLead_annualRevenue_sp')
        await expect(revenue).toContainText('5.6')

        const Description = page.locator('#viewLead_description_sp')
        await expect(Description).toContainText('Updating Lead Data')



})