export const PersonalProfileLocators = {

    personalProfile:`//a[@title='Personal Profile' and text()='Personal Profile']`,
    personalProfileicon:`//span[contains(@class, 'profile-icon') and contains(@class, 'left')]`,
    personalProfileInBlue:`//h2[contains(@class,'heading')]`,
    email:`//p[normalize-space()='email']`,
    mailAddress:`//p[text()='bp_esha_shah+all@colpal.com']`,
    customerNumber:`//p[text()='Customer Number']`,
    customerNo:`//p[text()='10005223']`,
    firstName:`//p[text()='First Name']`,
    lastName:`//p[text()='Last Name']`,
    fName:`//p[text()='Esha']`,
    lName:`//p[text()='Shah']`,
    licenseNo:`//p[normalize-space()='License Number']`,
    licenseNum:`//p[text()='L1234']`,
    licenseExpiration:`//p[text()='License Expiration']`,
    licenseExpirationDate:`//p[text()='12/31/2030']`,
    licenseState:`//p[text()='License State']`,
    licenseStateNo:`//p[text()='CA']`,
    mobilePhoneNumber:`//p[normalize-space()='Mobile Phone Number']`,
    mobilePhoneNum:`//p[text()='6193386379']`,
    needToMake:`//p[contains(@class,'mb-6')]`,
    requestInformationUpdate:`//button[contains(@aria-label,'click to open information form')]`,
    save:`//input[@value='Save Request']`,
    close:`//button[@aria-label='Close']`,
    boxOfSaveClose:`//div[@class='flex personal-profile_button-wrapper___t33_']`,
    changePass:`//h1[@id='gigya-change-password-screen_content_caption']`,
    sendMeEmails:`//span[contains(text(),'Send me emails about latest promotions and product')]`,
    radioCheckbox:`//input[@id='gigya-checkbox-115372580877643900']`,
    currentPassword:`//span[text()='Current Password']`,
    passwordBox:`//input[@id='gigya-password-password']`,
    newPass:`//span[normalize-space()='New Password']`,
    newPassBox:`//input[@id='gigya-password-newPassword']`,
    confirmPassword:`//span[normalize-space()='Confirm Password']`,
    confirmPasswordBox:`//input[@id='gigya-password-passwordRetype']`,
    savePassword:`//input[@value='Save Password']`,
    currentThisFieldIsRequired:`//span[@data-bound-to='password'][text()='This field is required']`,
    newPassThisFieldIsRequired:`//span[@data-bound-to='newPassword'][text()='This field is required']`,
    confirmThisFieldIsRequired:`//span[@data-bound-to='passwordRetype'][text()='This field is required']`,
}