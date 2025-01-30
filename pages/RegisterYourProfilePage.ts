import { VerificationHelpers } from "../utils/verificationHelper";
import { RegistrationProfileLocators } from "../locators/RegisterYourProfileLocators";
import { ElementHelper } from '../utils/elementHelper';
import RegisterTestData from '../testdata/pcaSkinCare.testdata.json'
import { BrowserHelper } from "../utils/browserHelper";


export class RegisterYourProfilePage {
  static async registerYourProfileVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.registerYourProfile);
  }

  static async primaryContactVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.primaryContact);
  }

  static async emailAddressVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.emailAddress);
  }

  static async emailAddressTextboxClick(page: any) {
    await ElementHelper.clickElement(page, RegistrationProfileLocators.emailAddressTextbox);
  }

  static async emailAddressTextboxClearAndEnterData(page: any, email: string) {
    await ElementHelper.clearAndEnterInTextField(page, RegistrationProfileLocators.emailAddressTextbox, email);
  }

  static async emailAddressTextboxEnable(page: any) {
    await VerificationHelpers.elementIsEnabled(page, RegistrationProfileLocators.emailAddressTextbox);
  }

  static async firstNameTextboxClick(page: any) {
    await ElementHelper.clickElement(page, RegistrationProfileLocators.firstNameTextBox);
  }

  static async firstNameTextboxClearAndEnterData(page: any, firstName: string) {
    await ElementHelper.clearAndEnterInTextField(page, RegistrationProfileLocators.firstNameTextBox, firstName);
  }

  static async lastNameTextboxClick(page: any) {
    await ElementHelper.clickElement(page, RegistrationProfileLocators.lastNameTextBox);
  }

  static async lastNameTextboxClearAndEnterData(page: any, lastname: string) {
    await ElementHelper.clearAndEnterInTextField(page, RegistrationProfileLocators.lastNameTextBox, lastname);
  }

  static async passwordTextboxClick(page: any) {
    await ElementHelper.clickElement(page, RegistrationProfileLocators.passwordTextbox);
  }

  static async passwordTextboxClearAndEnterData(page: any, data: string) {
    await ElementHelper.clearAndEnterInTextField(page, RegistrationProfileLocators.passwordTextbox, data);
  }

  static async confirmPasswordTextboxClick(page: any) {
    await ElementHelper.clickElement(page, RegistrationProfileLocators.confirmPasswordText);
  }

  static async confirmPasswordTextboxClearAndEnterData(page: any, confirmPassword: string) {
    await ElementHelper.clearAndEnterInTextField(page, RegistrationProfileLocators.confirmPasswordText, confirmPassword);
  }

  static async pcaSkinCheckboxClick(page: any) {
    await ElementHelper.clickElement(page, RegistrationProfileLocators.pcaSkinCheckbox);
  }

  static async pcaSkinCheckboxEnable(page: any) {
    await VerificationHelpers.elementIsEnabled(page, RegistrationProfileLocators.pcaSkinCheckbox);
  }

  static async privacyPolicyCheckboxClick(page: any) {
    await ElementHelper.clickElement(page, RegistrationProfileLocators.privacyPolicyCheckbox);
    await VerificationHelpers.elementIsChecked(page, RegistrationProfileLocators.privacyPolicyCheckbox);
  }

  static async privacyPolicyCheckboxEnable(page: any) {
    await VerificationHelpers.elementIsEnabled(page, RegistrationProfileLocators.privacyPolicyCheckbox);
  }

  static async privacyPolicyLinkClick(page: any) {
    await ElementHelper.clickElement(page, RegistrationProfileLocators.privacyPolicyLink);
  }

  static async createAccountButtonClick(page: any) {
    await ElementHelper.clickElement(page, RegistrationProfileLocators.createAccount);
  }

  static async visibilityFirstNameLabel(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.firstName);
  }

  static async visibilityLastNameLabel(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.lastName);
  }

  static async visibilityPasswordLabel(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.password);
  }

  static async visibilityConfirmPasswordLabel(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.confirmPassword);
  }

  static async visibilityFirstNameTextbox(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.firstNameTextBox);
  }

  static async visibilityLastNameTextbox(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.lastNameTextBox);
  }

  static async visibilityPasswordTextbox(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.passwordTextbox);
  }

  static async visibilityConfirmPasswordTexbox(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.confirmPasswordText);
  }

  static async visibilityPcaSkin(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.pcaSkinText);
  }

  static async visibilityPrivacyPolicy(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.privacyPolicyText);
  }

  static async visibilityCreateAccount(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.createAccount);
  }

  static async visibilityEmailFieldRequired(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.emailFieldIsRequired);
  }

  static async verifyEmailAddressTextboxIsEmpty(page: any) {
    await VerificationHelpers.elementIsEmpty(page, RegistrationProfileLocators.emailAddressTextbox);
  }

  static async verifyPasswordTextboxIsEmpty(page: any) {
    await VerificationHelpers.elementIsEmpty(page, RegistrationProfileLocators.passwordTextbox);
  }

  static async verifyConfirmPasswordTextboxIsEmpty(page: any) {
    await VerificationHelpers.elementIsEmpty(page, RegistrationProfileLocators.confirmPasswordText);
  }

  static async visibilityPasswordFieldRequired(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.passwordFieldIsRequired);
  }

  static async visibilityConfirmPaawordFieldRequired(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.confirmPasswordFieldIsRequired);
  }

  // Button Methods for PCA_SKIN_Checkbox and Privacy_Policy_Checkbox
  static async pcaSkinCheckboxVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.pcaSkinCheckbox);
  }

  static async pcaSkinCheckboxDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, RegistrationProfileLocators.pcaSkinCheckbox);
  }

  static async privacyPolicyCheckboxVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.privacyPolicyCheckbox);
  }

  static async privacyPolicyCheckboxDisabled(page: any) {
    await VerificationHelpers.elementIsDisabled(page, RegistrationProfileLocators.privacyPolicyCheckbox);
  }

  // Text Verification Methods
  static async pCA_SKINTextVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.pcaSkinText);
  }

  static async pCA_SKINTextGetText(page: any): Promise<string> {
    return await ElementHelper.getElementText(page, RegistrationProfileLocators.pcaSkinText);
  }

  static async privacyPolicyTextVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.privacyPolicyText);
  }

  static async privacyPolicyTextGetText(page: any): Promise<string> {
    return await ElementHelper.getElementText(page, RegistrationProfileLocators.privacyPolicyText);
  }

  // Privacy Policy Link
  static async privacyPolicyLinkVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.privacyPolicyLink);
  }

  static async privacyPolicyLinkGetText(page: any): Promise<string> {
    return await ElementHelper.getElementText(page, RegistrationProfileLocators.privacyPolicyLink);
  }

  // Error Message Methods
  static async emailAddressErrorMessageVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.emailErrorMsg);
  }

  static async emailAddressErrorMessageGetText(page: any): Promise<string> {
    return await ElementHelper.getElementText(page, RegistrationProfileLocators.emailErrorMsg);
  }

  static async firstNameErrorMessageVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.firstNameErrorMsg);
  }

  static async firstNameErrorMessageGetText(page: any): Promise<void> {
    await ElementHelper.getTextFromElement(page, RegistrationProfileLocators.firstNameErrorMsg);
  }

  static async lastNameErrorMessageVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.lastNameErrorMsg);
  }

  static async lastNameErrorMessageGetText(page: any): Promise<void> {
    await ElementHelper.getTextFromElement(page, RegistrationProfileLocators.lastNameErrorMsg);
  }

  static async passwordErrorMessageVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.passwordErrorMsg);
  }

  static async passwordErrorMessageGetText(page: any): Promise<void> {
    await ElementHelper.getTextFromElement(page, RegistrationProfileLocators.passwordErrorMsg);
  }

  static async confirmPasswordErrorMessageVisible(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.passwordReErrorMsg);
  }

  static async confirmPasswordErrorMessageGetText(page: any): Promise<void> {
    await ElementHelper.getTextFromElement(page, RegistrationProfileLocators.passwordReErrorMsg);
  }

  // Error Message Verification Methods
  static async emailAddressErrorMessageText(page: any): Promise<void> {
    await ElementHelper.getTextFromElement(page, RegistrationProfileLocators.emailErrorMsg);
  }

  static async emailAddressInValidError(page: any) {
    await VerificationHelpers.elementHasText(page, RegistrationProfileLocators.emailErrorMsg, RegisterTestData.RegisterPage.ErrorMessage.thisFieldIsRequired);
  }

  //validate invalid email
  static async validateInvalidEmails(page: any, emails: Record<string, string>) {
    for (const email of Object.values(emails)) {
      await RegisterYourProfilePage.emailAddressTextboxClearAndEnterData(page, email);
      await RegisterYourProfilePage.emailAddressInValidError(page)
    }
  }

  //validate email is verified and valid 
  static async emailAddressValidCheckmark(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.emailIsValidCheckmark);
  }

  static async validatevalidEmails(page: any, emails: Record<string, string>) {
    for (const email of Object.values(emails)) {
      await RegisterYourProfilePage.emailAddressTextboxClearAndEnterData(page, email);
      await RegisterYourProfilePage.emailAddressValidCheckmark(page)
    }
  }

  static async verifyEmailFieldRequired(page: any) {
    await VerificationHelpers.elementHasText(page, RegistrationProfileLocators.emailErrorMsg, RegisterTestData.RegisterPage.ErrorMessage.thisFieldIsRequired);
  }

  static async verifyPasswordIsComplexityErrorMessage(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.passwordComplexityError);
  }

  //VALIDATE PASSWORDS
  static async validatePasswordComplexity(page: any, passwords: Record<string, string>) {
    for (const password of Object.values(passwords)) {
      await RegisterYourProfilePage.passwordTextboxClearAndEnterData(page, password);
      await page.waitForTimeout(3000)
      await RegisterYourProfilePage.verifyPasswordIsComplexityErrorMessage(page)
    }
  }

  static async passwordValidValidCheckmark(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.confirmPasswordIsValidCheckmark);
  }

  static async confirmPasswordValidValidCheckmark(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.confirmPasswordIsValidCheckmark);
  }

  static async verifyPasswordDoNotMatch(page: any) {
    await VerificationHelpers.elementHasText(page, RegistrationProfileLocators.passwordReErrorMsg, RegisterTestData.RegisterPage.ErrorMessage.passwordDoNotMatch);
  }

  static async visibilityPrivacyPolicyPage(page: any) {
    await VerificationHelpers.elementIsVisible(page, RegistrationProfileLocators.privacyPolicyPageHeader);
  }

  static generateRandomEmail() {
    const randomPart = Math.random().toString(36).substring(2, 10); // Random alphanumeric string
    return `testuser_${randomPart}@colpal.com`;
  }

  static async visibilityFirstNameIsRequiredMessage(page: any) {
    await VerificationHelpers.elementHasText(page, RegistrationProfileLocators.firstNameErrorMsg, RegisterTestData.RegisterPage.ErrorMessage.thisFieldIsRequired);
  }

  static async visibilityLastNameIsRequiredMessage(page: any) {
    await VerificationHelpers.elementHasText(page, RegistrationProfileLocators.lastNameErrorMsg, RegisterTestData.RegisterPage.ErrorMessage.thisFieldIsRequired);
  }

  static async confirmPasswordTextboxClearData(page: any) {
    await ElementHelper.clearTextField(page, RegistrationProfileLocators.confirmPasswordText);
  }

}
