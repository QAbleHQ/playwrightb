export const LoginPageLocators = {

    logInTab: `//input[@value='Log In']`,
    createAccount:`//a[text()='Create Account']`,
    ifYouHaveAProfessionalAccount:`//h2[contains(text(), 'If you have a professional account, please login.')]`,
    customerLogin:`//h1[contains(text(),"Customer Login")]`,
    email:`//span[contains(text(),"Email")]`,
    textBoxOfEmail:`//input[contains(@class, 'gigya-input-text') and @placeholder='Email *']`,
    thisFieldisRequired:`//span[contains(@class, 'gigya-error-msg') and contains(@class, 'gigya-error-msg-active')]`,
    password:`//span[contains(text(),"Password")]`,
    textBoxOfPass:`//input[contains(@class, 'gigya-input-password') and @placeholder='Password *']`,
    forgetPassword:`//a[@role='button' and @title='Forgot your password?' and @data-switch-screen='gigya-forgot-password-screen']`,
    clickHereIfYouAre:`//label[@data-translation-key='LABEL_141674422364126050_LABEL']`,
    clickHere:`//label//u[contains(text(), 'Click Here')]`,
    logInBox:`//input[@value='Log in']`,
    }

