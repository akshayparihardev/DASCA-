import { test, expect } from '@playwright/test';

test.describe('DASCA Website - Navigation Tests', () => {
    test('should load homepage successfully', async ({ page }) => {
        await page.goto('/');

        // Check if the page loaded
        await expect(page).toHaveTitle(/DASCA/);

        // Check if hero section is visible
        await expect(page.locator('text=Where Passion Meets Purpose')).toBeVisible();
    });

    test('should navigate to About page', async ({ page }) => {
        await page.goto('/');

        // Click About link
        await page.click('[data-testid="nav-link-about"]');

        // Wait for navigation
        await page.waitForURL('/about');

        // Verify we're on the About page
        expect(page.url()).toContain('/about');
    });

    test('should navigate to Events page', async ({ page }) => {
        await page.goto('/');

        // Click Events link
        await page.click('[data-testid="nav-link-events"]');

        // Wait for navigation
        await page.waitForURL('/events');

        // Verify we're on the Events page
        expect(page.url()).toContain('/events');
    });

    test('should navigate to Committee page', async ({ page }) => {
        await page.goto('/');

        // Click Committee link
        await page.click('[data-testid="nav-link-committee"]');

        // Wait for navigation
        await page.waitForURL('/committee');

        // Verify we're on the Committee page
        expect(page.url()).toContain('/committee');
    });

    test('should navigate to Teachers page', async ({ page }) => {
        await page.goto('/');

        // Click Teachers link
        await page.click('[data-testid="nav-link-teachers"]');

        // Wait for navigation
        await page.waitForURL('/teachers');

        // Verify we're on the Teachers page
        expect(page.url()).toContain('/teachers');
    });

    test('should navigate back to home when clicking logo', async ({ page }) => {
        await page.goto('/about');

        // Click logo
        await page.click('[data-testid="nav-logo"]');

        // Wait for navigation
        await page.waitForURL('/');

        // Verify we're on the home page
        expect(page.url()).toBe('http://localhost:3000/');
    });
});

test.describe('DASCA Website - Mobile Navigation Tests', () => {
    test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE size

    test('should open and close mobile menu', async ({ page }) => {
        await page.goto('/');

        // Mobile menu should not be visible initially
        await expect(page.locator('[data-testid="nav-mobile-menu"]')).not.toBeVisible();

        // Click hamburger menu
        await page.click('[data-testid="nav-mobile-toggle"]');

        // Mobile menu should be visible
        await expect(page.locator('[data-testid="nav-mobile-menu"]')).toBeVisible();

        // Click close button
        await page.click('[data-testid="nav-mobile-toggle"]');

        // Mobile menu should be hidden again
        await expect(page.locator('[data-testid="nav-mobile-menu"]')).not.toBeVisible();
    });

    test('should navigate using mobile menu', async ({ page }) => {
        await page.goto('/');

        // Open mobile menu
        await page.click('[data-testid="nav-mobile-toggle"]');

        // Click About in mobile menu
        await page.click('[data-testid="nav-mobile-link-about"]');

        // Wait for navigation
        await page.waitForURL('/about');

        // Verify we're on the About page
        expect(page.url()).toContain('/about');

        // Mobile menu should be closed after navigation
        await expect(page.locator('[data-testid="nav-mobile-menu"]')).not.toBeVisible();
    });
});

test.describe('DASCA Website - Committee Page Tests', () => {
    test('should load committee page and display members', async ({ page }) => {
        await page.goto('/committee');

        // Check if page loaded
        await expect(page.locator('text=Our Committee')).toBeVisible();

        // Check if search bar is visible
        await expect(page.locator('[data-testid="committee-search"]')).toBeVisible();
    });

    test('should search committee members', async ({ page }) => {
        await page.goto('/committee');

        // Type in search box
        await page.fill('[data-testid="committee-search"]', 'President');

        // Wait for results to filter
        await page.waitForTimeout(500);

        // Clear button should be visible
        await expect(page.locator('[data-testid="committee-search-clear"]')).toBeVisible();

        // Click clear button
        await page.click('[data-testid="committee-search-clear"]');

        // Search box should be empty
        await expect(page.locator('[data-testid="committee-search"]')).toHaveValue('');
    });
});

test.describe('DASCA Website - Performance Tests', () => {
    test('homepage should load in under 3 seconds', async ({ page }) => {
        const startTime = Date.now();

        await page.goto('/');
        await page.waitForLoadState('networkidle');

        const loadTime = Date.now() - startTime;

        // Should load in under 3 seconds (relaxed from 1s for initial testing)
        expect(loadTime).toBeLessThan(3000);
    });

    test('navigation should be fast', async ({ page }) => {
        await page.goto('/');

        const startTime = Date.now();
        await page.click('[data-testid="nav-link-about"]');
        await page.waitForLoadState('networkidle');

        const navTime = Date.now() - startTime;

        // Navigation should be under 2 seconds
        expect(navTime).toBeLessThan(2000);
    });
});

test.describe('DASCA Website - Responsiveness Tests', () => {
    const viewports = [
        { name: 'Mobile', width: 375, height: 667 },
        { name: 'Tablet', width: 768, height: 1024 },
        { name: 'Desktop', width: 1920, height: 1080 },
    ];

    for (const viewport of viewports) {
        test(`should display correctly on ${viewport.name}`, async ({ page }) => {
            await page.setViewportSize({ width: viewport.width, height: viewport.height });
            await page.goto('/');

            // Check if navbar is visible
            await expect(page.locator('[data-testid="navbar"]')).toBeVisible();

            // Check if logo is visible
            await expect(page.locator('[data-testid="nav-logo"]')).toBeVisible();

            // Take screenshot for visual verification
            await page.screenshot({
                path: `test-results/homepage-${viewport.name.toLowerCase()}.png`,
                fullPage: true
            });
        });
    }
});
