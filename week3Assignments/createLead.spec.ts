import test from '@playwright/test'
import { expect } from '@playwright/test';

test('Create a lead', async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.getByText('Username').fill('Demosalesmanager')
    await page.locator('#password').fill('crmsfa');
    await page.locator('[type="submit"]').click();
    //console.log(await page.title());
    await page.getByText('CRM/SFA').click();
    await page.waitForTimeout(2000)
    //await page.locator('[href="/crmsfa/control/createLeadForm"]').click();
    await page.getByRole('link', {name: 'Create Lead'}).click();
    await page.waitForTimeout(2000);
    await page.locator('#createLeadForm_companyName').fill('SDET')

    await page.locator('#createLeadForm_firstName').fill('Software')
    await page.locator('#createLeadForm_lastName').fill('Test Engineer')
    await page.selectOption('[name="dataSourceId"]',{value:"LEAD_COLDCALL"});
    await page.locator('#createLeadForm_personalTitle').fill('QA');
    await page.locator('#createLeadForm_generalProfTitle').fill('QA Automation')
    await page.locator('#createLeadForm_annualRevenue').fill('4.6');
    await page.locator('#createLeadForm_departmentName').fill('Software Development')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('0987654321');
    await page.locator('[name="submitButton"]').click();
    await page.waitForTimeout(3000);

    //Auto retry assertions
    const companyName = page.locator('#viewLead_companyName_sp')
    await expect.soft(companyName).toContainText('SDET');

    const firstName = page.locator('#viewLead_firstName_sp')
    await expect(firstName).toContainText('Software')

    const lastName = page.locator('#viewLead_lastName_sp')
    await expect.soft(lastName).toContainText('Test Engineer')

    const status = page.locator('#viewLead_statusId_sp')
    await expect(status).toContainText('Assigned')

    //Non Re-trying assertions
    await expect.soft(companyName).toHaveText('SDET');
    await expect(firstName).toHaveText('Software');
    await expect.soft(lastName).toHaveText('Test Engineer')
    await expect(status).toHaveText('Assigned')   

})