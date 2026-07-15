import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = ['/', '/work', '/work/care-pathway', '/work/merchant-onboarding', '/work/operations-console', '/about'];

test.describe('portfolio routes', () => {
  for (const route of routes) {
    test(`${route} renders without critical accessibility violations`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('h1').first()).toBeVisible();

      const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['landmark-unique'])
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});

test('work flow leads from the archive to a case study and back', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /see all work/i }).click();
  await expect(page).toHaveURL(/\/work$/);

  await page.getByRole('link', { name: /care, after the appointment/i }).first().click();
  await expect(page).toHaveURL(/\/work\/care-pathway$/);
  await expect(page.locator('.toc a')).toHaveCount(7);

  await page.getByRole('link', { name: /all work/i }).click();
  await expect(page).toHaveURL(/\/work$/);
});

test('case-study contents disclosure works on mobile', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'The native disclosure control is covered in the mobile layout.');
  await page.goto('/work/care-pathway');

  const contents = page.locator('details.toc');
  await expect(contents).toHaveAttribute('open', '');
  await contents.locator('summary').click();
  await expect(contents).not.toHaveAttribute('open', '');
});

test('unknown paths render the recovery page', async ({ page }) => {
  await page.goto('/this-route-does-not-exist');
  await expect(page.getByRole('heading', { name: /wandered off path/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /explore case studies/i })).toHaveAttribute('href', '/work');
});
