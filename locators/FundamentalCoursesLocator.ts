export const FundamentalCoursesLocators = {
    fundamentalCoursesHeading: `h1:has-text("Fundamental Courses")`,
    professionalCoursesFavBtn:`//div[@class='course-card-content-wrapper ']//h2[text()='A Deep Dive Into Professional Products']/ancestor::div[contains(@class,'flex-col')]//button`, //Change the Course Name to locate another course
    favouriteButtonOutline: `//div[@class='course-card-content-wrapper ']//h2[text()='A Deep Dive Into Professional Products']/ancestor::div[contains(@class,'flex-col')]//button//div[contains(@class,'favorite-cta-outline')]`,
    favouriteButtonFilled:`//div[@class='course-card-content-wrapper ']//h2[text()='A Deep Dive Into Professional Products']/ancestor::div[contains(@class,'flex-col')]//button//div[contains(@class,'favorite-cta-filled')]`,
    removeFromFavouriteToast:`//div[@id="remove-from-favorite-api-sucess"]`,
    removeFromFavouriteToastClose_btn:`//div[@id="remove-from-favorite-api-sucess"]//button`,
    addedToFavoriteToast:`//div[@id='add-to-favorite-api-success']`,
    addedToFavouriteToastCloseBtn:`//div[@id='add-to-favorite-api-success']//button`,
    antioxidantsExpectMoreCourse:`//div[@class='course-card-content-wrapper ']//h2[text()='Antioxidants: Expect More']`,
}