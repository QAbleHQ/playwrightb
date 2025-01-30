import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { FundamentalCoursesLocators } from "../locators/FundamentalCoursesLocator";

export class FundamentalCourseActions{
    static async visibilityFundamentalCourseHeading(page:any){
        await VerificationHelpers.elementIsVisible(page,FundamentalCoursesLocators.fundamentalCoursesHeading);
    }
    static async visibilityFundamentalCourseFavourteButton(page:any){
        await VerificationHelpers.elementIsVisible(page,FundamentalCoursesLocators.professionalCoursesFavBtn);
    }
    static async clickOnFundamentalCourseFavouriteButton(page:any){
        await page.waitForTimeout(2000)
        await ElementHelper.clickElement(page,FundamentalCoursesLocators.professionalCoursesFavBtn);
    }
    static async scrollToFundamentalCourseFavouriteButton(page:any){
        await ElementHelper.scrollToElement(page,FundamentalCoursesLocators.professionalCoursesFavBtn);
    }
    static async visibilitySuccessToast(page:any){
        await VerificationHelpers.elementIsVisible(page,FundamentalCoursesLocators.addedToFavoriteToast)
    }
    static async visibilityRemovedToast(page:any){
        await VerificationHelpers.elementIsVisible(page,FundamentalCoursesLocators.removeFromFavouriteToast);
    }
    static async visibilityFavButtonIsNotFilled(page:any){
        await VerificationHelpers.elementIsVisible(page,FundamentalCoursesLocators.favouriteButtonOutline);
    }
    static async visibilityFavButtonIsFilled(page:any){
        await page.waitForTimeout(2000)
        await VerificationHelpers.elementIsVisible(page,FundamentalCoursesLocators.favouriteButtonFilled);
    }
    static async visibilityAntioxidantsExpectMoreCourse(page:any){
        await VerificationHelpers.elementIsVisible(page,FundamentalCoursesLocators.antioxidantsExpectMoreCourse);
    }
    static async scrollToAntioxidantsExpectMoreCourse(page:any){
        await ElementHelper.scrollToElement(page,FundamentalCoursesLocators.antioxidantsExpectMoreCourse);
    }
    static async clickOnAntioxidantsExpectMoreCourse(page:any){
        await ElementHelper.clickElement(page,FundamentalCoursesLocators.antioxidantsExpectMoreCourse);
    }
}

//FundamentalCoursesPage.ts