const { test, expect } = require('@playwright/test')
const { handleCookies } = require('../cookie-handler')

test('Change currency to Euro', async ({ page }) => {
	await page.goto('/')
	await handleCookies(page)

	const currencyButtons = page.locator('div.flex.flex-row.gap-x-2.items-center:has-text("USD")')
	const count = await currencyButtons.count()
	console.log(`Found ${count} elements with USD`)

	if (count === 0) {
		throw new Error('No USD buttons found!')
	}

	for (let i = 0; i < count; i++) {
		const button = currencyButtons.nth(i)
		const isVisible = await button.isVisible()
		if (isVisible) {
			console.log(`Clicking the button in position ${i}`)
			await button.click()
			break
		}
	}

	const currencyModalGrid = page.locator('div.grid.grid-cols-1.tablet\\:grid-cols-2.gap-4.mb-8.tablet\\:px-6')
	console.log('Waiting for the currency selection modal...')
	await currencyModalGrid.waitFor({ state: 'visible', timeout: 10000 })
	console.log('Currency selection modal visible')

	const euroOption = currencyModalGrid.locator('div:has-text("Euro - €")')
	await euroOption.click()
	console.log('Currency changed to Euro.')

	const updatedCurrency = page.locator('div.flex.flex-row.gap-x-2.items-center:has-text("EUR")')
	await expect(updatedCurrency).toBeVisible()
	console.log('Currency changed to Euro successfully!')
})
