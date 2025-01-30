import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { LoginPageLocators } from "../locators/LoginLocators";

export class PCASkinLoginPageActions {

    // Button Methods
    static async logInButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, LoginPageLocators.logInTab);
    }

    static async logInButtonClick(page: any) {
        await ElementHelper.clickElement(page, LoginPageLocators.logInBox);
    }

    static async logInButtonEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, LoginPageLocators.logInTab);
    }

    static async logInButtonDisabled(page: any) {
        await VerificationHelpers.elementIsDisabled(page, LoginPageLocators.logInTab);
    }

    static async createAccountButtonVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, LoginPageLocators.createAccount);
    }

    static async createAccountButtonClickable(page: any) {
        await ElementHelper.clickElement(page, LoginPageLocators.createAccount);
    }

    static async createAccountButtonEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, LoginPageLocators.createAccount);
    }

    static async createAccountButtonDisabled(page: any) {
        await VerificationHelpers.elementIsDisabled(page, LoginPageLocators.createAccount);
    }

    // Input Methods
    static async emailInputClick(page: any) {
        await ElementHelper.clickElement(page, LoginPageLocators.textBoxOfEmail);
    }

    static async emailInputClearAndEnterData(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, LoginPageLocators.textBoxOfEmail, data);
    }

    static async emailInputEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, LoginPageLocators.textBoxOfEmail);
    }

    static async passwordInputClick(page: any) {
        await ElementHelper.clickElement(page, LoginPageLocators.textBoxOfPass);
    }

    static async passwordInputClearAndEnterData(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, LoginPageLocators.textBoxOfPass, data);
    }

    static async passwordInputEnabled(page: any) {
        await VerificationHelpers.elementIsEnabled(page, LoginPageLocators.textBoxOfPass);
    }

    // Text Methods
    static async customerLoginTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, LoginPageLocators.customerLogin);
    }

    static async getcustomerLoginText(page: any) {
        await ElementHelper.getTextFromElement(page, LoginPageLocators.customerLogin);
    }

    static async emailTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, LoginPageLocators.email);
    }

    static async getEmailText(page: any) {
        await ElementHelper.getTextFromElement(page, LoginPageLocators.email);
    }

    static async ifYouHaveAProfessionalAccountTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, LoginPageLocators.ifYouHaveAProfessionalAccount);
    }

    static async getifYouHaveAProfessionalAccountText(page: any) {
        await ElementHelper.getTextFromElement(page, LoginPageLocators.ifYouHaveAProfessionalAccount);
    }

    static async thisFieldIsRequiredTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, LoginPageLocators.thisFieldisRequired);
    }

    static async getThisFieldIsRequiredText(page: any) {
        await ElementHelper.getTextFromElement(page, LoginPageLocators.thisFieldisRequired);
    }

    static async forgetPasswordTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, LoginPageLocators.forgetPassword);
    }

    static async getForgetPasswordText(page: any) {
        await ElementHelper.getTextFromElement(page, LoginPageLocators.forgetPassword);
    }

    static async clickHereIfYouAreTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, LoginPageLocators.clickHereIfYouAre);
    }

    static async getClickHereIfYouAreText(page: any) {
        await ElementHelper.getTextFromElement(page, LoginPageLocators.clickHereIfYouAre);
    }

    static async clickHereTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, LoginPageLocators.clickHere);
    }

    static async getClickHereText(page: any) {
        await ElementHelper.getTextFromElement(page, LoginPageLocators.clickHere);
    }

    static async logInBoxTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, LoginPageLocators.logInBox);
    }

    static async getLogInBoxText(page: any) {
        await ElementHelper.getTextFromElement(page, LoginPageLocators.logInBox);
    }

    static async login(page: any, username: string, password: string) {
        await this.emailInputClearAndEnterData(page, username);
        await this.passwordInputClearAndEnterData(page, password);
        await this.logInButtonClick(page);
    }
}