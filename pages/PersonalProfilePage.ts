import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { PersonalProfileLocators } from "../locators/PersonalProfileLocators";


export class PersonalProfilePage {
  
  // Personal Profile Methods
  static async personalProfileVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.personalProfile);
  }

  static async personalProfileClickable(page: any) {
    await ElementHelper.clickElement(page, PersonalProfileLocators.personalProfile);
  }

  static async personalProfileEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, PersonalProfileLocators.personalProfile);
  }

  static async personalProfileDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, PersonalProfileLocators.personalProfile);
  }

  // Personal Profile Icon Methods
  static async personalProfileIconVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.personalProfileicon);
  }

  static async personalProfileIconClickable(page: any) {
    await ElementHelper.clickElement(page, PersonalProfileLocators.personalProfileicon);
  }

  // Personal Profile Heading Methods
  static async personalProfileInBlueVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.personalProfileInBlue);
  }

  static async personalProfileInBlueText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.personalProfileInBlue);
  }

  // Email Methods
  static async emailVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.email);
  }

  static async emailText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.email);
  }

  // Mail Address Methods
  static async mailAddressVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.mailAddress);
  }

  static async mailAddressText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.mailAddress);
  }

  // Customer Number Methods
  static async customerNumberVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.customerNumber);
  }

  static async customerNumberText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.customerNumber);
  }

  // Customer Number Value Methods
  static async customerNoText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.customerNo);
  }

  // First Name Methods
  static async firstNameVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.firstName);
  }

  static async firstNameText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.firstName);
  }

  // Last Name Methods
  static async lastNameVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.lastName);
  }

  static async lastNameText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.lastName);
  }

  // License Number Methods
  static async licenseNoVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.licenseNo);
  }

  static async licenseNoText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.licenseNo);
  }

  // License Expiration Methods
  static async licenseExpirationVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.licenseExpiration);
  }

  static async licenseExpirationText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.licenseExpiration);
  }

  // License Expiration Date Methods
  static async licenseExpirationDateVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.licenseExpirationDate);
  }

  static async licenseExpirationDateText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.licenseExpirationDate);
  }

  // License State Methods
  static async licenseStateVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.licenseState);
  }

  static async licenseStateText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.licenseState);
  }

  // License State Code Methods
  static async licenseStateNoText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.licenseStateNo);
  }

  // Mobile Phone Number Methods
  static async mobilePhoneNumberVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.mobilePhoneNumber);
  }

  static async mobilePhoneNumText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.mobilePhoneNum);
  }

  // Need to Make Methods
  static async needToMakeVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.needToMake);
  }

  // Request Information Update Methods
  static async requestInformationUpdateVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.requestInformationUpdate);
  }

  static async requestInformationUpdateClickable(page: any) {
    await ElementHelper.clickElement(page, PersonalProfileLocators.requestInformationUpdate);
  }

  // Save Methods
  static async saveVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.save);
  }

  static async saveClickable(page: any) {
    await ElementHelper.clickElement(page, PersonalProfileLocators.save);
  }

  // Close Methods
  static async closeVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.close);
  }

  static async closeClickable(page: any) {
    await ElementHelper.clickElement(page, PersonalProfileLocators.close);
  }

  // Change Password Methods
  static async changePassVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.changePass);
  }

  // Email Notification Methods
  static async sendMeEmailsVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.sendMeEmails);
  }

  static async sendMeEmailsText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.sendMeEmails);
  }

  // Current Password Methods
  static async currentPasswordVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.currentPassword);
  }

  static async currentPasswordText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.currentPassword);
  }

  // Password Box Methods
  static async passwordBoxVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.passwordBox);
  }

  static async passwordBoxEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, PersonalProfileLocators.passwordBox);
  }

  // New Password Methods
  static async newPassVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.newPass);
  }

  static async newPassText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.newPass);
  }

  // New Password Box Methods
  static async newPassBoxVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.newPassBox);
  }

  static async newPassBoxEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, PersonalProfileLocators.newPassBox);
  }

  // Confirm Password Methods
  static async confirmPasswordVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.confirmPassword);
  }

  static async confirmPasswordText(page: any){
    await ElementHelper.getTextFromElement(page, PersonalProfileLocators.confirmPassword);
  }

  // Confirm Password Box Methods
  static async confirmPasswordBoxVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.confirmPasswordBox);
  }

  static async confirmPasswordBoxEnabled(page: any) {
    await VerificationHelpers.elementIsEnabled(page, PersonalProfileLocators.confirmPasswordBox);
  }

  // Save Password Methods
  static async savePasswordVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.savePassword);
  }

  static async savePasswordClickable(page: any) {
    await ElementHelper.clickElement(page, PersonalProfileLocators.savePassword);
  }

  // Error Message Methods
  static async currentThisFieldIsRequiredVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.currentThisFieldIsRequired);
  }

  static async newPassThisFieldIsRequiredVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.newPassThisFieldIsRequired);
  }

  static async confirmThisFieldIsRequiredVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, PersonalProfileLocators.confirmThisFieldIsRequired);
  }
}
