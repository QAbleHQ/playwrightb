export const CDPLocators = {

    aDeepDiveInto: `//h1[text()='A Deep Dive Into Professional Products']`,
    star: `//div[@class="bv_stars_component_container"]`,
    expandYourTreatment: `//p[contains(text(),'Expand your treatment plans and options for your p')]`,
    identifyKeyIngredients: `//li[contains(text(),'Identify key ingredients, indications and contrain')]`,
    createComprehensiveTreatment: `//li[contains(text(),'Create comprehensive treatment plans by expanding ')]`,
    confidentlyAddress: `//li[contains(text(),'Confidently address fears and misconceptions regar')]`,
    useYour: `//p[contains(text(),'Use your $250 product credit on any')]`,
    pleaseNote: `//p[contains(@class,'text-sxl leading-6 italic inline')]`,
    alreadyHaveAnAccountBox: `//body/div/div/div/div/main/div/div/div/div[@data-testid='join-signin-banner']/div[1]/div[1]`,
    logIn: `//button[contains(@class,'cta-label') and contains(@class,'bg-primary-400')]`,
    logIntoSee: `//div[contains(text(),'Log in to see pricing and to order.')]`,
    newToBox: `//div[contains(@data-testid,'join-signin-banner')]/div[2]/div[1]`,
    newToPCASKIN: `//div[normalize-space()='New to PCA SKIN?']`,
    registerToAccess: `//div[contains(text(),'Register to access savings on products and receive')]`,
    join: `//button[text()='Join']`,


    antioxidantsExpectMore: `//h1[text()='Antioxidants: Expect More']`,
    courseHeading: `//div[@id="cdp_page"]//h1`,
    coursePrice: `//div[contains(@class,'container grid')]//div[contains(text(),'$')]`,
    courseAddToCartBtn: `//div[contains(@class,'container grid')]//button[text()='Add to Cart']`,
    courseFavoriteBtn: `//div[contains(@class,'container grid')]//button[contains(@class,'favorite-cta')]`,
    favoriteCtaOutline: `//div[contains(@class,'container grid')]//div[contains(@class,'favorite-cta-outline')]`,
    favoriteCtaFilled: `//div[contains(@class,'container grid')]//div[contains(@class,'favorite-cta-filled')]`,
    addToFavouriteToast: `//div[@id="add-to-favorite-api-success"]`,
    removedFromFavouriteToast: `//div[@id="remove-from-favorite-api-sucess"]`,
    favouriteToastCloseBtn: `//button[contains(@class,'Toastify__close-button')]`,
    courseRestrictedMsgForUAT: `//section[@class='description-wrapper']//p[contains(text(),'.PCA.SKIN')]`,


    academyMenuListHeader: `//li[contains(@class,'navigation-menu-list')]//a[text()='Academy']`,
    pcaSkinHeaderLogo: "//img[@alt='logo']",
    //courseHeaderNavigation: "//div[contains(@class,'navigation-submenu')]//a[@title='Courses']",
    fundamentalCoursesUnderAcademy: "(//div[contains(@class,'navigation-submenu')] //a[@title='Fundamental courses'])[1]",
    courseDetaisPage: `//div[contains(@class,'col-span')]//h1[contains(text(),'Fundamental Courses')]`,
    courseImageAntioxidants: `(//div[contains(@class,'product-grid')]//div[contains(@aria-label,'Antioxidants')])[1]`,
    courseDetailsPage: `//div[contains(@id,'cdp_page')]//h1[contains(text(),'Antioxidants: Expect More')]`,
    coursePriceOfAntioxidant: `//div[contains(@class,'container grid')]//div[contains(text(),'$')]`,
    courseFavoriteBtnOfAntioxidant: `//div[contains(@class,'container grid')]//button[contains(@class,'favorite-cta')]`,
    antioxidantLoginBtn: `(//button[contains(@class,'cta-label') and contains(@class,'bg-primary-400')])[1]`,
    antioxidantJoinBtn: `//button[text()='Join']`,
    antioxidantAddtocartBtn: `//div[contains(@class,'container grid')]//button[text()='Add to Cart']`,
    antioxidantLoginDialog: `//div[contains(@class,'sign-in-modal')]//h1[contains(text(),'Customer Login')]`,
    registerYourProfilePage: `//div[contains(@id,'registration')]//h1[contains(text(),'Register Your Profile')]`,
}