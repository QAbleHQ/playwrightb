import { CheckoutLocators } from '../locators/CheckoutLocators';
import { VerificationHelpers } from '../utils/verificationHelper';
import { ElementHelper } from '../utils/elementHelper';

export class CheckoutMethods {

  // Button Methods based on CheckoutLocators
  static async checkoutTabVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.checkOutTab);
  }

  static async checkoutTabClickable(page: any) {
    await ElementHelper.clickElement(page, CheckoutLocators.checkOutTab);
  }

  static async checkoutTabEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, CheckoutLocators.checkOutTab);
  }

  static async checkoutTabDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, CheckoutLocators.checkOutTab);
  }

  static async checkoutInBlueVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.checkOutInBlue);
  }

  static async shippingHeadingVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.shipping);
  }

  static async addressVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.address);
  }

  static async shippingMethodHeadingVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.shippingMethod);
  }

  static async billingAddVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.billingAdd);
  }

  static async billingBoxVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.billingBox);
  }

  static async cardEndingBoxVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.cardEndingBox);
  }

  static async emailHeadingVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.emailAddress);
  }

  static async emailVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.email);
  }

  static async yourCartVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.yourCart);
  }

  static async itemsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.items);
  }

  static async editCartVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.editCart);
  }

  static async showAllVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.showAll);
  }

  static async showAllClickable(page: any) {
    await ElementHelper.clickElement(page, CheckoutLocators.showAll);
  }

  static async yourCartItemsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.yourCartItems);
  }

  static async showLessVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.showLess);
  }

  static async orderSummaryWholeBoxVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.orderSummaryWholeBox);
  }

  static async orderSummaryVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.oderSummary);
  }

  static async orderSummaryWholeBoxWithPlaceOrderVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.orderSummaryWholeBoxWithPlaceOrder);
  }

  static async subtotalVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.subTotal);
  }

  static async estimatedShippingVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.estimatedShipping);
  }

  static async estimatedTaxVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.estimatedTax);
  }

  static async estimatedTotalVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.estimatedTotal);
  }

  static async accurateTotalVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.accurateTotalWillBeCalculatedOnFinalInvoice);
  }

  static async applyPromoCodeVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.apply);
  }

  static async placeOrderVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.placeOrder);
  }

  static async placeOrderClickable(page: any) {
    await ElementHelper.clickElement(page, CheckoutLocators.placeOrder);
  }

  static async pcaskinCustomerSupportVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.pcaSKINCustomerSupport);
  }

  static async supportNumberVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.supportNumber);
  }

  static async availableMondayFridayVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.availableMondayFriday);
  }

  static async timeVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CheckoutLocators.time);
  }
}
