import { ElementHelper } from '../utils/elementHelper';
import { VerificationHelpers } from '../utils/verificationHelper';
import { InvoiceLocators } from '../locators/InvoiceLocators';
 
export class InvoicePage {
  static async isPreviousButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, InvoiceLocators.previousButton)
  }
 
  static async isNextButtonClickable(page: any) {
    await ElementHelper.isElementEnabled(page,InvoiceLocators.nextButton);
  }
 
  static async isInvoiceHistoryTableVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, InvoiceLocators.invoiceHistoryTable);
  }
 
  static async getInvoiceHistoryTitleText(page: any) {
    await ElementHelper.getTextFromElement(page, InvoiceLocators.invoiceHistoryTitle);
  }
 
  static async getInvoiceStatus90002001(page: any) {
    await ElementHelper.getTextFromElement(page, InvoiceLocators.invoice90002001Status);
  }
 
  static async getInvoiceStatus90001973(page: any) {
    await ElementHelper.getTextFromElement(page, InvoiceLocators.invoice90001973Status);
  }
 
  // **Input Methods**
  static async isRecordsDropdownVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, InvoiceLocators.show20Records);
  }
 
  static async selectRecordsToShow(page: any, count: '20' | '50' | '100') {
    const locatorMap = {
      '20': InvoiceLocators.show20Records,
      '50': InvoiceLocators.show50Records,
      '100': InvoiceLocators.show100Records,
    };
    await ElementHelper.clickElement(page, locatorMap[count]);
  }
 
  static async isany1Visible(page: any) {
    await VerificationHelpers.elementIsVisible(page, InvoiceLocators.page1);
  }
 
  static async clickany2(page: any) {
    await ElementHelper.clickElement(page, InvoiceLocators.page2);
  }
 
  // **Sorting Methods**
  static async sortInvoicesByDateAscending(page: any) {
    await ElementHelper.clickElement(page,InvoiceLocators.dateSortingByUp);
  }
 
  static async sortInvoicesByInvoiceNumberAscending(page: any) {
    await ElementHelper.clickElement(page,InvoiceLocators.invoiceSortingByUp);
  }
 
  static async sortInvoicesByInvoiceNumberDescending(page: any) {
    await ElementHelper.clickElement(page,InvoiceLocators.invoiceSortingByDown);
  }
 
  static async sortInvoicesByAmountAscending(page: any) {
    await ElementHelper.clickElement(page,InvoiceLocators.amountSortingByUp);
  }
 
  static async sortInvoicesByAmountDescending(page: any) {
    await ElementHelper.clickElement(page,InvoiceLocators.amountSortingByDown);
  }
 
  static async sortInvoicesByStatusAscending(page: any) {
    await ElementHelper.clickElement(page,InvoiceLocators.statusSortingUp);
  }
 
  static async sortInvoicesByStatusDescending(page: any) {
    await ElementHelper.clickElement(page,InvoiceLocators.statusSortingDowm);
  }
 
  static async getInvoiceNumberText(page: any, locator: string) {
    return await ElementHelper.getTextFromElement(page, locator);
  }
 
  static async getInvoiceAmount(page: any, locator: string) {
    return await ElementHelper.getTextFromElement(page, locator);
  }
 
  static async getInvoiceStatus(page: any, locator: string) {
    return await ElementHelper.getTextFromElement(page, locator);
  }
}
 