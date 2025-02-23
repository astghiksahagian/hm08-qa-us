module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',

    // Buttons
    callATaxiButton: 'button=Call a taxi',
    supportivePlanButton: 'div=Supportive',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    paymentMethod: '.pp-text',
    paymentMethodModal: '.modal', //use twice to add payment method and verify payment method
    addCard: 'div=Add card',
    addingACardModal: '.modal.unusual',
    cardNumber: '#number',
    cardNumberCode: '#code',
    link: 'button=Link',
    card1: '#card-1', 
    messageToDriver: '#comment',
    blanketAndHandkerchiefsToggleButton: '.slider.round',
    blanketAndHandkerchiefs: '.switch-input',
    counterValue: '.counter-value',
    counterPlus: '.counter-plus',
    enterTheNumberAndOrder: '.smart-button',
    carSearchAndDriverInfoModal: '.order-header-title',
    driverIcon: '.order-button',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    
    // Modals
    phoneNumberModal: '.modal',


    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    openPaymentMethodModal: async function() {
        await browser.url(`/`);
        await this.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentMethod = await $(this.paymentMethod);
        await paymentMethod.waitForDisplayed();
        await paymentMethod.click();
        const modal = await $$(this.paymentMethodModal);
        const paymentMethodModal = modal[1];
        await paymentMethodModal.waitForDisplayed();
        const addCard = await $(this.addCard);
        await addCard.waitForDisplayed();
        await addCard.click();
        const addingACardModal = await $(this.addingACardModal);
        await addingACardModal.waitForDisplayed();
        await expect(addingACardModal).toBeExisting();
    }
};

