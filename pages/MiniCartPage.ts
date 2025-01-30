import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { MiniCartLocators } from "../locators/MiniCartLocators";
import { expect } from '@playwright/test';

export class MiniCartPage {
  // Button Methods
  static async removeButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.removeButton);
  }

  static async removeButtonClickable(page: any) {
    await ElementHelper.clickElement(page, MiniCartLocators.removeButton);
  }

  static async removeButtonEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, MiniCartLocators.removeButton);
  }

  static async removeButtonDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, MiniCartLocators.removeButton);
  }

  static async viewCartButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.viewCart);
  }

  static async viewCartButtonClickable(page: any) {
    await ElementHelper.waitForElementClickable(page, MiniCartLocators.viewCart);
    await ElementHelper.clickElement(page, MiniCartLocators.viewCart);
  }

  static async viewCartButtonEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, MiniCartLocators.viewCart);
  }

  static async viewCartButtonDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, MiniCartLocators.viewCart);
  }

  static async startShoppingButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.startShopping);
  }

  static async startShoppingButtonClickable(page: any) {
    await ElementHelper.clickElement(page, MiniCartLocators.startShopping);
  }

  static async startShoppingButtonEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, MiniCartLocators.startShopping);
  }

  static async startShoppingButtonDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, MiniCartLocators.startShopping);
  }

  static async minusButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.minusButton);
  }

  static async minusButtonClickable(page: any) {
    await ElementHelper.clickElement(page, MiniCartLocators.minusButton);
  }

  static async minusButtonEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, MiniCartLocators.minusButton);
  }

  static async minusButtonDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, MiniCartLocators.minusButton);
  }

  static async plusButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.plusButton);
  }

  static async plusButtonClickable(page: any) {
    await ElementHelper.clickElement(page, MiniCartLocators.plusButton);
  }

  static async plusButtonEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, MiniCartLocators.plusButton);
  }

  static async plusButtonDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, MiniCartLocators.plusButton);
  }

  static async priceTextVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.price);
  }

  static async subTotalAmountTextVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.subToal_Amount);
  }

  // Text Methods
  static async productNameVisible(page: any) {
    await ElementHelper.isElementDisplayed(page, MiniCartLocators.productName);
  }

  static async productIdVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.productId);
  }

  static async productNameGetText(page: any) {
    await ElementHelper.getTextFromElement(page, MiniCartLocators.productName);
  }

  static async productIdGetText(page: any) {
    await ElementHelper.getTextFromElement(page, MiniCartLocators.productId);
  }

  static async subTotalTextVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.subTotal);
  }

  static async subTotalGetText(page: any) {
    await ElementHelper.getTextFromElement(page, MiniCartLocators.subTotal);
  }

  static async priceGetText(page: any) {
    await ElementHelper.getTextFromElement(page, MiniCartLocators.price);
  }

  static async subTotalAmountGetText(page: any) {
    await ElementHelper.getTextFromElement(page, MiniCartLocators.subToal_Amount);
  }

  static async visibilitymaximumQtyReachedToast(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.maximumQtyReachedToast);
  }
  static async visibilitymaximunQtyReachedCloseBtn(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.maximunQtyReachedCloseBtn);
  }
  static async clickmaximunQtyReachedCloseBtn(page: any) {
    await ElementHelper.clickElement(page, MiniCartLocators.maximunQtyReachedCloseBtn);
  }
  static async visibilityProductPrice(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.productPrice);
  }

  //for verify subtotal of product and subtotal of cart of acnecream
  static async verifyMiniCartPriceAcneCream(page: any) {
    await ElementHelper.waitForElementVisible(page, MiniCartLocators.SubTotalOfAcneCream)
    return await VerificationHelpers.elementIsVisible(page, MiniCartLocators.SubTotalOfCartAcneCream);
  }
  static async verifyMiniCartSubtotalAcneCream(page: any) {
    return await VerificationHelpers.elementIsVisible(page, MiniCartLocators.SubTotalOfAcneCream);
  }
  static async verifyMiniCartPriceAfterOneIncreaseAcneCream(page: any) {
    return await VerificationHelpers.elementIsVisible(page, MiniCartLocators.SubTotalOfCartAcneCreamAfterOneIncrease);
  }
  static async verifyMiniCartAfterOneIncreaseSubtotalAcneCream(page: any) {
    return await VerificationHelpers.elementIsVisible(page, MiniCartLocators.SubTotalOfAcneCreamAfterOneIncrease);
  }



  //plus button and minus button visible and click on that 
  static async visibilityPlusButtonForAcneCream(page: any) {
    await page.waitForTimeout(3000)
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.plusButtonAcneCream);
  }

  static async clickPlusButtonOfAcneCream(page: any) {
    await page.waitForTimeout(3000)
    await ElementHelper.clickElement(page, MiniCartLocators.plusButtonAcneCream);
  }

  static async visibilityMinusButtonForAcneCream(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.minusButtonAcneCream);
  }

  static async clickMinusButtonOfAcneCream(page: any) {
    await ElementHelper.waitForElementClickable(page, MiniCartLocators.minusButtonAcneCream)
    await ElementHelper.clickElement(page, MiniCartLocators.minusButtonAcneCream);
  }

  static async clickOnRemoveButtonOfAcneCream(page: any) {
    await ElementHelper.waitForElementClickable(page, MiniCartLocators.removeFromCartButtonForAcneCream);
    await ElementHelper.clickElement(page, MiniCartLocators.removeFromCartButtonForAcneCream);
  }

  static async verifyNoofQuantity(page: any, quantity: string) {
    await page.waitForTimeout(3000)
    await VerificationHelpers.elementContainsText(page, MiniCartLocators.noofQuantity, quantity);
  }


  static async getMiniCartQuantity(page: any) {
    return await ElementHelper.getElementText(page, MiniCartLocators.noofQuantity);
  }

  static async getMiniIconQuantity(page: any) {
    return await ElementHelper.getElementText(page, MiniCartLocators.miniCartIconQuantity);
  }
  //Unauthenticated User Mini Cart

  static async miniCartHeaderButtonIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.miniCartHeaderButton);
  }
  static async miniCartHeaderButtonIsHover(page: any) {
    await ElementHelper.hoverOverMenu(page, MiniCartLocators.miniCartHeaderButton);
  }
  static async miniCartHeaderButtonIsClickable(page: any) {
    await ElementHelper.clickElement(page, MiniCartLocators.miniCartHeaderButton);
  }
  static async miniCartDescriptionTextIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.miniCartDescriptionText);
  }
  static async miniCartLoginButtonIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.miniCartLoginButton);
  }
  static async miniCartLoginButtonIsHover(page: any) {
    await ElementHelper.hoverOverMenu(page, MiniCartLocators.miniCartLoginButton);
  }
  static async miniCartLoginButtonIsClickable(page: any) {
    await ElementHelper.clickElement(page, MiniCartLocators.miniCartLoginButton);
  }
  static async miniCartLoginDialogIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.miniCartLoginDialog);
  }

  static async miniCartCreateAccountButtonIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.miniCartCreateAccountButton);
  }
  static async miniCartCreateAccountButtonIsHover(page: any) {
    await ElementHelper.hoverOverMenu(page, MiniCartLocators.miniCartCreateAccountButton);
  }
  static async miniCartCreateAccountButtonIsClickable(page: any) {
    await ElementHelper.clickElement(page, MiniCartLocators.miniCartCreateAccountButton);
  }
  static async miniCartRegisterYourProfilePageIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.miniCartRegisterYourProfilePage);
  }

  static async verifyMiniCartIconAndMiniCartCount(page: any) {
    // Fetch values from the mini cart and mini cart icon
    const minicart = await MiniCartPage.getMiniCartQuantity(page);
    const minicartIcon = await MiniCartPage.getMiniIconQuantity(page);

    if (minicart === null) throw new Error('Mini Cart quantity is null');
    if (minicartIcon === null) throw new Error('Mini Cart Icon quantity is null');

    console.log(`Mini Cart Count: "${minicart.trim()}", Mini Cart Icon Count: "${minicartIcon.trim()}"`);

    // Verify that both values are equal
    expect(minicart).toBe(minicartIcon);
  }

  static async minusButtonAcneCreamDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, MiniCartLocators.minusButtonAcneCream);
  }

  static async plusButtonAcneCreamDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, MiniCartLocators.plusButtonAcneCream);
  }

  //for Antioxident: expected more course 
  static async clickOnRemoveButtonOfAntioxidentsExpectedMore(page: any) {
    await ElementHelper.clickElement(page, MiniCartLocators.removeFromCartAntioxidentExpectedMore);
    await page.waitForTimeout(5000);
  }
  static async visibilityCourseNameAntioxidentExpectedMore(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.courseNameAntioxidentExpectedMore);
  }
  static async visibilitySubtotalOfAntioxidentExpectedMore(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.SubTotalOfAntioxidentExpectedMore);
  }
  static async visibilityPriceOfAntioxidentExpectedMoreInCart(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.priceOfAntioxidentExpectedMoreInCart);
  }

  static async quantityControlsAreNotVisible(page: any) {
    await VerificationHelpers.elementIsHidden(page, MiniCartLocators.quantityControls);
  }
  static async visibilityZeroSubTotalOfMiniCart(page: any) {
    await VerificationHelpers.elementIsVisible(page, MiniCartLocators.emptyCartSubtotal);
  }
}

//MiniCartPage.ts
