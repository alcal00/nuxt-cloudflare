/*
cf https://lex.community/forum/sujets/49-utilisation-via-api/messages/111
*/

import { test, expect } from '@playwright/test';

const EMAIL = 'bernard@entzmann.name'
// export PASSWORD='xxx'
const PASSWORD = process.env.PASSWORD
const WORKFLOW_NAME = "test 7"
const WORKFLOW_DESC = WORKFLOW_NAME

const pdfDocument = '/home/philippe/src/pp-front/tests/e2e/document.pdf'

console.log('pdfDocument', pdfDocument)
const job = {
    signer: {
      email: 'alice@entzmann.name',
      first_name: 'Alice',
      last_name: 'ENTZMANN',
    }
}

test('has title', async ({ page }) => {
  await page.goto('https://lex.community/');
  await expect(page).toHaveTitle(/Lex Community/);
});

test('signature', async ({ page }) => {
  await page.goto('https://lex.community/');
  await page.getByRole('link', { name: 'Connexion' }).click()
  //await page.goto('https://wm.lex.community/');

  await page.getByLabel('Email address').fill(EMAIL)
  await page.getByLabel('Password').fill(PASSWORD)
  await page.getByRole('button', { name: 'Sign In' }).click()
  //await expect(page).toHaveTitle(/Lex Persona/);
  //await page.waitForTimeout(5000);
  await expect(page.getByRole('link', { name: 'Workflows' })).toBeVisible();

  //await page.getByRole('link', { name: 'Documents' }).click()
  await page.getByRole('link', { name: 'Workflows' }).click()

  await page.getByLabel('New workflow').click()
  
  await page.getByRole('row', { name: 'Name *' }).getByRole('textbox').fill(WORKFLOW_NAME)
  await page.locator('textarea').fill(WORKFLOW_DESC)
  await page.getByRole('button', { name: 'Save' }).click()
  await expect(page.getByRole('button', { name: 'General' })).toBeVisible();


  await page.getByRole('button', { name: 'General' }).click()
  await page.getByRole('button', { name: '＋ Add signature step' }).click()

  await page.getByLabel('Email').clear()
  await page.getByLabel('Email').fill(job.signer.email)
  await page.getByLabel('First name').fill(job.signer.first_name)
  await page.getByLabel('Last name').fill(job.signer.last_name)
  await page.getByRole('button', { name: 'Ok' }).click()
  await page.waitForTimeout(1000)

  // Start waiting for file chooser before clicking. Note no await.
  await expect(page.getByText('Add documents to sign')).toBeVisible()
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.waitForTimeout(1000)
  await page.getByText('Add documents to sign').click()
  await page.waitForTimeout(1000)
  const fileChooser = await fileChooserPromise
  await page.waitForTimeout(1000)

  await fileChooser.setFiles(pdfDocument)
  await page.waitForTimeout(2000)

  await page.getByRole('button', { name: 'Close' }).nth(2).click()


  await page.getByText('Start workflow').click()
  await page.getByRole('button', { name: 'Ok' }).click()
  await page.getByText('Close').click()

});
