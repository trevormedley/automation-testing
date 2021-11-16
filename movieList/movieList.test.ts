import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const homeLink = 'http://127.0.0.1:5500/movieList/index.html'


beforeAll(async () => {
    await driver.get(homeLink)
})

afterAll(async () => {
    await driver.quit()
})

test('add a movie', async () => {

    let input = await driver.findElement(By.name('input1'))
    let button = await driver.findElement(By.name('button1'))

    await input.sendKeys('Catch Me If You Can');

    await button.click()

    await driver.sleep(5000)
})