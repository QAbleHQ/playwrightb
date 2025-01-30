export const EducationLocators = {
    educationHeading:`//h2[contains(@class,'heading') and text()='Education']`,
    educationCourseCard:`//div[contains(@class,'course-card-content')]`,
    educationCourseCardHeading:`//div[contains(@class,'course-card-content')]//h2`,
    educationCourseCardStatus:`//div[contains(@class,'course-card-content')]//p[contains(@class,'course-card_course-status')]`,
    viewEducationDashboard:`//a[@title="View Education Dashboard"]`,
    viewCourseBtn:`//div[contains(@class,'course-cta')]//a[text()='View Course']`,
    favouriteBtn:`//button[contains(@class,'favorite-cta')]`,
    courseImage:`div.course-card-content-wrapper img`,
    courseCardInfo:`div.course-card-content-wrapper p:text-is('Finish this course as a PCA SKIN® Certified Professional, immediately ready to implement new protocols, best practices and treatment plans. You will gain access to PCA SKIN®’s wide range of professional treatment products, including industry-leading chemical peels, therapeutic treatment masks and alternative treatments.')`,
}