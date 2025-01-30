import { test, chromium, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { RegisterYourProfilePage } from "../../pages/RegisterYourProfilePage";
import { ThanksForSigningUpPage } from "../../pages/ThanksForSigningUpPage";
import { CommonHelper } from '../../utils/commonHelper';
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

test.describe("Verify that the following elements are displayed on the page", async () => {
    test("Verify the Elements on the Thanks Giving Page", { tag: '@regression @newUser @thanksForSigningUp' }, async () => {

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
            await RegisterYourProfilePage.emailAddressTextboxClearAndEnterData(page, `bp_john_doe${Math.random()}@colpal.com`);
        })
        await test.step("Step 7: Clear and Enter into First Name Field", async () => {
            await RegisterYourProfilePage.firstNameTextboxClearAndEnterData(page, "Esha");
        })
        await test.step("Step 8: Clear and Enter into Last Name Field", async () => {
            await RegisterYourProfilePage.lastNameTextboxClearAndEnterData(page, "Shah");
        })
        await test.step("Step 9 Clear and Enter into Password Field", async () => {
            await RegisterYourProfilePage.passwordTextboxClearAndEnterData(page, "TestimQA@123");
        })
        await test.step("Step 10: Clear and Enter into Confirm Password Field", async () => {
            await RegisterYourProfilePage.confirmPasswordTextboxClearAndEnterData(page, "TestimQA@123");
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
            await ThanksForSigningUpPage.isSignUpThankYouTextVisible(page);
        })
        await test.step("Step 17: Verify the Registration Confirmation Contents is visible", async () => {
            await ThanksForSigningUpPage.isConfirmationMessageVisible(page);
        })
        await test.step("Step 18: Verify the Visibility of Resend Verification Email Text Link", async () => {
            await ThanksForSigningUpPage.resendVerificationEmailButtonVisible(page);
        })

    })


    test("Verify that clicking the 'Resend Verification Email' button redirects the user to the Email Verification page", { tag: '@regression @newUser @thanksForSigningUp' }, async () => {
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
            await RegisterYourProfilePage.emailAddressTextboxClearAndEnterData(page, `bp_john_doe${Math.random()}@colpal.com`);
        })
        await test.step("Step 7: Clear and Enter into First Name Field", async () => {
            await RegisterYourProfilePage.firstNameTextboxClearAndEnterData(page, "Esha");
        })
        await test.step("Step 8: Clear and Enter into Last Name Field", async () => {
            await RegisterYourProfilePage.lastNameTextboxClearAndEnterData(page, "Shah");
        })
        await test.step("Step 9 Clear and Enter into Password Field", async () => {
            await RegisterYourProfilePage.passwordTextboxClearAndEnterData(page, "TestimQA@123");
        })
        await test.step("Step 10: Clear and Enter into Confirm Password Field", async () => {
            await RegisterYourProfilePage.confirmPasswordTextboxClearAndEnterData(page, "TestimQA@123");
        })
        await test.step("Step 11: Verify PCASkin Consent CheckBox is Visible", async () => {
            await RegisterYourProfilePage.pcaSkinCheckboxVisible(page);
        })
        await test.step("Step 12: Verify the Privacy Policy CheckBox Consent Visibility", async () => {
            await RegisterYourProfilePage.privacyPolicyCheckboxVisible(page);
        })
        await test.step("Step 13: Click on the Privacy Policy Check Box Consent", async () => {
            await RegisterYourProfilePage.privacyPolicyCheckboxClick(page);
        })
        await test.step("Step 14: Click on the Create Account Button", async () => {
            await page.waitForTimeout(5000)
            await RegisterYourProfilePage.createAccountButtonClick(page);
        })
        await test.step("Step 15: Verify the user is able navigate & see the 'Thanks for Signing Up!'", async () => {
            await ThanksForSigningUpPage.isSignUpThankYouTextVisible(page);
        })
        await test.step("Step 16: Verify the Registration Confirmation Contents is visible", async () => {
            await ThanksForSigningUpPage.isConfirmationMessageVisible(page);
        })
        await test.step("Step 17: Verify the Visibility of Resend Verification Email Text Link", async () => {
            await ThanksForSigningUpPage.resendVerificationEmailButtonVisible(page);
        })
        await test.step("Step 18: Click on the Resend Verification Email Text Link", async () => {
            await ThanksForSigningUpPage.resendVerificationEmailButtonClickable(page);
        })
        await test.step("Step 19: Verify the Email Verification Page is Visible to the user", async () => {
            await ThanksForSigningUpPage.visibilityEmailVerificationHeading(page);
        })
    })
});