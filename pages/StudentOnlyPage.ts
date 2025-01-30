
import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { StudentOnlyProductsLocators } from "../locators/StudentOnlyProductsLocators";

export class StudentOnlyPage {

    ////Unauthenticated User Student-Only Products Recently Viewed Products  
    static async studentMenuIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.studentMenu);
    }
    static async studentMenuIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, StudentOnlyProductsLocators.studentMenu);
    }
    static async studentOnlyViewAllIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.studentOnlyViewAll);
    }
    static async studentOnlyViewAllIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, StudentOnlyProductsLocators.studentOnlyViewAll);
    }
    static async studentOnlyViewAllIsClickable(page: any) {
        await ElementHelper.clickElement(page, StudentOnlyProductsLocators.studentOnlyViewAll);
    }
    static async studentOnlyFilterAppliedLabelIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.studentOnlyFilterAppliedLabel);
    }
    static async studentOnlyProductImageAcneCreamIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.studentOnlyProductImageAcneCream);
    }
    static async studentOnlyProductImageAcneCreamIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, StudentOnlyProductsLocators.studentOnlyProductImageAcneCream);
    }
    static async studentOnlyProductImageAcneCreamIsClickable(page: any) {
        await ElementHelper.clickElement(page, StudentOnlyProductsLocators.studentOnlyProductImageAcneCream);
    }
    static async RedirectStudentOnlyDetailPageIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.RedirectStudentOnlyDetailPage);
    }
    static async breadCrumbAllProductIsvisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.breadCrumbAllProduct);
    }
    static async breadCrumbAllProductIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, StudentOnlyProductsLocators.breadCrumbAllProduct);
    }
    static async breadCrumbAllProductIsClickable(page: any) {
        await ElementHelper.clickElement(page, StudentOnlyProductsLocators.breadCrumbAllProduct);
    }
    static async breadcrumbForPDP(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.breadCrumbAllProduct);
    }
    static async recentviewProductCardScrollDown(page: any) {
        await ElementHelper.scrollToElement(page, StudentOnlyProductsLocators.recentviewProductCard);
    }
    static async recentviewProductCardIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.recentviewProductCard);
    }
    static async productPriceStudentOnlyRecentViewdIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, StudentOnlyProductsLocators.productPriceStudentOnlyRecentViewd);
    }

    static async loginToOrderBtnStudentOnlyRecentViewIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.loginToOrderBtnStudentOnlyRecentView);
    }
    static async loginToOrderBtnStudentOnlyRecentViewIsClickable(page: any) {
        await ElementHelper.clickElement(page, StudentOnlyProductsLocators.loginToOrderBtnStudentOnlyRecentView);
    }
    static async loginDialogBoxStudentOnlyIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.loginDialogBoxStudentOnly);
        await page.waitForTimeout(3000);
    }
    static async addtoCartBtnStudentOnlyRecentViewdIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, StudentOnlyProductsLocators.addtoCartBtnStudentOnlyRecentViewd);
    }
    static async selectSizeBtnStudentOnlyRecentViewdIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, StudentOnlyProductsLocators.selectSizeBtnStudentOnlyRecentViewd);
    }
    static async notifyMeBtnStudentOnlyRecentViewedIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, StudentOnlyProductsLocators.notifyMeBtnStudentOnlyRecentViewed);
    }

    //Unauthenticated user Student-Only Products PLP
    static async quickViewBtnPlpPageStudentOnlyIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, StudentOnlyProductsLocators.quickViewBtnPlpPageStudentOnly);
    }
    static async productPriceOfCardIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, StudentOnlyProductsLocators.productPriceOfCard);
    }
    static async productFavouriteUnFavouriteOfCardIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, StudentOnlyProductsLocators.favouriteIconStudentOnly);
    }

    static async loginToOrderBtnStudentOnlyIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.loginToOrderBtnStudentOnly);
    }
    static async loginToOrderBtnStudentOnlyIsClickable(page: any) {
        await ElementHelper.clickElement(page, StudentOnlyProductsLocators.loginToOrderBtnStudentOnly);
    }
    static async productAddToCartButtonOfCardIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, StudentOnlyProductsLocators.productAddToCartButtonOfCard);
    }
    static async productSelectSizeButtonOfCardIsHide(page: any) {
        await VerificationHelpers.elementIsHidden(page, StudentOnlyProductsLocators.productSelectSizeButtonOfCard);
    }

    static async loadMoreBtnStudentOnlyScrollDown(page: any) {
        await ElementHelper.scrollToElement(page, StudentOnlyProductsLocators.loadMoreBtnStudentOnly);
    }
    static async loadMoreBtnStudentOnlyIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.loadMoreBtnStudentOnly);
    }
    static async loadMoreBtnStudentOnlyIsClickable(page: any) {
        await ElementHelper.clickElement(page, StudentOnlyProductsLocators.loadMoreBtnStudentOnly);
    }
    static async productscountBeforeClickLoadMoreStudentOnly(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.productscountBeforeClickLoadMoreStudentOnly);
    }
    static async productscountAfterClickLoadMoreStudentOnly(page: any) {
        await VerificationHelpers.elementIsVisible(page, StudentOnlyProductsLocators.productscountAfterClickLoadMoreStudentOnly);
    }
    static async pleaseWaitButtonIsVisible(page: any) {
        await ElementHelper.isElementDisplayed(page, StudentOnlyProductsLocators.pleaseWaitButton);
    }
}

//StudentOnlyPage.ts
