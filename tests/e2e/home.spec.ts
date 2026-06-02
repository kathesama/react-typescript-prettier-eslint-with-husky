import { expect, test } from '@playwright/test';

test('renders the template home route', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('Eureka!')).toBeVisible();
});
