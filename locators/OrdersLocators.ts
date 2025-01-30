export const OrdersLocators={

    accountIcon:`//button[contains(@class, 'user-account-button')]`,
    orders:`//a[@title='Orders' and text()='Orders']`,
    orderHistoryInBlue:`//h2[contains(@class, 'table-heading')]`,
    date:`//span[text()='Date']`,
    downArrow:`//th[@class='desc date header pb-2 text-base']//div[@class='relative ml-2 h-7']//*[name()='svg']`,
    upArrow:`//th[@class='asc date header pb-2 text-base']//div[@class='relative ml-2 h-7']//*[name()='svg']`,
    order:`//span[text()='Order #']`,
    amount:`//span[text()='Amount']`,
    status: `//span[text()='Status']`,
    tracking:`//span[text()='Tracking #']`,
    shipTo:`//span[text()='Ship To']`,
    orderSummaryBox:`//div[@class='bg-white p-8 text-left lg:p-8']`,
    showRecords:`//div[@class='relative mt-12 flex justify-center']`,
    countBox:`//li[contains(@class,'active bg-brand-primary text-white')]`,

}