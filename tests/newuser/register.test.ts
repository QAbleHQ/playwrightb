import { test, chromium, Page, BrowserContext } from '@playwright/test';

import { HomePage } from '../../pages/HomePage';
import path from 'path';
import { CommonHelper } from '../../utils/commonHelper';
import { ElementHelper } from '../../utils/elementHelper'
import { LoginPageLocators } from '../../locators/LoginLocators';
import { MiniCartPage } from '../../pages/MiniCartPage';
import { RegisterYourProfilePage } from '../../pages/RegisterYourProfilePage';
import { PCASkinLoginPageActions } from '../../pages/LoginPage';
import { NavigationHeaderPageActions } from '../../pages/NavigationHeaderPage';
import { PLPPage } from '../../pages/PLPPage'
import { PDPPage } from '../../pages/PDPPage'
import { ThanksForSigningUpPage } from "../../pages/ThanksForSigningUpPage";
import { loadAndReplaceTestData } from '../../utils/updateProductTestDataWithEnv';
const testdata = loadAndReplaceTestData('pcaSkinCare.testdata.json');

let browser: any;
let context: BrowserContext;
let page: Page;

test.beforeEach(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    await CommonHelper.navigateToHomePage(page);
    await CommonHelper.acceptCookies(page);
});

test.afterEach(async () => {
    await context.close();
    await browser.close();
});

test.describe('Register Your Profile', () => {

    test.only('Verify that the "Register Your profile" page contains the following elements', { tag: '@regression @newUser @register' }, async () => {

        await test.step('Step 1: Verify on register now is visible', async () => {
            await HomePage.isRegisterNowVisible(page)
        })
        await test.step('Step 2: Click on register now', async () => {
            await HomePage.clickRegisterNow(page)
        })
        await test.step('Step 3: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step('Step 4:Primary Contact is visible', async () => {
            await RegisterYourProfilePage.primaryContactVisible(page)
        })
        await test.step('Step 5: Email Address is visible', async () => {
            await RegisterYourProfilePage.emailAddressVisible(page)
        })
        await test.step('Step 6: First name label is visible', async () => {
            await RegisterYourProfilePage.visibilityFirstNameLabel(page)
        })
        await test.step('Step 7: First name Textbox is visible', async () => {
            await RegisterYourProfilePage.visibilityFirstNameLabel(page)
        })
        await test.step('Step 8: Last name label is visible', async () => {
            await RegisterYourProfilePage.visibilityLastNameLabel(page)
        })
        await test.step('Step 9: Last name Textbox is visible', async () => {
            await RegisterYourProfilePage.visibilityLastNameLabel(page)
        })
        await test.step('Step 10:  Password label is visible', async () => {
            await RegisterYourProfilePage.visibilityPasswordLabel(page)
        })
        await test.step('Step 11: Password Textbox is visible', async () => {
            await RegisterYourProfilePage.visibilityPasswordTextbox(page)
        })
        await test.step('Step 12: Confirm Password label is visible', async () => {
            await RegisterYourProfilePage.visibilityConfirmPasswordLabel(page)
        })
        await test.step('Step 13:Confirm Password Textbox is visible', async () => {
            await RegisterYourProfilePage.visibilityConfirmPasswordTexbox(page)
        })
        await test.step('Step 14:PCA SKIN text is visible', async () => {
            await RegisterYourProfilePage.visibilityPcaSkin(page)
        })
        await test.step('Step 15: Verify PCA skin checkbox is Enabled by default ', async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxEnable(page)
        })
        await test.step('Step 16: Verify Privacy Policy text is visible', async () => {
            await RegisterYourProfilePage.visibilityPcaSkin(page)
        })
        await test.step('Step 17: Verify Privacy Policy checkbox is Disabled by default ', async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxEnable(page)
        })
        await test.step('Step 18: Verify create account is visible', async () => {
            await RegisterYourProfilePage.visibilityCreateAccount(page)
        })
    });

    test('Verify that the Email Address field is mandatory and can not be left empty', { tag: '@regression @newUser @register' }, async () => {

        await test.step('Step 1: Verify on register now is visible', async () => {
            await HomePage.isRegisterNowVisible(page)
        })
        await test.step('Step 2: Click on register now', async () => {
            await HomePage.clickRegisterNow(page)
        })
        await test.step('Step 3: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step("Step 4: Verify Email Address Field is Visible", async () => {
            await RegisterYourProfilePage.emailAddressVisible(page);
        })
        await test.step("Step 5: Verify Email Address Field is empty", async () => {
            await RegisterYourProfilePage.verifyEmailAddressTextboxIsEmpty(page);
        })
        await test.step("Step 6: Clear and Enter into First Name Field", async () => {
            await RegisterYourProfilePage.firstNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.firstName);
        })
        await test.step("Step 7: Clear and Enter into Last Name Field", async () => {
            await RegisterYourProfilePage.lastNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.lastName);
        })
        await test.step("Step 8: Clear and Enter into Password Field", async () => {
            await RegisterYourProfilePage.passwordTextboxClearAndEnterData(page, testdata.Password.registerPassword);
        })
        await test.step("Step 9: Clear and Enter into Confirm Password Field", async () => {
            await RegisterYourProfilePage.confirmPasswordTextboxClearAndEnterData(page, testdata.Password.registerPassword);
        })
        await test.step("Step 10: Verify PCASkin Consent CheckBox is Visible", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxVisible(page);
        })
        await test.step("Step 11: Click on the PCASkin Check Box Consent", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxClick(page);
        })
        await test.step("Step 12: Verify the Privacy Policy CheckBox Consent Visibility", async () => {
            await RegisterYourProfilePage.privacyPolicyCheckboxVisible(page);
        })
        await test.step("Step 13: Click on the Privacy Policy Check Box Consent", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxClick(page);
        })
        await test.step("Step 14: Click on the Create Account Button", async () => {
            await RegisterYourProfilePage.createAccountButtonClick(page);
        })
        await test.step("Step 15:Verify This field is required message below the email textbox", async () => {
            await RegisterYourProfilePage.visibilityEmailFieldRequired(page);
        })
    })

    test('Verify that clicking the "Register Now" button from various pages', { tag: '@regression @newUser @register' }, async () => {

        await test.step("Step 1: Visibility Shop Menu List on the Header Navigation", async () => {
            await page.waitForTimeout(5000)
            await NavigationHeaderPageActions.visibilityShopMenuList(page);
        })
        await test.step("Step 2: Hover Shop Menu List on the Header Navigation", async () => {
            await NavigationHeaderPageActions.hoverOverShop(page);
        })
        await test.step("Step 3: Visibility best selller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.visibilityAcneBySkinConcernFilterOption(page);
        })
        await test.step("Step 4: Click best seller Filter Option under Professional treatments", async () => {
            await NavigationHeaderPageActions.clickAcneBySkinConcernFilterOption(page);
        })
        await test.step('Step 5:click on first title of product', async () => {
            await page.waitForTimeout(5000)
            await PLPPage.clickOnFirstProductTitle(page)
        })
        await test.step('Step 6: Verify join button is visible', async () => {
            await PDPPage.visibilityJoinButton(page)
        })
        await test.step('Step 7:click on join button of product', async () => {
            await PDPPage.clickJoinButton(page)
        })
        await test.step('Step 9: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step('Step 10: Click on PCASkin logo', async () => {
            await HomePage.clickPCASkinLogo(page)
        })
        await test.step('Step 11: Verify on register now is visible', async () => {
            await HomePage.isRegisterNowVisible(page)
        })
        await test.step('Step 12: Click on register now', async () => {
            await HomePage.clickRegisterNow(page)
        })
        await test.step('Step 13: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step('Step 14: Verify minicart icon is visible', async () => {
            await HomePage.isShoppingCartIconVisible(page)
        })
        await test.step('Step 15: hover on minicart icon', async () => {
            await NavigationHeaderPageActions.clickOnnCartIcon(page)
            await page.waitForTimeout(3000)
        })
        await test.step('Step 16: Verify that Create account is visible', async () => {
            await NavigationHeaderPageActions.visibilityOnCartIconCreateAccount(page)
        })
        await test.step('Step 17:click on Create account', async () => {
            await NavigationHeaderPageActions.clickOnCartIconCreateAccount(page)
        })
        await test.step('Step 18: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step('Step 19: Verify user account icon is visible', async () => {
            await HomePage.isShoppingCartIconVisible(page)
        })
        await test.step('Step 20: hover on account icon', async () => {
            await NavigationHeaderPageActions.clickOnNavigationUserIconButton(page)
        })
        await test.step('Step 21: Verify that Create account is visible', async () => {
            await NavigationHeaderPageActions.visibilityUserIconCreateAccount(page)
        })
        await test.step('Step 22:click on Create account', async () => {
            await NavigationHeaderPageActions.clickOnUserIconCreateAccount(page)
        })
        await test.step('Step 23: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
    })
    test('Verify that the Password field is mandatory and cannot be left empty', { tag: '@regression @newUser @register' }, async () => {

        await test.step('Step 1: Verify on register now is visible', async () => {
            await HomePage.isRegisterNowVisible(page)
        })
        await test.step('Step 2: Click on register now', async () => {
            await HomePage.clickRegisterNow(page)
        })
        await test.step('Step 3: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step("Step 4: Verify Email Address Field is Visible", async () => {
            await RegisterYourProfilePage.emailAddressVisible(page);
        })
        await test.step("Step 5: Enter into the Email Address Field", async () => {
            await RegisterYourProfilePage.emailAddressTextboxClearAndEnterData(page, testdata.EmailAddress.email45676);
        })
        await test.step("Step 6: Clear and Enter into First Name Field", async () => {
            await RegisterYourProfilePage.firstNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.firstName);
        })
        await test.step("Step 7: Clear and Enter into Last Name Field", async () => {
            await RegisterYourProfilePage.lastNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.lastName);
        })
        await test.step("Step 8: Verify Password Field is empty", async () => {
            await RegisterYourProfilePage.verifyPasswordTextboxIsEmpty(page);
        })
        await test.step("Step 9: Clear and Enter into Confirm Password Field", async () => {
            await RegisterYourProfilePage.confirmPasswordTextboxClearAndEnterData(page, testdata.Password.registerPassword);
        })
        await test.step("Step 10: Verify PCASkin Consent CheckBox is Visible", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxVisible(page);
        })
        await test.step("Step 11: Click on the PCASkin Check Box Consent", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxClick(page);
        })
        await test.step("Step 12: Verify the Privacy Policy CheckBox Consent Visibility", async () => {
            await RegisterYourProfilePage.privacyPolicyCheckboxVisible(page);
        })
        await test.step("Step 13: Click on the Privacy Policy Check Box Consent", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxClick(page);
        })
        await test.step("Step 14: Click on the Create Account Button", async () => {
            await RegisterYourProfilePage.createAccountButtonClick(page);
        })
        await test.step("Step 15: Verify Password field is required message", async () => {
            await RegisterYourProfilePage.visibilityPasswordFieldRequired(page);
        })
    })

    test('Verify that the Confirm Password field is mandatory and cannot be left empty', { tag: '@regression @newUser @register' }, async () => {

        await test.step('Step 1: Verify on register now is visible', async () => {
            await HomePage.isRegisterNowVisible(page)
        })
        await test.step('Step 2: Click on register now', async () => {
            await HomePage.clickRegisterNow(page)
        })
        await test.step('Step 3: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step("Step 4: Verify Email Address Field is Visible", async () => {
            await RegisterYourProfilePage.emailAddressVisible(page);
        })
        await test.step("Step 5: Enter into the Email Address Field", async () => {
            await RegisterYourProfilePage.emailAddressTextboxClearAndEnterData(page, testdata.EmailAddress.email45676);
        })
        await test.step("Step 6: Clear and Enter into First Name Field", async () => {
            await RegisterYourProfilePage.firstNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.firstName);
        })
        await test.step("Step 7: Clear and Enter into Last Name Field", async () => {
            await RegisterYourProfilePage.lastNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.lastName);
        })
        await test.step("Step 8: Verify Confirm Password Field is empty", async () => {
            await RegisterYourProfilePage.verifyConfirmPasswordTextboxIsEmpty(page);
        })
        await test.step("Step 9: Verify PCASkin Consent CheckBox is Visible", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxVisible(page);
        })
        await test.step("Step 10: Click on the PCASkin Check Box Consent", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxClick(page);
        })
        await test.step("Step 11: Verify the Privacy Policy CheckBox Consent Visibility", async () => {
            await RegisterYourProfilePage.privacyPolicyCheckboxVisible(page);
        })
        await test.step("Step 12: Click on the Privacy Policy Check Box Consent", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxClick(page);
        })
        await test.step("Step 13: Click on the Create Account Button", async () => {
            await RegisterYourProfilePage.createAccountButtonClick(page);
        })
        await test.step("Step 14: Verify Confirm Password field is required message", async () => {
            await RegisterYourProfilePage.visibilityConfirmPaawordFieldRequired(page);
        })
    })

    test('Verify that the Email Address field only accepts valid email formats.', { tag: '@regression @newUser @register' }, async () => {

        await test.step('Step 1: Verify on register now is visible', async () => {
            await HomePage.isRegisterNowVisible(page)
        })
        await test.step('Step 2: Click on register now', async () => {
            await HomePage.clickRegisterNow(page)
        })
        await test.step('Step 3: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step("Step 4: Verify Email Address Field is Visible", async () => {
            await RegisterYourProfilePage.emailAddressVisible(page);
        })
        await test.step("Step 5:Verify Valid Email Addresses", async () => {
            await RegisterYourProfilePage.validatevalidEmails(page, testdata.RegisterPage.ValidEmailAddress);
        })
        await test.step("Step 6: Verify InValid Email Addresses ", async () => {
            await RegisterYourProfilePage.validateInvalidEmails(page, testdata.RegisterPage.InvalidEmailAddress);
        })
    })

    test('Verify that the Email Address field is mandatory and can not be left empty ', { tag: '@regression @newUser @register' }, async () => {

        await test.step('Step 1: Verify on register now is visible', async () => {
            await HomePage.isRegisterNowVisible(page)
        })
        await test.step('Step 2: Click on register now', async () => {
            await HomePage.clickRegisterNow(page)
        })
        await test.step('Step 3: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step("Step 4: Verify Email Address Field is Visible", async () => {
            await RegisterYourProfilePage.emailAddressVisible(page);
        })
        // await test.step("Step 5: Enter into the Email Address Field", async () => {
        //     await RegisterYourProfilePage.emailAddressTextboxClearAndEnterData(page, testdata.EmailAddress.email45676);
        // })
        await test.step("Step 6: Clear and Enter into First Name Field", async () => {
            await RegisterYourProfilePage.firstNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.firstName);
        })
        await test.step("Step 7: Clear and Enter into Last Name Field", async () => {
            await RegisterYourProfilePage.lastNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.lastName);
        })
        await test.step("Step 8: Clear and Enter into Password Field", async () => {
            await RegisterYourProfilePage.passwordTextboxClearAndEnterData(page, testdata.Password.testPassword);
        })
        await test.step("Step 9: Clear and Enter into Confirm Password Field", async () => {
            await RegisterYourProfilePage.confirmPasswordTextboxClearAndEnterData(page, testdata.Password.testPassword);
        })
        await test.step("Step 10: Verify PCASkin Consent CheckBox is Visible", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxVisible(page);
        })
        await test.step("Step 11: Click on the PCASkin Check Box Consent", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxClick(page);
        })
        await test.step("Step 12: Verify the Privacy Policy CheckBox Consent Visibility", async () => {
            await RegisterYourProfilePage.privacyPolicyCheckboxVisible(page);
        })
        await test.step("Step 13: Click on the Privacy Policy Check Box Consent", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxClick(page);
        })
        await test.step("Step 14: Click on the Create Account Button", async () => {
            await RegisterYourProfilePage.createAccountButtonClick(page);
        })
        await test.step("Step 15:Verify email is exists error message", async () => {
            await RegisterYourProfilePage.verifyEmailFieldRequired(page);
        })
    })

    test('Verify that the Password field enforces password strength requirements', { tag: '@regression @newUser @register' }, async () => {

        await test.step('Step 1: Verify on register now is visible', async () => {
            await HomePage.isRegisterNowVisible(page)
        })
        await test.step('Step 2: Click on register now', async () => {
            await HomePage.clickRegisterNow(page)
        })
        await test.step('Step 3: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step('Step 4:  Password label is visible', async () => {
            await RegisterYourProfilePage.visibilityPasswordLabel(page)
        })
        await test.step('Step 5: Password Textbox is visible', async () => {
            await RegisterYourProfilePage.visibilityPasswordTextbox(page)
        })
        await test.step("Step 6: Verify the Password complexity by different type of passwords", async () => {
            await RegisterYourProfilePage.validatePasswordComplexity(page, testdata.RegisterPage.InvalidPasswords);
        })
    })

    test('Verify that the Confirm Password field matches the Password field.', { tag: '@regression @newUser @register' }, async () => {

        await test.step('Step 1: Verify on register now is visible', async () => {
            await HomePage.isRegisterNowVisible(page)
        })
        await test.step('Step 2: Click on register now', async () => {
            await HomePage.clickRegisterNow(page)
        })
        await test.step('Step 3: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step('Step 4:  Password label is visible', async () => {
            await RegisterYourProfilePage.visibilityPasswordLabel(page)
        })
        await test.step('Step 5: Password Textbox is visible', async () => {
            await RegisterYourProfilePage.visibilityPasswordTextbox(page)
        })
        await test.step("Step 6: Clear and Enter into Password Field", async () => {
            await RegisterYourProfilePage.passwordTextboxClearAndEnterData(page, testdata.Password.registerPassword);
        })
        await test.step("Step 7: Clear and Enter into Confirm Password Field", async () => {
            await RegisterYourProfilePage.confirmPasswordTextboxClearAndEnterData(page, testdata.Password.registerPassword);
        })
        await test.step("Step 8: Verify Checkmark on Password Field", async () => {
            await RegisterYourProfilePage.passwordValidValidCheckmark(page);
        })
        await test.step("Step 9: Verify Checkmark on Confirm Password Field", async () => {
            await RegisterYourProfilePage.confirmPasswordValidValidCheckmark(page);
        })
        await test.step("Step 10: Enter another Password in Confirm Password Field", async () => {
            await RegisterYourProfilePage.confirmPasswordTextboxClearData(page)
            await page.waitForTimeout(2000)
            await RegisterYourProfilePage.confirmPasswordTextboxClearAndEnterData(page, testdata.Password.testPassword);
        })
        await test.step("Step 11: Verify Password do not match Error", async () => {
            await page.waitForTimeout(2000)
            await RegisterYourProfilePage.verifyPasswordDoNotMatch(page);
        })
    })

    test('Verify that clicking the Privacy Policy link opens the correct privacy policy page.', { tag: '@regression @newUser @register' }, async () => {

        await test.step('Step 1: Verify on register now is visible', async () => {
            await HomePage.isRegisterNowVisible(page)
        })
        await test.step('Step 2: Click on register now', async () => {
            await HomePage.clickRegisterNow(page)
        })
        await test.step('Step 3: Register Your Profile title is visible', async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page)
        })
        await test.step("Step 4: Verify Email Address Field is Visible", async () => {
            await RegisterYourProfilePage.emailAddressVisible(page);
        })
        await test.step("Step 5: Verify Privacy policy text is visible", async () => {
            await RegisterYourProfilePage.privacyPolicyLinkVisible(page);
        })
        await test.step("Step 6: Click on Privacy policy", async () => {
            await RegisterYourProfilePage.privacyPolicyLinkClick(page);
        })
        await test.step("Step 7: Verify Privacy Plicy Page is Visible", async () => {
            await RegisterYourProfilePage.visibilityPrivacyPolicyPage(page);
        })
    })

    test("Verify that clicking the Create Account button navigates to the Thanks for Signing Up page.", { tag: '@regression @newUser @register' }, async () => {

        await test.step("Step 1: Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
        await test.step("Step 2: Verify Register Button is visbile on the HomePage", async () => {
            await HomePage.isRegisterNowVisible(page);
        })
        await test.step("Step 3: Click on the Register Button on the HomePage", async () => {
            await HomePage.clickRegisterNow(page);
        })
        await test.step("Step 4: Verify the User is navigated to Register page", async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page);
        })
        await test.step("Step 5: Verify Email Address Field is Visibile", async () => {
            await RegisterYourProfilePage.emailAddressVisible(page);
        })
        await test.step("Step 6: Enter into the Email Address Field", async () => {
            const email = RegisterYourProfilePage.generateRandomEmail();
            await RegisterYourProfilePage.emailAddressTextboxClearAndEnterData(page, email);
        })
        await test.step("Step 7: Clear and Enter into First Name Field", async () => {
            await RegisterYourProfilePage.firstNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.firstName);
        })
        await test.step("Step 8: Clear and Enter into Last Name Field", async () => {
            await RegisterYourProfilePage.lastNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.lastName);
        })
        await test.step("Step 9: Clear and Enter into Password Field", async () => {
            await RegisterYourProfilePage.passwordTextboxClearAndEnterData(page, testdata.Password.testPassword);
        })
        await test.step("Step 10: Clear and Enter into Confirm Password Field", async () => {
            await RegisterYourProfilePage.confirmPasswordTextboxClearAndEnterData(page, testdata.Password.testPassword);
        })
        await test.step("Step 11: Verify PCASkin Consent CheckBox is Visible", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxVisible(page);
        })
        await test.step("Step 12: Click on the PCASkin Check Box Consent", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxClick(page);
        })
        await test.step("Step 13: Verify the Privacy Policy CheckBox Consent Visibility", async () => {
            await RegisterYourProfilePage.privacyPolicyCheckboxVisible(page);
        })
        await test.step("Step 14: Click on the Privacy Policy Check Box Consent", async () => {
            await RegisterYourProfilePage.privacyPolicyCheckboxClick(page);
        })
        await test.step("Step 15: Click on the Create Account Button", async () => {
            await RegisterYourProfilePage.createAccountButtonClick(page);
        })
        await test.step("Step 16: Verify the user is able navigate & see the 'Thanks for Signing Up!'", async () => {
            await ThanksForSigningUpPage.isConfirmationMessageVisible(page);
        })
        await test.step("Step 17: Verify the Registration Confirmation Contents is visible", async () => {
            await ThanksForSigningUpPage.isConfirmationMessageVisible(page);
        })
        await test.step("Step 18: Verify the Visibility of Resend Verification Email Text Link", async () => {
            await ThanksForSigningUpPage.resendVerificationEmailButtonVisible(page);
        })
    })

    test("Verify that appropriate error messages are displayed for invalid inputs eg.empty fields, invalid email, password mismatch", { tag: '@regression @newUser @register' }, async () => {

        await test.step("Step 1: Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
        await test.step("Step 2: Verify Register Button is visible on the HomePage", async () => {
            await HomePage.isRegisterNowVisible(page);
        })
        await test.step("Step 3: Click on the Register Button on the HomePage", async () => {
            await HomePage.clickRegisterNow(page);
        })
        await test.step("Step 4: Verify the User is navigated to Register page", async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page);
        })
        await test.step("Step 5: Verify Email Address Field is Visibile", async () => {
            await RegisterYourProfilePage.emailAddressVisible(page);
        })
        await test.step("Step 6: Click on the Privacy Policy Check Box Consent", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxClick(page);
        })
        await test.step("Step 7: Click on the Create Account Button", async () => {
            await RegisterYourProfilePage.createAccountButtonClick(page);
        })
        await test.step("Step 8:Verify Email field is required message", async () => {
            await RegisterYourProfilePage.visibilityEmailFieldRequired(page);
        })
        await test.step("Step 9: Verify Password field is required message", async () => {
            await RegisterYourProfilePage.visibilityPasswordFieldRequired(page);
        })
        await test.step("Step 10: Verify Confirm Password field is required message", async () => {
            await RegisterYourProfilePage.visibilityConfirmPaawordFieldRequired(page);
        })
        await test.step("Step 11: Verify First Name field is required message", async () => {
            await RegisterYourProfilePage.visibilityFirstNameIsRequiredMessage(page);
        })
        await test.step("Step 12: Verify Last Name field is required message", async () => {
            await RegisterYourProfilePage.visibilityLastNameIsRequiredMessage(page);
        })
        await test.step("Step 13: Verify InValid Email Addresses", async () => {
            await RegisterYourProfilePage.validateInvalidEmails(page, testdata.RegisterPage.InvalidEmailAddress);
        })
        await test.step("Step 14: Clear and Enter into Password Field", async () => {
            await RegisterYourProfilePage.passwordTextboxClearAndEnterData(page, testdata.Password.testPassword);
        })
        await test.step("Step 15: Clear and Enter into Confirm Password Field", async () => {
            await RegisterYourProfilePage.confirmPasswordTextboxClearAndEnterData(page, testdata.Password.regularPassword);
        })
        await test.step("Step 16: Verify Password do not match Error", async () => {
            await RegisterYourProfilePage.verifyPasswordDoNotMatch(page);
        })
    })

    test("Verify that the 'Kindly explore our privacy policy to understand how we utilize your information' option is mandatory and must be checked.", { tag: '@regression @newUser @register' }, async () => {

        await test.step("Step 1: Verify the User is on HomePage", async () => {
            await HomePage.isWelcomeTextVisible(page);
        })
        await test.step("Step 2: Verify Register Button is visbile on the HomePage", async () => {
            await HomePage.isRegisterNowVisible(page);
        })
        await test.step("Step 3: Click on the Register Button on the HomePage", async () => {
            await HomePage.clickRegisterNow(page);
        })
        await test.step("Step 4: Verify the User is navigated to Register page", async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page);
        })
        await test.step("Step 5: Verify Email Address Field is Visibile", async () => {
            await RegisterYourProfilePage.emailAddressVisible(page);
        })
        await test.step("Step 6: Enter into the Email Address Field", async () => {
            const email = RegisterYourProfilePage.generateRandomEmail();
            await RegisterYourProfilePage.emailAddressTextboxClearAndEnterData(page, email);
        })
        await test.step("Step 7: Clear and Enter into First Name Field", async () => {
            await RegisterYourProfilePage.firstNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.firstName);
        })
        await test.step("Step 8: Clear and Enter into Last Name Field", async () => {
            await RegisterYourProfilePage.lastNameTextboxClearAndEnterData(page, testdata.RegisterPage.Name.lastName);
        })
        await test.step("Step 9: Clear and Enter into Password Field", async () => {
            await RegisterYourProfilePage.passwordTextboxClearAndEnterData(page, testdata.Password.testPassword);
        })
        await test.step("Step 10: Clear and Enter into Confirm Password Field", async () => {
            await RegisterYourProfilePage.confirmPasswordTextboxClearAndEnterData(page, testdata.Password.testPassword);
        })
        await test.step("Step 11: Verify PCASkin Consent CheckBox is Visible", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxVisible(page);
        })
        await test.step("Step 12: Click on the PCASkin Check Box Consent", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxClick(page);
        })
        await test.step('Step 13: Verify Privacy Policy text is visible', async () => {
            await RegisterYourProfilePage.visibilityPrivacyPolicy(page)
        })
        await test.step('Step 14: Verify Privacy Policy checkbox is Disabled by default ', async () => {
            await RegisterYourProfilePage.privacyPolicyCheckboxDisabled(page)
        })
        await test.step("Step 15: Click on the Create Account Button", async () => {
            await RegisterYourProfilePage.createAccountButtonClick(page);
        })
        await test.step("Step 16: Verify that user is still on register your profile page", async () => {
            await RegisterYourProfilePage.registerYourProfileVisible(page);
        })
    })
});

