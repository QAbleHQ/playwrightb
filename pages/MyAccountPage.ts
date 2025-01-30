import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { MyAccountLocators } from "../locators/MyAccountLocators";

export class MyAccountPage{

    //Unauthenticated User Mini Cart
    
      static async myAccountUserIconIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, MyAccountLocators.myAccountUserIcon);
      }
      static async myAccountUserIconIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, MyAccountLocators.myAccountUserIcon);
      }
      static async myAccountUserIconIsClickable(page: any) {
        await ElementHelper.clickElement(page, MyAccountLocators.myAccountUserIcon);
      }
      static async myAccountDescriptionTextIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, MyAccountLocators.myAccountDescriptionText);
      }
      static async myAccountLoginButtonIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, MyAccountLocators.myAccountLoginButton);
      }
      static async myAccountLoginButtonIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, MyAccountLocators.myAccountLoginButton);
      }
      static async myAccountLoginButtonIsClickable(page: any) {
        await ElementHelper.clickElement(page, MyAccountLocators.myAccountLoginButton);
      }
      static async myAccountLoginDialogIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, MyAccountLocators.myAccountLoginDialog);
      }
    
      static async myAccountCreateAccountButtonIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, MyAccountLocators.myAccountCreateAccountButton);
      }
      static async myAccountCreateAccountButtonIsHover(page: any) {
        await ElementHelper.hoverOverMenu(page, MyAccountLocators.myAccountCreateAccountButton);
      }
      static async myAccountCreateAccountButtonIsClickable(page: any) {
        await ElementHelper.clickElement(page, MyAccountLocators.myAccountCreateAccountButton);
      }
      static async myAccountRegisterYourProfilePageIsVisible(page: any) {
        await VerificationHelpers.elementIsVisible(page, MyAccountLocators.myAccountRegisterYourProfilePage);
      }

}