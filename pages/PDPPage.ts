import { PDPLocators } from '../locators/PDPLocators';
import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";

export class PDPPage {
  static async isAddToCartButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.addtoCart);
  }

  static async isAddToCartButtonClickable(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.addtoCart);
  }

  static async isAddToCartButtonEnabled(page: any) {
    await ElementHelper.isElementEnabled(page, PDPLocators.addtoCart);
  }

  static async hoverOverAddToCartButton(page: any) {
    await ElementHelper.hoverOverMenu(page, PDPLocators.addtoCart);
  }

  static async isHeartIconVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.heartIcon);
  }

  static async isHeartIconClickable(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.heartIcon);
  }

  static async isHeartIconEnabled(page: any) {
    await ElementHelper.isElementEnabled(page, PDPLocators.heartIcon);
  }

  static async isStarIconVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.star);
  }

  static async isAcneCreamTextVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.acneCreamInBlue);
  }

  static async getAcneCreamText(page: any) {
    await ElementHelper.getTextFromElement(page, PDPLocators.acneCreamInBlue);
  }

  static async isSubscribeTextVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.subscribe);
  }

  static async getSubscribeText(page: any) {
    await ElementHelper.getTextFromElement(page, PDPLocators.subscribe);
  }

  static async isSubscribeButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.subscribeButton);
  }

  static async isSubscribeButtonClickable(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.subscribeButton);
  }

  static async isSubscribeButtonEnabled(page: any) {
    await ElementHelper.isElementEnabled(page, PDPLocators.subscribeButton);
  }


  static async isItemTextVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.item);
  }

  static async getItemText(page: any) {
    await ElementHelper.getTextFromElement(page, PDPLocators.item);
  }

  static async isOneTimePurchaseAmountVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.oneTimePurchaseAmount);
  }

  static async getOneTimePurchaseAmount(page: any) {
    await ElementHelper.getTextFromElement(page, PDPLocators.oneTimePurchaseAmount);
  }

  static async isItemQuantityInputVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.itemQuantityBox);
  }

  static async clickItemQuantityInput(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.acneCreamInBlue);
  }

  static async clearItemQuantityInput(page: any) {
    await ElementHelper.clearAndEnterInTextField(page, '', PDPLocators.acneCreamInBlue);
  }

  static async getItemQuantityInputValue(page: any) {
    await ElementHelper.clearAndEnterInTextField(page, '', PDPLocators.itemQuantityBox);
  }

  static async visibilityJoinButton(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.joinButtonText);
  }

  static async clickJoinButton(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.joinButtonText);
  }

  static async visibilityProductHeading(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpHeading);
  }
  static async visibilityProductFavouriteButton(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpProductFavouriteBtn);
  }
  static async visibilityProductSize(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpProductSize);
  }
  static async hiddenProductSize(page: any) {
    await VerificationHelpers.elementIsHidden(page, PDPLocators.pdpProductSize);
  }
  static async visibilityOneTimePurchaseSection(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpOneTimePurchaseSection);
  }
  static async hiddenOneTimePurchaseSection(page: any) {
    await VerificationHelpers.elementIsHidden(page, PDPLocators.pdpOneTimePurchaseSection);
  }
  static async visibilityQuantityControl(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpOneTimePurchaseQTY);
  }
  static async visibilityOneTimePurchasePrice(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpOneTimePurchasePrice);
  }
  static async hiddenAddToCartAndNotifyMeButton(page: any) {
    await VerificationHelpers.elementIsHidden(page, PDPLocators.pdpProductAddToCartBtn);
    await VerificationHelpers.elementIsHidden(page, PDPLocators.pdpProductNotifymeBtn);
  }
  static async visibilityProductAddToCartOrNotifyMeButton(page: any) {
    if (PDPLocators.pdpProductAddToCartBtn) {
      await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpProductAddToCartBtn);
    }
    else {
      await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpProductNotifymeBtn);
    }
  }
  static async subscribeSectionHiddenForStudent(page: any) {
    await VerificationHelpers.elementIsHidden(page, PDPLocators.pdpProductSubscribeSection);
  }
  static async clickOnIncreaseProductCountButton(page: any, count: number) {
    for (let i = 0; i < count; i++) {
      await ElementHelper.clickElement(page, PDPLocators.pdpQtyIncreaseBtn);
    }
  }
  static async clickOnAddToCartButton(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.pdpProductAddToCartBtn);
  }
  static async visibilityMaximumQtyReachedToast(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpMaximumQtyReachedToast);
  }
  static async clearAndEnterIntoQuantityControl(page: any, count: string) {
    await ElementHelper.clearAndEnterInTextField(page, PDPLocators.pdpQtyInput, count);
  }

  static async clickOnSubscribeText(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.subscribe);
  }

  static async scrollToAddToCartButton(page: any) {
    await ElementHelper.scrollToElement(page, PDPLocators.addtoCart);
  }

  static async visibilityFavouriteOutline(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpFavouriteBtnOutline);
  }
  static async clickFavouriteOutline(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.pdpFavouriteBtnOutline);
  }
  static async visibilityAddedToFavouriteToast(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.addToFavouriteToast);
  }
  static async visibilityFavouriteFilled(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpFavouriteBtnFilled);
  }
  static async clickFavouriteFilled(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.pdpFavouriteBtnFilled);
  }
  static async visibilityRemovedFromFavouriteToast(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.removedFromFavouriteToast);
  }
  static async visibilityFavouriteButton(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.favouriteButton);
  }
  static async visibilityRestrictionMessageForUAT(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.restrictionMessage);
  }
  static async verifyTextRestrictionMessageForUAT(page: any, text: string) {
    await VerificationHelpers.elementContainsText(page, PDPLocators.restrictionMessage, text);
  }
  static async scrollToRelatedProductSection(page: any) {
    await ElementHelper.scrollToElement(page, PDPLocators.relatedProductSection);
  }
  static async visibilityRelatedProductPrice(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.relatedProductsAcneGelProduct);
  }
  static async visibilityRelatedProductAddToCart(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.relatedProductsHydramatte);
  }
  static async clickRelatedProductAddToCartMultipleTimes(page: any, count: number) {
    if (count <= 0) {
      throw new Error("Count must be greater than 0");
    }
    for (let i = 0; i < count; i++) {
      await ElementHelper.clickElement(page, PDPLocators.relatedProductsHydramatte);
      await page.waitForTimeout(2000)
    }
  }
  static async hiddenRelatedProductPriceUltraPeel(page: any) {
    await VerificationHelpers.elementIsHidden(page, PDPLocators.relatedRestrictedProductUltraPeelPrice);
  }
  static async hiddenRelatedProductAddToCartUltraPeel(page: any) {
    await VerificationHelpers.elementIsHidden(page, PDPLocators.relatedRestrictedProductUltraPeelAddToCart);
  }
  static async visibilityRelatedRestrictedMessage(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.relatedRestrictedProductMessageUltraPeel);

  }
  static async visibilityPDPBreadCrumb(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.pdpBreadCrumb);
  }
  static async clickPDPBreadCrumbAllProducts(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.pdpBreadCrumbAllProducts);
  }

  
  static async shopMenuListHeaderPDPIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.shopMenuListHeaderPDP);
  }
  static async shopMenuListHeaderPDPIsHover(page: any) {
    await ElementHelper.hoverOverMenu(page, PDPLocators.shopMenuListHeaderPDP);
  }
  static async viewAllDailycarePDPIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.viewallDailycarePDP);
  }
  static async viewAllDailycarePDPIsHover(page: any) {
    await ElementHelper.hoverOverMenu(page, PDPLocators.viewallDailycarePDP);
  }
  static async viewAllDailycarePDPIsClickable(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.viewallDailycarePDP);
  }
  static async acneCreamProcutImagePDPIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.acneCreamProcutImagePDP);
  }
  static async acneCreamProcutImagePDPIsHover(page: any) {
    await ElementHelper.hoverOverMenu(page, PDPLocators.acneCreamProcutImagePDP);
  }
  static async acneCreamProcutImagePDPIsClickable(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.acneCreamProcutImagePDP);
  }
  static async acneCreamDetailsPagePDPIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.acneCreamDetailsPagePDP);
  }
  static async acneCreamLoginBtnPDPIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.acneCreamLoginBtnPDP);
  }
  static async acneCreamLoginBtnPDPIsHover(page: any) {
    await ElementHelper.hoverOverMenu(page, PDPLocators.acneCreamLoginBtnPDP);
  }
  static async acneCreamLoginBtnPDPIsClickable(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.acneCreamLoginBtnPDP);
  }
  static async scrollUpToLoginButton(page: any) {
    await ElementHelper.scrollToElement(page, PDPLocators.acneCreamLoginBtnPDP);
  }
  static async acneCreamLoginDialogPDPIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.acneCreamLoginDialogPDP);
  }
  static async allproductBreadCrumbIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.allproductBreadCrumb);
  }
  static async allProductsTextIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.allProductsText);
  }
  static async acnecreamJoinBtnPDPIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.acnecreamJoinBtnPDP);
  }
  static async acnecreamJoinBtnPDPIsHover(page: any) {
    await ElementHelper.hoverOverMenu(page, PDPLocators.acnecreamJoinBtnPDP);
  }
  static async acnecreamJoinBtnPDPIsClickable(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.acnecreamJoinBtnPDP);
  }
  static async registerYourProfilePagePDPIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.registerYourProfilePagePDP);
  }
  static async scrollDownUpToJoinButton(page: any) {
    await ElementHelper.scrollToElement(page, PDPLocators.acnecreamJoinBtnPDP);
  }
  static async productPricePDPIsHide(page: any) {
    await VerificationHelpers.elementIsHidden(page, PDPLocators.productPricePDP);
  }
  static async favouriteIconPDPIsHide(page: any) {
    await VerificationHelpers.elementIsHidden(page, PDPLocators.favouriteIconPDP);
  }
  static async addtoCartBtnPDPHide(page: any) {
    await VerificationHelpers.elementIsHidden(page, PDPLocators.addtoCartBtnPDP);
  }
  static async scrollDownUpToloadMoreBtnPDP(page: any) {
    await ElementHelper.scrollToElement(page, PDPLocators.loadMoreBtnPDP);
  }
  //Related Products
  static async scrollDownUpTologinIntoOrderButtonPDP(page: any) {
    await ElementHelper.scrollToElement(page, PDPLocators.loginIntoOrderButtonPDP);
  }
  static async relatedProductsAcneGelPDPIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.relatedProductsAcneGelPDP);
  }
  static async loginIntoOrderButtonPDPIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PDPLocators.loginIntoOrderButtonPDP);
  }
  static async loginIntoOrderButtonPDPIsClickable(page: any) {
    await ElementHelper.clickElement(page, PDPLocators.loginIntoOrderButtonPDP);
  }
  static async relatedProductPriceAcneGelIsHide(page: any) {
    await VerificationHelpers.elementIsHidden(page, PDPLocators.relatedProductPriceAcneGel);
  }


}