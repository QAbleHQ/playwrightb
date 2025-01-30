import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { DroshipAddressLocators } from "../locators/DroshipAddressLocators";

export class DropShipAddressPage {

    static async isDropshipAddressButtonVisible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.dropShipAddress);
    }

    static async clickDropshipAddressButton(page: any) {
        await ElementHelper.clickElement(page, DroshipAddressLocators.dropShipAddress);
    }

    static async isDropshipAddressButtonEnabled(page: any) {
        return await VerificationHelpers.elementIsEnabled(page, DroshipAddressLocators.dropShipAddress);
    }

    static async isDropshipAddressButtonDisabled(page: any) {
        return await VerificationHelpers.elementIsDisabled(page, DroshipAddressLocators.dropShipAddress);
    }

    // Add Dropship Address Button Methods
    static async isAddDropshipAddressButtonVisible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.addDropShipAddress);
    }

    static async clickAddDropshipAddressButton(page: any) {
        await ElementHelper.clickElement(page, DroshipAddressLocators.addDropShipAddress);
    }

    static async isAddDropshipAddressButtonEnabled(page: any) {
        return await VerificationHelpers.elementIsEnabled(page, DroshipAddressLocators.addDropShipAddress);
    }

    static async isAddDropshipAddressButtonDisabled(page: any) {
        return await VerificationHelpers.elementIsDisabled(page, DroshipAddressLocators.addDropShipAddress);
    }

    // Input Field Methods
    static async clickReceiverNameInput(page: any) {
        await ElementHelper.clickElement(page, DroshipAddressLocators.receiverName);
    }

    static async clearAndEnterReceiverName(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, DroshipAddressLocators.receiverName, data);
    }

    static async isReceiverNameInputEnabled(page: any) {
        return await VerificationHelpers.elementIsEnabled(page, DroshipAddressLocators.receiverName);
    }

    static async clickStreet1Input(page: any) {
        await ElementHelper.clickElement(page, DroshipAddressLocators.street1);
    }

    static async clearAndEnterStreet1(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, DroshipAddressLocators.street1, data);
    }

    static async isStreet1InputEnabled(page: any) {
        return await VerificationHelpers.elementIsEnabled(page, DroshipAddressLocators.street1);
    }

    static async clickCityInput(page: any) {
        await ElementHelper.clickElement(page, DroshipAddressLocators.cityBox);
    }

    static async clearAndEnterCity(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, DroshipAddressLocators.cityBox, data);
    }

    static async isCityInputEnabled(page: any) {
        return await VerificationHelpers.elementIsEnabled(page, DroshipAddressLocators.cityBox);
    }

    static async clickStateInput(page: any) {
        await ElementHelper.clickElement(page, DroshipAddressLocators.stateBox);
    }

    static async clearAndEnterState(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, DroshipAddressLocators.stateBox, data);
    }

    static async isStateInputEnabled(page: any) {
        return await VerificationHelpers.elementIsEnabled(page, DroshipAddressLocators.stateBox);
    }

    static async clickZipCodeInput(page: any) {
        await ElementHelper.clickElement(page, DroshipAddressLocators.zipCodeBox);
    }

    static async clearAndEnterZipCode(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, DroshipAddressLocators.zipCodeBox, data);
    }

    static async isZipCodeInputEnabled(page: any) {
        return await VerificationHelpers.elementIsEnabled(page, DroshipAddressLocators.zipCodeBox);
    }

    static async clickPhoneNoInput(page: any) {
        await ElementHelper.clickElement(page, DroshipAddressLocators.phoneNoParenthesisOrDashesBox);
    }

    static async clearAndEnterPhoneNo(page: any, data: string) {
        await ElementHelper.clearAndEnterInTextField(page, DroshipAddressLocators.phoneNoParenthesisOrDashesBox, data);
    }

    static async isPhoneNoInputEnabled(page: any) {
        return await VerificationHelpers.elementIsEnabled(page, DroshipAddressLocators.phoneNoParenthesisOrDashesBox);
    }

    // Text Methods
    static async isNameVisible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.name);
    }

    static async getNameText(page: any) {
        return await ElementHelper.getTextFromElement(page, DroshipAddressLocators.name);
    }

    static async isNameRequiredVisible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.nameIsRequired);
    }

    static async isAddressVisible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.address);
    }

    static async getAddressText(page: any) {
        return await ElementHelper.getTextFromElement(page, DroshipAddressLocators.address);
    }

    static async isStreet1Visible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.street1);
    }

    static async getStreet1Text(page: any) {
        return await ElementHelper.getTextFromElement(page, DroshipAddressLocators.street1);
    }

    static async isCityVisible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.city);
    }

    static async getCityText(page: any) {
        return await ElementHelper.getTextFromElement(page, DroshipAddressLocators.city);
    }

    static async isZipCodeVisible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.zipCode);
    }

    static async getZipCodeText(page: any) {
        return await ElementHelper.getTextFromElement(page, DroshipAddressLocators.zipCode);
    }

    static async isPhoneNoVisible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.phoneNoParenthesisOrDashes);
    }

    static async getPhoneNoText(page: any) {
        return await ElementHelper.getTextFromElement(page, DroshipAddressLocators.phoneNoParenthesisOrDashes);
    }

    static async isNoSavedDropshipAddressesVisible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.youHaveNoSavedDropshipAddresses);
    }

    static async getNoSavedDropshipAddressesText(page: any) {
        return await ElementHelper.getTextFromElement(page, DroshipAddressLocators.youHaveNoSavedDropshipAddresses);
    }

    static async isWeRegretVisible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.weRegret);
    }

    static async getWeRegretText(page: any) {
        return await ElementHelper.getTextFromElement(page, DroshipAddressLocators.weRegret);
    }

    static async isAddNewAddressVisible(page: any) {
        return await VerificationHelpers.elementIsVisible(page, DroshipAddressLocators.addNewAddress);
    }

    static async isStateVisible(page:any){
        return await VerificationHelpers.elementIsVisible(page,DroshipAddressLocators.state);
    }
    
}
