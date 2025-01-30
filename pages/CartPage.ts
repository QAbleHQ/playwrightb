import { VerificationHelpers } from "../utils/verificationHelper";
import { CartLocators } from '../locators/CartLocators';
import { ElementHelper } from '../utils/elementHelper';

export class CartPage {

  // Cart Methods 
  static async cartVisible(page: any) {
    await page.waitForTimeout(3000) 
    await VerificationHelpers.elementIsVisible(page, CartLocators.cart);
  }

  static async orderSummaryVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.orderSummary);
  }

  static async orderAgainVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.orderAgain);
  }

  static async retinolPriceVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.retinolPrice);
  }

  static async pcaCustomerCareNumberVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.pcaCustomerCareNumber);
  }

  static async pcaCustomerCareDaysAvailableVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.pcaCustomerCareDaysAvailable);
  }

  static async pcaCustomerCareTimeAvailableVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.pcaCustomerCareTimeAvailable);
  }

  static async orderAgainTaglineVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.orderAgainTagline);
  }

  static async acneGelVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.acneGel);
  }

  static async acneCreamVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.acneCream);
  }

  static async pureRetinolPeelVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.pureRetinolPeel);
  }

  static async retinolPeelVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.retinolPeel);
  }

  static async viewingNumberOfCoursesVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.viewingNumberOfCourses);
  }

  static async orderItemNumberVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.orderItemNumber);
  }

  static async favouriteNotSelectedVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.favouriteNotSelected);
  }

  static async estimatedShippingVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.estimatedShipping);
  }

  static async calculatedAtCheckoutVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.calculatedAtCheckout);
  }

  static async estimatedTaxVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.estimatedTax);
  }

  static async checkoutVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.checkout);
  }

  static async pureRetinolPriceVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.pureRetinolPrice);
  }

  static async priceVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.price);
  }

  static async bestSellerLabelVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.bestSellerLable);
  }

  static async itemQuantityLabelVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.itemQuantityLable);
  }

  static async applyButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.applyButton);
  }

  // Button Methods (for Apply Button)
  static async applyButtonClickable(page: any) {
    await ElementHelper.clickElement(page, CartLocators.applyButton);
  }

  static async applyButtonEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, CartLocators.applyButton);
  }

  static async applyButtonDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, CartLocators.applyButton);
  }

  static async applyButtonClick(page: any) {
    await ElementHelper.clickElement(page, CartLocators.applyButton);
  }

  // Text Methods (Get Text)
  static async getOrderSummaryText(page: any) {
    await ElementHelper.getTextFromElement(page, CartLocators.orderSummary);
  }

  static async getOrderAgainText(page: any) {
    await ElementHelper.getTextFromElement(page, CartLocators.orderAgain);
  }

  static async getRetinolPriceText(page: any) {
    await ElementHelper.getTextFromElement(page, CartLocators.retinolPrice);
  }

  static async getPCACustomerCareNumberText(page: any) {
    await ElementHelper.getTextFromElement(page, CartLocators.pcaCustomerCareNumber);
  }

  static async getEstimatedShippingText(page: any) {
    await ElementHelper.getTextFromElement(page, CartLocators.estimatedShipping);
  }

  static async getCheckoutText(page: any) {
    await ElementHelper.getTextFromElement(page, CartLocators.checkout);
  }
  static async scrollToOrderAgainProductPrice(page: any) {
    await ElementHelper.scrollToElement(page, CartLocators.orderAgainProductPrice);
  }
  static async visibilityOrderAgainProductPrice(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.orderAgainProductPrice);
  }
  static async visibilityOrderAgainProductAddToCart(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.orderAgainProductAddToCart);
  }
  static async visibilityOrderAgainProductSelectSize(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.orderAgainProductSelectSize);
  }
  static async visibilityIncreaseProductCountIcon(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.increaseProductCount);
  }
  static async clickIncreaseProductCountIcon3Times(page: any) {
    for (let i = 0; i < 3; i++) {
      await ElementHelper.clickElement(page, CartLocators.increaseProductCount);
      await page.waitForTimeout(1000);
    }
  }
  static async visibilityProductCount(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.productCount);
  }
  static async clearAndEnterProductCount(page: any, data: string) {
    await ElementHelper.clearAndEnterInTextField(page, CartLocators.productCount, data);
  }
  static async visibilityMaximumQtyReachedToast(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.maximumQtyReachedToast);
  }
  static async visibilityItemSection(page: any) {
    await VerificationHelpers.elementIsVisible(page, CartLocators.cartItemSection);
  }
  static async clickOnCheckout(page: any) {
    await ElementHelper.clickElement(page, CartLocators.checkout);
  }
  static async clickOnPlaceOrder(page: any) {
    await ElementHelper.clickElement(page, CartLocators.placeOrder);
  }
  static async visibilityThankYouForOrder(page: any) {
    await ElementHelper.isElementDisplayed(page, CartLocators.thankYouForOrder);
  }
  static async scrollToCheckout(page: any) {
    await ElementHelper.scrollToElement(page, CartLocators.checkout);
  }
  static async scrollOnPlaceOrder(page: any) {
    await ElementHelper.scrollToElement(page, CartLocators.placeOrder);
  }
}

