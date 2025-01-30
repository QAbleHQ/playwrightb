import { ElementHelper } from '../utils/elementHelper';
import { VerificationHelpers } from '../utils/verificationHelper';
import { FavouritesLocators } from '../locators/FavouritesLocators';
import { PLPLocators } from '../locators/PLPLocators';
import { CDPLocators } from '../locators/CDPLocators';

export class FavouritesPage {

  // Button Actions
  static async isButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.productsButton);
  }

  static async isButtonClickable(page: any) {
    await ElementHelper.clickElement(page, FavouritesLocators.productsButton);
  }

  static async isButtonEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, FavouritesLocators.productsButton);
  }

  static async isButtonDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, FavouritesLocators.productsButton);
  }

  // Input Actions
  static async isInputVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.acneGelWithOmnisomeProduct);
  }

  static async clickInput(page: any) {
    await ElementHelper.clickElement(page, FavouritesLocators.acneGelWithOmnisomeProduct);
  }

  static async clearInput(page: any) {
    await ElementHelper.clearTextField(page, FavouritesLocators.acneGelWithOmnisomeProduct);
  }

  static async enterDataInInput(page: any, data: string) {
    await ElementHelper.clearAndEnterInTextField(page, FavouritesLocators.acneGelWithOmnisomeProduct, data);
  }

  static async getInputData(page: any) {
    await ElementHelper.getElementValue(page, FavouritesLocators.acneGelWithOmnisomeProduct);
  }

  static async verifyInputText(page: any, expectedText: string) {
    const text = await ElementHelper.getElementValue(page, FavouritesLocators.acneGelWithOmnisomeProduct);
    if (text !== expectedText) {
      throw new Error(`Expected text: "${expectedText}", but got: "${text}"`);
    }
  }

  // Text Actions
  static async isTextVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.acneGelWithOmnisomeTitle);
  }

  static async getText(page: any) {
    return await ElementHelper.getTextFromElement(page, FavouritesLocators.acneGelWithOmnisomeTitle);
  }

  static async verifyText(page: any, expectedText: string) {
    const text = await ElementHelper.getTextFromElement(page, FavouritesLocators.acneGelWithOmnisomeTitle);
    if (text !== expectedText) {
      throw new Error(`Expected text: "${expectedText}", but got: "${text}"`);
    }
  }

  // Specific methods for your locators
  static async isFavoritesHeaderVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.favoritesHeader);
  }

  static async getFavoritesHeaderText(page: any) {
    return await ElementHelper.getTextFromElement(page, FavouritesLocators.favoritesHeader);
  }

  static async isProductsButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.productsButton);
  }

  static async clickProductsButton(page: any) {
    await ElementHelper.waitForElementVisible(page, FavouritesLocators.productsButton)
    await ElementHelper.clickElement(page, FavouritesLocators.productsButton);
    await page.waitForTimeout(5000)
  }

  static async getAcneGelPrice(page: any) {
    return await ElementHelper.getTextFromElement(page, FavouritesLocators.acneGelWithOmnisomePriceRange);
  }

  static async isAcneGelRatingVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.acneGelWithOmnisomeProductRatings);
  }

  static async isRemoveFromFavoritesButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.removeFromFavorites);
  }

  static async clickRemoveFromFavoritesButton(page: any) {
    await ElementHelper.clickElement(page, FavouritesLocators.removeFromFavorites);
  }

  static async getAcneCreamPrice(page: any) {
    return await ElementHelper.getTextFromElement(page, FavouritesLocators.acneCreamPriceRange);
  }

  static async isBodyTherapyProductVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.bodyTherapyProduct);
  }

  static async getBodyTherapyQty(page: any) {
    return await ElementHelper.getTextFromElement(page, FavouritesLocators.bodyTherapyQty);
  }

  static async isCourseButtonSelected(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.coursesButtonSelected);
  }

  static async clickCourseButton(page: any) {
    await ElementHelper.clickElement(page, FavouritesLocators.coursesButtonSelected);
  }

  static async getCourseDetails(page: any) {
    return await ElementHelper.getTextFromElement(page, FavouritesLocators.aDeepDiveIntoProfessionalProductsDetails);
  }
  static async verifyAllProductsInBlueTextIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PLPLocators.plpAllProductInBold);
  }

  static async verifyRemoveFromFavoriteBtbAcneCreame(page: any) {
    await VerificationHelpers.elementIsVisible(page, PLPLocators.plpProductRemoveFromFavoriteAcneCreame);
  }
  static async clickRemoveFromFavoriteBtbAcne(page: any) {
    await ElementHelper.clickElement(page, PLPLocators.plpProductRemoveFromFavoriteAcneCreame);
  }
  static async verifyNoAcneCreameProductIsPresent(page: any) {
    await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductNameAcneCreame);
  }
  static async verifyNameOfProductAcneGelwithOmniSomeVisible(page: any) {
    await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductNameAcneGelWithOmniSome);
  }
  static async clickOnAcneGelwithOmniSomeFavoritebtn(page: any) {
    await ElementHelper.clickElement(page, PLPLocators.plpProductAddToFavoriteAcneGelWithOmniSome);
  }
  static async verifyAcneGelwithOmniSelectSizeBtnVisible(page: any) {
    await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductSelectSizeButtonAcneGelWithOmniSome);
  }
  static async verifyAcneGelwithOmniRemoveFromFavoriteBtnVisible(page: any) {
    await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductRemoveFromFavoriteAcneGelWithOmniSome);
  }

  static async verifyRemoveFromFavoriteBtnRetinolPeelVisible(page: any) {
    await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductRemoveFromFavoriteBtnRetinolPeel);
  }
  static async clickRemoveFromFavoriteBtnRetinolPeel(page: any) {
    await ElementHelper.clickElement(page, PLPLocators.plpProductRemoveFromFavoriteBtnRetinolPeel);
  }
  static async clickRemoveFromFavoriteBtnAcneCream(page: any) {
    await ElementHelper.clickElement(page, PLPLocators);
  }
  static async verifyApologyMessageRetinolPeelVisible(page: any) {
    await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductApologyMessageUnderRemoveFromFavoriteRetinolPeel);
  }
  static async clickRemoveFromFavRetinolPeelVisible(page: any) {
    await ElementHelper.clickElement(page, PLPLocators.plpProductRemoveFromFavoriteBtnRetinolPeel);
  }
  static async verifyNoRetinolPeelProductIsPresent(page: any) {
    await ElementHelper.isElementDisplayed(page, PLPLocators.plpProductNameRetinolPeel);
  }

  //toast_added_to_fav
  static async verifyAddedToFavToastPresent(page: any) {
    await ElementHelper.isElementDisplayed(page, CDPLocators.addToFavouriteToast);
  }
  static async verifyRemoveFromFavToastPresent(page: any) {
    await ElementHelper.isElementDisplayed(page, CDPLocators.removedFromFavouriteToast);
  }
  static async visibilityFavouriteCollagenHydratorProduct(page: any) {
    await ElementHelper.isElementDisplayed(page, FavouritesLocators.collagenHydratorProduct);
  }
  static async scrollFavouriteCollagenHydratorProduct(page: any) {
    await ElementHelper.scrollToElement(page, FavouritesLocators.collagenHydratorProduct);
  }
  static async visibilityFavouritehyaluronicAcidOvernightMaskProduct(page: any) {
    await ElementHelper.isElementDisplayed(page, FavouritesLocators.hyaluronicAcidOvernightMaskProduct);
  }
  static async scrollFavouritehyaluronicAcidOvernightMaskProduct(page: any) {
    await ElementHelper.scrollToElement(page, FavouritesLocators.hyaluronicAcidOvernightMaskProduct);
  }
  static async visibilityOfCollagenHydratorPrice(page: any) {
    await ElementHelper.isElementDisplayed(page, FavouritesLocators.collagenHydratorPrice);
  }
  static async visibilityOfCollagenHydratorRemovefavouriteBtn(page: any) {
    await ElementHelper.isElementDisplayed(page, FavouritesLocators.collagenHydratorRemovefavouriteBtn);
  }
  static async visibilityOfCollagenHydratorSelectSizeBtn(page: any) {
    await ElementHelper.isElementDisplayed(page, FavouritesLocators.collagenHydratorSelectSizeBtn);
  }
  static async visibilityOfHyaluronicAcidOvernightMaskAddToCartBtn(page: any) {
    await page.waitForTimeout(2000);
    await ElementHelper.isElementDisplayed(page, FavouritesLocators.hyaluronicAcidOvernightMaskAddToCartBtn);
  }
  static async clickOnAddToCartButton(page: any, count: number) {
    const button = await ElementHelper.getElementText(page, FavouritesLocators.hyaluronicAcidOvernightMaskAddToCartBtn);
    if (button === 'Add to Cart') {
      for (let i = 0; i < count; i++) {
        await page.waitForTimeout(2000)
        await ElementHelper.clickElement(page, FavouritesLocators.hyaluronicAcidOvernightMaskAddToCartBtn, 5000)
      }
    }
  }
  static async visibilityMaximumQtyReachedToast(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.maximumQtyReachedToast);
  }
  static async visibility6PureRetinolPeelProduct(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.sixPerPureRetinolPeel);
  }
  static async scroll6PureRetinolPeelProduct(page: any) {
    await ElementHelper.scrollToElement(page, FavouritesLocators.sixPerPureRetinolPeel);
  }
  static async hidden6PureRetinolPeelPrice(page: any) {
    await VerificationHelpers.elementIsHidden(page, FavouritesLocators.sixPerPureRetinolPeelPrice);
  }
  static async visibility6PureRetinolPeelRemoveFromFavBtn(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.sixPerPureRetinolPeelRemovefavouriteBtn);
  }
  static async hidden6PureRetinolPeelAddToCartBtn(page: any) {
    await VerificationHelpers.elementIsHidden(page, FavouritesLocators.sixPerPureRetinolPeelAddToCartBtn);
  }
  static async hidden6PureRetinolPeelSelectSize(page: any) {
    await VerificationHelpers.elementIsHidden(page, FavouritesLocators.sixPerPureRetinolPeelSelectSize);
  }
  static async visibilityRestrictedMessageUAT(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.favouriteRestrictedMessageUAT);
  }
  static async scrollToPigmentCorrectPeelRemovefavouriteBtn(page: any) {
    await ElementHelper.scrollToElement(page, FavouritesLocators.pigmentCorrectPeelRemovefavouriteBtn);
  }
  static async clickOnPigmentCorrectPeelRemovefavouriteBtn(page: any) {
    await ElementHelper.clickElement(page, FavouritesLocators.pigmentCorrectPeelRemovefavouriteBtn);
  }
  static async scrollToDualActionRednessReliefRemovefavouriteBtn(page: any) {
    await ElementHelper.scrollToElement(page, FavouritesLocators.dualActionRednessReliefRemovefavouriteBtn);
  }
  static async clickOnDualActionRednessReliefRemovefavouriteBtn(page: any) {
    await ElementHelper.clickElement(page, FavouritesLocators.dualActionRednessReliefRemovefavouriteBtn);
  }
  static async visibilityRemovedFromFavourite(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.removedFromFavouriteToast);
  }
  static async clickOnCoursesTab(page: any) {
    await ElementHelper.clickElement(page, FavouritesLocators.coursesButtonUnselected);
  }

  static async visibilityShopCoursesBtn(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.shopCoursesBtn);
  }

  static async clickOnShopCoursesBtn(page: any) {
    await ElementHelper.clickElement(page, FavouritesLocators.shopCoursesBtn);
  }

  static async visibilityaDeepDiveIntoProfProductsRemoveFav(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.aDeepDiveIntoProfProductsRemoveFav);
  }
  static async clickaDeepDiveIntoProfProductsRemoveFav(page: any) {
    await ElementHelper.clickElement(page, FavouritesLocators.aDeepDiveIntoProfProductsRemoveFav);
  }

  static async visibilityaPhysiciansPointofViewRemoveFav(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.aPhysiciansPointofViewRemoveFav);
  }
  static async clickaPhysiciansPointofViewRemoveFav(page: any) {
    await ElementHelper.clickElement(page, FavouritesLocators.aPhysiciansPointofViewRemoveFav);
  }
  static async isCoursesButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, FavouritesLocators.coursesButton);
  }
  static async clickCoursessButton(page: any) {
    await ElementHelper.waitForElementVisible(page, FavouritesLocators.coursesButton)
    await ElementHelper.clickElement(page, FavouritesLocators.coursesButton);
    await page.waitForTimeout(5000)
  }
}
