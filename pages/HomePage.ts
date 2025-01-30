import { ElementHelper } from '../utils/elementHelper';
import { VerificationHelpers } from '../utils/verificationHelper';
import { HomeLocators } from '../locators/HomeLocators';
import loginTestData from "../testdata/pcaSkinCare.testdata.json";

export class HomePage {
  static async isSearchProductsButtonVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.searchProductsAndCourses);
  }

  static async isSearchProductsButtonClickable(page: any) {
    return await ElementHelper.clickElement(page, HomeLocators.searchProductsAndCourses);
  }

  static async isLoginButtonVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.loginButton);
  }

  static async isCreateAccountButtonVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.createAccount);
  }

  static async clickCreateAccountButton(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.userCreateAccountBtn);
  }
  static async isShoppingCartIconVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.shoppingCartIcon);
  }

  static async isHeaderTextVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.homePageHeader);
  }

  static async getAccountText(page: any) {
    return await ElementHelper.getTextFromElement(page, HomeLocators.accountText);
  }

  static async isPcaSkinLogoVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.pcaSkinLogo);
  }

  static async clickPCASkinLogo(page: any) {
    return await ElementHelper.clickElement(page, HomeLocators.pcaSkinLogo);
  }

  // Input Methods
  static async isUserIconVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.userIcon);
  }

  // Menu Titles Methods
  static async isMenuTitleShopVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.menuTitleShop);
  }

  static async isMenuTitleacademyVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.menuTitleacademy);
  }

  static async isMenuTitleEventsVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.menuTitleEvents);
  }

  static async isMenuTitleAboutVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.menuTitleAbout);
  }

  static async isMenuTitleBusinessToolsVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.menuTitleBusinessTools);
  }

  static async isMenuTitleMicrositesVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.menuTitleMicrosites);
  }

  static async isMenuTitleStudentVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.menuTitleStudent);
  }
  static async isScrollButtonVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.scrollButton);
  }

  static async isLoginButtonClickable(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.logInUserAccount);
  }

  static async isLearnMoreButtonVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.learnMoreButton);
  }

  static async isSwiperNextButtonClickable(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.bestSellersSwiperNextButton);
  }

  static async hoverOverSwiperPreviousButton(page: any) {
    await ElementHelper.hoverOverMenu(page, HomeLocators.bestSellersSwiperPreviousButton);
  }

  // Text Methods
  static async isWelcomeTextVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.welcomeSkinProfessionalSite);
  }

  static async isAlreadyOnlineAccountVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.alreadyOnlineAccount);
  }

  static async isHighlyRecommendedProductsTextVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.highlyRecommendedProdcuts);
  }

  static async getPromotionBannerDescriptionText(page: any) {
    return await ElementHelper.getTextFromElement(page, HomeLocators.promotionBannerDesc);
  }

  // Input Methods
  static async isEmailInputVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.inputEmail);
  }

  static async clickEmailInputField(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.inputEmail);
  }

  static async clearandEnterEmailInputField(page: any, email: any) {
    await ElementHelper.clearAndEnterInTextField(page, HomeLocators.inputEmail, email);
  }

  static async getEmailInputFieldValue(page: any) {
    return await ElementHelper.getAttributeValue(page, 'abc@gmail.com', HomeLocators.inputEmail);
  }

  static async isPasswordInputVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.inputPassword);
  }

  static async clickPasswordInputField(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.inputPassword);
  }

  static async clearPasswordInputField(page: any) {
    await ElementHelper.clearTextField(page, HomeLocators.inputPassword);
  }

  static async enterDataInPasswordInputField(page: any, password: string) {
    await ElementHelper.clearAndEnterInTextField(page, HomeLocators.inputPassword, password);
  }

  static async clearAndEnterIntoEmailInputField(page: any, email: string) {
    await ElementHelper.clearAndEnterInTextField(page, HomeLocators.inputEmail, email);
  }

  static async clearAndEnterIntoPasswordInputField(page: any, password: string) {
    await ElementHelper.clearAndEnterInTextField(page, HomeLocators.inputPassword, password);
  }


  static async visibiltiyLoginButton(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.loginButton);
  }

  static async clickOnLoginButton(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.loginButton);
    await ElementHelper.waitForElementVisible(page,HomeLocators.customerSupportSection);
  }

  // Text Methods
  static async isShopTextVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.shop);
  }

  static async shopText(page: any) {
    return await ElementHelper.getTextFromElement(page, HomeLocators.shop);
  }

  static async isLearnTextVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.learn);
  }

  static async getLearnText(page: any) {
    return await ElementHelper.getTextFromElement(page, HomeLocators.learn);
  }

  static async isAboutTextVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.about);
  }

  static async getAboutText(page: any) {
    return await ElementHelper.getTextFromElement(page, HomeLocators.about);
  }

  static async isCustomerServiceTextVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.customerService);
  }

  static async getCustomerServiceText(page: any) {
    return await ElementHelper.getTextFromElement(page, HomeLocators.customerService);
  }

  // Link Methods
  static async isAllProductsLinkVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.allProducts);
  }

  static async clickAllProductsLink(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.allProducts);
  }

  static async isDailyCareLinkVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.dailyCare);
  }

  static async clickDailyCareLink(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.dailyCare);
  }

  static async isByTreatmentLinkVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.byTreatment);
  }

  static async clickByTreatmentLink(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.byTreatment);
  }

  static async isBySkinTypeLinkVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.bySkinType);
  }

  static async clickBySkinTypeLink(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.bySkinType);
  }

  static async isBySkinConcernLinkVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.bySkinConcern);
  }

  static async clickBySkinConcernLink(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.bySkinConcern);
  }

  static async isCoursesLinkVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.courses);
  }

  static async clickCoursesLink(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.courses);
  }

  static async isProfessionalPeelsLinkVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.professionalPeels);
  }

  static async clickProfessionalPeelsLink(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.professionalPeels);
  }

  static async isContactUsLinkVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.contactUs);
  }

  static async clickContactUsLink(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.contactUs);
  }

  static async isFAQLinkVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.FAQ);
  }

  static async clickFAQLink(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.FAQ);
  }

  static async clickUserIcon(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.userIcon);
  }

  static async clickLoginButtonUserAccount(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.loginBtnUserAccount);
  }

  static async isCrouselVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.crouselLocator);
  }

  static async verifyContentBanner(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.contentBanner2ColumnType);
  }

  static async isCourseBannerViisble(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.courseBanner);
  }

  static async isPromotionBannerViisble(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.promotionBanner);
  }

  static async verifybestSellerCarousel(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.bestSellerCarousel);
  }

  static async visibilityInViewPortbestSellerCarousel(page: any) {
    await VerificationHelpers.elementIsInViewport(page, HomeLocators.bestSellerCarousel);
  }

  static async scrollTobestSellerCarousel(page: any) {
    await ElementHelper.scrollToElement(page, HomeLocators.bestSellerCarousel);
  }

  static async clickLogInToViewPrices(page: any) {
    return await ElementHelper.clickElement(page, HomeLocators.loginInToViewPricesButton);
  }

  static async isLoginPopUpVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.loginPopUp);
  }

  static async clickLoginPopUp(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.loginPopUp);
  }

  static async isRegisterNowVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.registerNow);
  }

  static async clickRegisterNow(page: any) {
    return await ElementHelper.clickElement(page, HomeLocators.registerNow);
  }

  static async isForgotPasswordVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.forgotPassword);
  }

  static async clickforgotPassword(page: any) {
    return ElementHelper.clickElement(page, HomeLocators.forgotPassword);
  }

  static async isAlreadyRegisteredTextVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.alreadyRegistered);
  }

  static async isEmailEmptyErrorMessageVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.alreadyRegisterdEmailErrorMessage);
  }

  static async isPasswordEmptyErrorMessageVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.alreadyRegisterdPasswordErrorMessage);
  }

  static async isInvalidEmailPasswordErrorMessageVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.alreadyRegisterdInvalidEmailPasswordMessage);
  }

  static async refreshPage(page: any) {
    await page.reload();
  }

  static async clickReturnToLogin(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.returnToLoginButton);
  }

  static async isLoginFormVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.loginForm);
  }

  static async clearEmailForForgotPasswordVisible(page: any, email: string) {
    await ElementHelper.clearAndEnterInTextField(page, HomeLocators.emailEmptyErrorMessage, email);
  }

  static async clickResetButton(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.resetMyPassword);
  }
  static async isbettervalueVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.betterValueVisible);
  }
  static async isbettervalueText(page: any) {
    return await ElementHelper.getTextFromElement(page, HomeLocators.betterValueVisible);
  }
  static async istrustexpertVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.trustExpertVisible);
  }
  static async istrustexpertText(page: any) {
    return await ElementHelper.getTextFromElement(page, HomeLocators.trustExpertVisible);
  }
  static async isPCASKINtakesVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.PCASKINtakesVisible);
  }
  static async isbenifitlistVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.benifitlistVisible);
  }
  static async LearnMoreButtonVisible(page: any) {
    return await VerificationHelpers.elementIsVisible(page, HomeLocators.learnMoreButton);
  }
  static async clickLearnMoreButton(page: any) {
    return await ElementHelper.clickElement(page, HomeLocators.learnMoreButton);
  }
  static async visbilityAlreadyRegisteredText(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.alreadyRegistered);
  }

  static async visibilityRegisterNow(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.registerNow);
  }


  static async visibilityHeroBanner(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.heroBanner);
  }

  static async visibilityOrderSection(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.ordersSection);
  }

  static async visibilityMarketingContentBanner(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.marketingContentBanner);
  }

  static async visibilityorderAgainCarousel(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.orderAgainCarousel);
  }

  static async visibilityCourseBanner(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.courseBanner);
  }

  static async visibilitybestSellerCarousel(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.bestSellerCarousel);
  }

  static async visibilityloyaltyTierLink(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.loyaltyTierLink);
  }

  static async visibilityCustomerSupportSection(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.customerSupportSection);
  }

  static async scrollToOrderAgainSection(page: any) {
    await ElementHelper.scrollToElement(page, HomeLocators.orderAgainCarousel);
  }

  static async visibilityOrderAgainProductPrice(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.orderAgainProductPrice);
  }

  static async visibilityorderAgainAddToCart(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.orderAgainAddToCart);
  }
  static async visibilityorderAgainSelectSize(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.orderAgainSelectSize);
  }

  static async clickOnAddToCartButton(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.orderAgainAddToCart);
  }

  static async clickOnAddToCartButtonOrderAgain3Times(page: any) {
    for (let i = 0; i < 3; i++) {
      await ElementHelper.clickElement(page, HomeLocators.orderAgainAddToCart);
    }
  }

  static async clickOnAddToCartButtonBestSellers3Times(page: any) {
    for (let i = 0; i < 4; i++) {
      await page.waitForTimeout(2000)
      await ElementHelper.clickElement(page, HomeLocators.bestSellerAddToCart);
    }
  }

  static async visibilityerrorToastMsgForLimitExceed(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.maximumQtyReachedToast);
  }

  static async visibilityBestSellerProductPrice(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.bestSellerProductPrice);
  }

  static async visibilitybestSellerAddToCart(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.bestSellerAddToCart);
  }

  static async visibilitybestSellerSelectSize(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.bestSellerSelectSize);
  }

  static async verifyHomePageImageIsVisible(page: any) {
    await ElementHelper.waitForElementVisible(page,HomeLocators.homePageImage);
    await VerificationHelpers.elementIsVisible(page, HomeLocators.homePageImage)
  }

  // Header
  static async verifyFirstSliderHeaderIsVisible(page: any) {
    await ElementHelper.waitForElementVisible(page, HomeLocators.sliderTitle1)
  }

  static async verifySecondSliderHeaderIsVisible(page: any) {
    await ElementHelper.waitForElementVisible(page, HomeLocators.sliderTitle2)
  }

  static async verifyThirdSliderHeaderIsVisible(page: any) {
    await ElementHelper.waitForElementVisible(page, HomeLocators.sliderTitle3)
  }

  static async verifyTextOfSliderHeader(page: any, text: string) {
    await VerificationHelpers.elementHasText(page, HomeLocators.sliderHeading, text)
  }

  // Description
  static async verifyFirstSliderDescriptionIsVisible(page: any) {
    await ElementHelper.waitForElementVisible(page, HomeLocators.sliderDescription1)
  }

  static async verifySecondSliderDescriptionIsVisible(page: any) {
    await ElementHelper.waitForElementVisible(page, HomeLocators.sliderDescription2)
  }

  static async verifyThirdSliderDescriptionIsVisible(page: any) {
    await ElementHelper.waitForElementVisible(page, HomeLocators.sliderDescription3)
  }

  static async verifyTextOfDescriptionIsVisible(page: any, text: string) {
    await VerificationHelpers.elementHasText(page, HomeLocators.sliderDescription, text)
  }

  static async verifySliderCTALabelIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.sliderCTALabel)
  }

  static async verifyCTALink(page: any, attributeName: string, attributeValue: string) {
    await VerificationHelpers.elementHasAttribute(page, HomeLocators.sliderCTALabel, attributeName, attributeValue)
  }

  static async verifyCTALabelShopNowIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.sliderCTALabelShopNow)
  }

  static async clickCTALabelShopNowIsVisible(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.sliderCTALabelShopNow)
  }

  static async verifyHydrabrightPageIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.hydrabrightPageHeader)
  }

  static async verifyCTALabelLearnMoreIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.sliderCTALabelLearnMore)
  }

  static async clickCTALabelLearnMoreIsVisible(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.sliderCTALabelLearnMore)
  }

  static async verifyBrightEvenPeelPageIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.brightAndEvenPeelPageHeader)
  }

  static async clickSwipeButton(page: any) {
    await page.waitForTimeout(2000)
    await ElementHelper.clickElement(page, HomeLocators.swiperButtonNext)
  }

  static async visibilityOfSwipeButton(page: any) {
    await ElementHelper.waitForElementVisible(page, HomeLocators.swiperButtonNext)
  }

  static async visibilityOfSwipePagination(page: any) {
    await ElementHelper.waitForElementVisible(page, HomeLocators.swiperPagination)
  }

  static async clickPrevSwipeButton(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.swiperButtonPrevious)
  }

  static async visibilityOfSwipePrevButton(page: any) {
    await ElementHelper.waitForElementVisible(page, HomeLocators.swiperButtonPrevious)
  }

  static async visibilityOfNoOrderText(page: any) {
    await ElementHelper.isElementDisplayed(page, HomeLocators.noOrderText)
  }

  static async invisibilityOrderSection(page: any) {
    await ElementHelper.isElementInvisible(page, HomeLocators.ordersSection);
  }

  static async visibilityOfLoyaltyRewardViewBenefits(page: any) {
    await ElementHelper.isElementDisplayed(page, HomeLocators.loyaltyRewardViewBenefits)
  }

  static async clickOnLoyaltyRewardViewBenefits(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.loyaltyRewardViewBenefits)
  }

  static async TextOfLoyaltyRewardViewBenefits(page: any, text: string) {
    await VerificationHelpers.elementHasText(page, HomeLocators.loyaltyRewardViewBenefits, text)
  }

  static async visibilityOfLoyaltyRewardViewBenefitsPage(page: any) {
    await ElementHelper.isElementDisplayed(page, HomeLocators.loyaltyRewardTitlePage)
  }

  static async visibilityCustomerSupportTitle(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.customerSupportHeading);
  }

  static async verifyTextOfCustomerSupportTitle(page: any, text: string) {
    await VerificationHelpers.elementHasText(page, HomeLocators.customerSupportHeading, text);
  }

  static async visibilityCustomerSupportNumber(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.customerSupportNumber);
  }

  static async verifyTextOfCustomerSupportNumber(page: any, text: string) {
    await VerificationHelpers.elementHasText(page, HomeLocators.customerSupportNumber, text);
  }

  static async visibilityCustomerSupportAvailabilityDay(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.availabilityDay);
  }

  static async verifyTextOfCustomerSupportAvailabilityDay(page: any, text: string) {
    await VerificationHelpers.elementHasText(page, HomeLocators.availabilityDay, text);
  }

  static async visibilityCustomerSupportAvailabilityTime(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.availabilityTime);
  }

  static async verifyTextOfCustomerSupportAvailabilityTime(page: any, text: string) {
    await VerificationHelpers.elementHasText(page, HomeLocators.availabilityTime, text);
  }

  static async visibilityMarketingImageOne(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.marketingImage1);
  }

  static async visibilityMarketingImageTwo(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.marketingImage2);
  }

  static async visibilityContentBannerTitleOne(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.registerTreatmentTuesday);
  }

  static async visibilityContentBannerTitleTwo(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.brighteningLaunchPromo);
  }

  static async verifyTextContentBannerTitleOne(page: any, text: string) {
    await VerificationHelpers.elementHasText(page, HomeLocators.registerTreatmentTuesday, text);
  }

  static async verifyTextContentBannerTitleTwo(page: any, text: string) {
    await VerificationHelpers.elementHasText(page, HomeLocators.brighteningLaunchPromo, text);
  }

  static async visibilityContentBannerDescriptionOne(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.contentBannerDescription1);
  }

  static async visibilityContentBannerDescriptionTwo(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.contentBannerDescription2);
  }

  static async visibilityContentBannerCTALabelOne(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.learnMoreMarketingHeadingRegisterTreatmentTuesday);
  }

  static async visibilityContentBannerCTALabelTwo(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.learnMoreBrighteningLaunchPromo);
  }

  static async visibilityContentBannerCTALinkOne(page: any, attribute: string, value: string) {
    await VerificationHelpers.elementHasAttribute(page, HomeLocators.learnMoreMarketingHeadingRegisterTreatmentTuesday, attribute, value);
  }

  static async visibilityContentBannerCTALinkTwo(page: any, attribute: string, value: string) {
    await VerificationHelpers.elementHasAttribute(page, HomeLocators.learnMoreBrighteningLaunchPromo, attribute, value);
  }

  static async clickOnContentBannerCTALabelOne(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.learnMoreMarketingHeadingRegisterTreatmentTuesday);
    await page.waitForTimeout(4000)
  }

  static async clickOnContentBannerCTALabelTwo(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.learnMoreBrighteningLaunchPromo);
  }

  static async visibilityTreatmentTuesdayPage(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.treatmentTuesday);
  }

  static async visibilityOfBestsellerHomepage(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.bestSellers);
  }
  static async scrollToBestsellerHomepage(page: any) {
    await ElementHelper.scrollToElement(page, HomeLocators.bestSellers);
  }

  static async scrollToBestsellerAddToCartBtn(page: any) {
    await ElementHelper.scrollToElement(page, HomeLocators.bestSellerAddToCartAcneCream);
  }
  static async verifyTextOfBestsellerHomepage(page: any, text: string) {
    await VerificationHelpers.elementHasText(page, HomeLocators.bestSellers, text);
  }

  static async visibilityOfBestsellerDescription(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.bestsellerDescription);
  }

  static async verifyTextOfBestsellerDescription(page: any, text: string) {
    await VerificationHelpers.elementHasText(page, HomeLocators.bestsellerDescription, text);
  }

  static async visibilityOfBestsellerIcon(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.bestsellerBadge);
  }

  static async visibilityOfBestsellerProductImage(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.bestSellersProductImage);
  }

  static async clickOnBestsellerProductImage(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.bestSellersProductImage);
  }

  static async visibilityOfBestsellerRating(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.bestsellerRating);
  }

  static async clickOnBestsellerRating(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.bestsellerRating);
  }

  static async visibilityOfBestsellerTitle(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.acneCreamTitle);
  }

  static async clickOnBestsellerTitle(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.acneCreamTitle);
  }

  static async visibilityOfBestsellerProductInfoPage(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.productInfoPage);
  }

  static async clickOnBestSellerAddToCart(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.bestSellerAddToCartAcneCream);
  }

  static async scrollBestSellerAcneCreamAddToCart(page: any) {
    await ElementHelper.scrollToElement(page, HomeLocators.bestSellerAddToCartAcneCream);
  }

  static async scrollOrderAgainAcneCreamAddToCart(page: any) {
    await ElementHelper.scrollToElement(page, HomeLocators.orderAgainAddToCart);
  }

  static async visibilityBestSellerAcneCreamAddToCart(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.bestSellerAddToCartAcneCream);
  }

  static async verifyCTALabelLearnMoreTwoIsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, HomeLocators.sliderCTALabelLearnMore2)
  }

  static async clickCTALabelLearnMoreTwoIsVisible(page: any) {
    await ElementHelper.clickElement(page, HomeLocators.sliderCTALabelLearnMore2)
  }

  static async isSearchProductsButtonHover(page: any) {
    return await ElementHelper.hoverOverMenu(page, HomeLocators.searchProductsAndCourses);
  }

}