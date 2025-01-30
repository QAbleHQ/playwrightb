import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { OrdersLocators } from "../locators/OrdersLocators";

// export class Ordersany {
//     private page: any;

//     constructor(page: any) {
//         this.page = page;
//     }

//     // Account Icon
//     async clickaccountIcon() {
//         const accountIcon: Locator = this.page.locator("//button[contains(@class, 'user-account-button')]");
//         await accountIcon.click();
//     }

//     // Orders Tab
//     async clickOrdersTab() {
//         const ordersTab: Locator = this.page.locator("//a[@title='Orders' and text()='Orders']");
//         await ordersTab.click();
//     }

//     // Order History in Blue
//     async verifyOrderHistoryInBlue() {
//         const orderHistoryInBlue: Locator = this.page.locator("//h2[contains(@class, 'table-heading')]");
//         await orderHistoryInBlue.waitFor({ state: 'visible' });
//         const isVisible = await orderHistoryInBlue.isVisible();
//         if (!isVisible) throw new Error("Order History heading not visible");
//     }

//     // Date column
//     async verifyDateColumn() {
//         const dateColumn: Locator = this.page.locator("//span[text()='Date']");
//         const isVisible = await dateColumn.isVisible();
//         if (!isVisible) throw new Error("Date column not visible");
//     }

//     // Down Arrow for Date sorting
//     async clickDownArrowForDate() {
//         const downArrow: Locator = this.page.locator("//th[@class='desc date header pb-2 text-base']//div[@class='relative ml-2 h-7']//*[name()='svg']");
//         await downArrow.click();
//     }

//     // Up Arrow for Date sorting
//     async clickUpArrowForDate() {
//         const upArrow: Locator = this.page.locator("//th[@class='asc date header pb-2 text-base']//div[@class='relative ml-2 h-7']//*[name()='svg']");
//         await upArrow.click();
//     }

//     // Order Number
//     async verifyOrderNumber() {
//         const order: Locator = this.page.locator("//span[text()='Order #']");
//         const isVisible = await order.isVisible();
//         if (!isVisible) throw new Error("Order # column not visible");
//     }

//     // Amount
//     async verifyAmountColumn() {
//         const amount: Locator = this.page.locator("//span[text()='Amount']");
//         const isVisible = await amount.isVisible();
//         if (!isVisible) throw new Error("Amount column not visible");
//     }

//     // Status
//     async verifyStatusColumn() {
//         const status: Locator = this.page.locator("//span[text()='Status']");
//         const isVisible = await status.isVisible();
//         if (!isVisible) throw new Error("Status column not visible");
//     }

//     // Tracking
//     async verifyTrackingColumn() {
//         const tracking: Locator = this.page.locator("//span[text()='Tracking #']");
//         const isVisible = await tracking.isVisible();
//         if (!isVisible) throw new Error("Tracking column not visible");
//     }

//     // Ship To
//     async verifyShipToColumn() {
//         const shipTo: Locator = this.page.locator("//span[text()='Ship To']");
//         const isVisible = await shipTo.isVisible();
//         if (!isVisible) throw new Error("Ship To column not visible");
//     }

//     // Order Summary Box
//     async verifyOrderSummaryBox() {
//         const orderSummaryBox: Locator = this.page.locator("//div[@class='bg-white p-8 text-left lg:p-8']");
//         await orderSummaryBox.waitFor({ state: 'visible' });
//         const isVisible = await orderSummaryBox.isVisible();
//         if (!isVisible) throw new Error("Order Summary Box not visible");
//     }

//     // Show Records
//     async verifyShowRecordsSection() {
//         const showRecords: Locator = this.page.locator("//div[@class='relative mt-12 flex justify-center']");
//         const isVisible = await showRecords.isVisible();
//         if (!isVisible) throw new Error("Show Records section not visible");
//     }

//     // Count Box
//     async getCountBoxText(): Promise<string> {
//         const countBox: Locator = this.page.locator("//li[contains(@class,'active bg-brand-primary text-white')]");
//         return await countBox.innerText();
//     }

//     // Check if a section is visible
//     async isSectionVisible(locator: string): Promise<boolean> {
//         const section: Locator = this.page.locator(locator);
//         return await section.isVisible();
//     }
// }\

export class OrdersMethods {

    static async accountIconButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrdersLocators.accountIcon);
    }

    static async accountIconButtonClickable(page: any) {
        await ElementHelper.clickElement(page, OrdersLocators.accountIcon);
    }

    static async accountIconButtonEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, OrdersLocators.accountIcon);
    }

    static async accountIconButtonDisabled(page: any) {
        await VerificationHelpers.elementIsDisabled(page, OrdersLocators.accountIcon);
    }

    static async ordersButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrdersLocators.orders);
    }

    static async ordersButtonClickable(page: any) {
        await ElementHelper.clickElement(page, OrdersLocators.orders);
    }

    static async ordersButtonEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, OrdersLocators.orders);
    }

    static async ordersButtonDisabled(page: any) {
        await VerificationHelpers.elementIsDisabled(page, OrdersLocators.orders);
    }

    // Text Methods
    static async orderHistoryInBlueTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrdersLocators.orderHistoryInBlue);
    }

    static async orderHistoryInBlueTextGet(page: any): Promise<string> {
        return await page.locator(OrdersLocators.orderHistoryInBlue).textContent();
    }

    static async dateTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrdersLocators.date);
    }

    static async dateTextGet(page: any): Promise<string> {
        return await page.locator(OrdersLocators.date).textContent();
    }

    // Arrow Methods (Down Arrow and Up Arrow)
    static async downArrowVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrdersLocators.downArrow);
    }

    static async upArrowVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrdersLocators.upArrow);
    }

    // Input Field Methods (Assuming accountIcon might be clickable and interactable like an input)
    static async accountIconClick(page: any) {
        const accountIcon = await page.locator(OrdersLocators.accountIcon);
        await accountIcon.click();
    }

    // Example: CountBox (as a list item)
    static async countBoxTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrdersLocators.countBox);
    }

    static async countBoxTextGet(page: any): Promise<string> {
        return await page.locator(OrdersLocators.countBox).textContent();
    }
}

