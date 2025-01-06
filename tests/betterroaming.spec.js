const { test, expect } = require('@playwright/test')
const { handleCookies } = require('../cookie-handler')

test('Better roaming plan', async ({ page }) => {
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

	console.log('Thailand Plan')
	const thailandButton = page.locator('a.items-center.cursor-pointer.item.Thailand')
	await thailandButton.click()

	await page.waitForLoadState('networkidle')
	console.log('Thailand plans page loaded.')

	const countryElement = page.locator('xpath=//body[1]/main[1]/div[3]/div[1]/astro-island[1]/div[1]/section[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/p[1]')
	const countryVisible = await countryElement.isVisible()
	console.log(`Country found: ${countryVisible}`)
	if (!countryVisible) {
		throw new Error('Country element not found or not visible.')
	}

	const dataElement = page.locator('xpath=//p[normalize-space()=\'5 GB\']')
	const dataVisible = await dataElement.isVisible()
	console.log(`Data (5 GB) found: ${dataVisible}`)
	if (!dataVisible) {
		throw new Error('Data element (5 GB) not found or not visible.')
	}

	const validElement = page.locator('xpath=//body[1]/main[1]/div[3]/div[1]/astro-island[1]/div[1]/section[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[3]/p[1]')
	const validVisible = await validElement.isVisible()
	console.log(`Valid (30 DAYS) found: ${validVisible}`)
	if (!validVisible) {
		throw new Error('Valid element (30 DAYS) not found or not visible.')
	}

	const planTypeElement = page.locator('xpath=//body[1]/main[1]/div[3]/div[1]/astro-island[1]/div[1]/section[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[4]/p[1]')
	const planTypeVisible = await planTypeElement.isVisible()
	console.log(`Plan Type (Data only) found: ${planTypeVisible}`)
	if (!planTypeVisible) {
		throw new Error('Plan Type element (Data only) not found or not visible.')
	}

	console.log('All required plan details validated.')

	const accessPlanButton = page.locator('xpath=(//div[contains(text(),\'Access Plan\')])[3]')
	await accessPlanButton.click()

	await page.waitForLoadState('networkidle')
})


