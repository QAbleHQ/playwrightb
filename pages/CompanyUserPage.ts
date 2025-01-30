import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { CompanyUserLocators } from "../locators/CompanyUserLocators";

export class CompanyUserPage {
    static async companyProfileVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CompanyUserLocators.companyProfile);
    }

    static async companyProfileIconVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CompanyUserLocators.companyProfileIcon);
    }

    static async companyProfileInBlueVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CompanyUserLocators.companyProfileInBlue);
    }

    static async companyIDVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CompanyUserLocators.id);
    }

    static async companyNameVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CompanyUserLocators.name);
    }

    static async companyEmailVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CompanyUserLocators.email);
    }

    static async viewingTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CompanyUserLocators.viewing);
    }

    static async idBoxTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CompanyUserLocators.idBox);
    }

    static async nameBoxTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CompanyUserLocators.nameBox);
    }

    static async emailBoxTextVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, CompanyUserLocators.emailBox);
    }

    static async verifyCompanyIDText(page: any) {
        await ElementHelper.getTextFromElement(page,CompanyUserLocators.idBox);
    }

    static async verifyCompanyNameText(page: any) {
        await ElementHelper.getTextFromElement(page,CompanyUserLocators.nameBox);
    }

    static async verifyCompanyEmailText(page: any) {
        await ElementHelper.getTextFromElement(page,CompanyUserLocators.emailBox);
    }
}