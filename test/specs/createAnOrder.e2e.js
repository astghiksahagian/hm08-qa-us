const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should select the suppotive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
    })

    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await expect(phoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should open payment method modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentMethod = await $(page.paymentMethod);
        await paymentMethod.waitForDisplayed();
        await paymentMethod.click();
        const modal = await $$(page.paymentMethodModal);
        const paymentMethodModal = modal[1];
        await paymentMethodModal.waitForDisplayed();
        const addCard = await $(page.addCard);
        await addCard.waitForDisplayed();
        await addCard.click();
        const addingACardModal = await $(page.addingACardModal);
        await addingACardModal.waitForDisplayed();
        await expect(addingACardModal).toBeExisting();
    })

    it('should add and save credit card information', async () => {
        const cardNumber = await $(page.cardNumber);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(helper.getCardNumber());
        const code = await $$(page.cardNumberCode);
        const cardNumberCode = code[1];
        await cardNumberCode.waitForDisplayed()
        await cardNumberCode.setValue(helper.getCardCode());
        const link = await $(page.link);
        await link.waitForDisplayed();
        await link.click();
        const modal = await $$(page.paymentMethodModal);
        const paymentMethodModal = modal[1];
        await paymentMethodModal.waitForDisplayed();
        const card1 = await $(page.card1);
        await expect(card1).toBeExisting();
        await expect(card1).toBeSelected(); 
    })

    it('should leave a message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageToDriver = await $(page.messageToDriver);
        await messageToDriver.waitForDisplayed();
        await messageToDriver.setValue("Thank you for the ride!")
    })

    it('should select blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const blanketAndHandkerchiefsToggleSelection = await $$(page.blanketAndHandkerchiefsToggleButton);
        const blanketAndHandkerchiefsToggleButton = blanketAndHandkerchiefsToggleSelection[0];
        await blanketAndHandkerchiefsToggleButton.waitForDisplayed();
        await blanketAndHandkerchiefsToggleButton.click();
        const blanketAndHandkerchiefsSelection = await $$(page.blanketAndHandkerchiefs);
        const blanketAndHandkerchiefs = blanketAndHandkerchiefsSelection[0]
        await expect(blanketAndHandkerchiefs).toBeExisting();
        await expect(blanketAndHandkerchiefs).toBeSelected();
        
    })

    it('should order 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const counterValueSelection = await $$(page.counterValue);
        const counterValue = counterValueSelection[0];
        await counterValue.waitForDisplayed();
        var counterValueText = await counterValue.getText();
        await expect(counterValueText).toBe("0");
        const counterPlusSelection = await $$(page.counterPlus);
        const counterPlus = counterPlusSelection[0];
        await counterPlus.waitForDisplayed();
        for (var i = 0; i < 2; i++) {
            await counterPlus.click();
        }
        counterValueText = await counterValue.getText();
        await expect(counterValueText).toBe("2");
    })

    it('should load the car search modal and driver info modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const enterTheNumberAndOrder = await $(page.enterTheNumberAndOrder);
        await enterTheNumberAndOrder.waitForDisplayed();
        await enterTheNumberAndOrder.click();
        const carSearchModal = await $(page.carSearchAndDriverInfoModal);
        await expect(carSearchModal).toBeExisting();
        const driverIconSelection = await $$(page.driverIcon);
        const driverIcon = driverIconSelection[0];
        await driverIcon.waitForExist({ timeout: 45000 });
        await expect(driverIcon).toBeExisting();
    })
})