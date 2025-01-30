import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { AccountOverviewLocators } from "../locators/AccountOverviewLocators";

export class AccountOverviewPage {

    static async accountVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, AccountOverviewLocators.account);
    }

    static async overviewHomeIconVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, AccountOverviewLocators.overViewHomeIcon);
    }

    static async overviewHeadingVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, AccountOverviewLocators.overViewHeading);
    }

    static async diamondIconVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, AccountOverviewLocators.diamondIcon);
    }

    static async yourRewardsTierVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, AccountOverviewLocators.yourRewardsTire);
    }

    static async viewRewardsProgramClickable(page: any) {
        await ElementHelper.clickElement(page, AccountOverviewLocators.viewRewardsProgram);
    }

    static async customerNumberVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, AccountOverviewLocators.customerNumber);
    }

    static async customerNumberText(page: any) {
        await ElementHelper.getTextFromElement(page, AccountOverviewLocators.numberics);
    }

    static async headphonesIconVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, AccountOverviewLocators.headphonesIcon);
    }

    static async PCA_SkinCustomerServiceVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, AccountOverviewLocators.customerServiceHeading);
    }

    static async numerics1Visible(page: any) {
        await VerificationHelpers.elementIsVisible(page, AccountOverviewLocators.customerServiceNumber);
    }

    static async availableMonFriVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, AccountOverviewLocators.availableMonFri);
    }

    static async timeVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, AccountOverviewLocators.time);
    }
}