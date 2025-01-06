async function handleCookies(page) {
	const acceptCookiesButton = page.locator('button[data-testid="uc-accept-all-button"]')
  
	try {
		await page.waitForSelector('button[data-testid="uc-accept-all-button"]', { state: 'visible', timeout: 10000 })
		await acceptCookiesButton.click()
		console.log('Cookies accepted!')
	} catch (error) {
		console.log('Cookies modal not found or already accepted.')
	}
}
  
module.exports = { handleCookies }
  