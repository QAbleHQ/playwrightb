export const CoursePLPLocators = {
    allCoursesHeading: `//h1[text()='All Courses']`,
    cachesoursesHeading: `//h3[text()='Courses']`,
    allCoursesButton: `//button[text()='All Courses']`,
    educationMembershipsButton: `//button[text()='Education Memberships']`,
    fundamentalCoursesButton: `//button[text()='Fundamental Courses']`,
    certificationCourses: `//button[text()='Certification Courses']`,
    acne: `//button[text()='Acne']`,
    aging: `//button[text()='Aging']`,
    hyperPigmentation: `//button[text()='Hyperpigmentation']`,
    sensitiveSkin: `//button[text()='Sensitive Skin']`,
    enhancingYourServices: `//button[text()='Enhancing Your Services']`,
    businessBuilding: `//button[text()='Business Building']`,
    studentCourses: `//button[text()='Student Courses']`,
    nationalSeminars: `//button[text()='National Seminars']`,
    aPhysicianPointOfView: `//button[text()="A Physician's Point of View"]`,
    multiCulturalSkin: `//button[text()='Multicultural Skin']`,
    peelApplicationVideos: `	//button[text()='Peel Application Videos']`,

    numberOfCourses: `//div[contains(@class, 'items-center justify-between hidden mb-2 lg:flex')]//div`,
    deepDiveImage: `(//div[contains(@class, 'flex flex-col lg:pt-0 lg:mt-8 mt-6')]//a[contains(@aria-label, 'A Deep Dive Into Professional Products')]//h2)[1]`,
    deepDiveRating: `//h2[text()='A Deep Dive Into Professional Products']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    deepDiveDetails: `//h2[text()='A Deep Dive Into Professional Products']//following-sibling::div[contains(@class, 'pt-2')]`,
    deepDiveLearnMore: `(//div[contains(@class, 'flex') and contains(@class, 'lg:flex-row course-cta')]//a[contains(@target, '_self')])[1]`,
    deepDiveStarRating: `//h2[text()='A Deep Dive Into Professional Products']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_stars_button_container')]`,
    deeperLookImage: `//h2[text()='A Deeper Look at Topical Ingredients']`,
    deeperLookRating: `//h2[text()='A Deeper Look at Topical Ingredients']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    deeperLookDetails: `//h2[text()='A Deeper Look at Topical Ingredients']//following-sibling::div[contains(@class, 'pt-2')]`,
    deeperLookLearnMore: `//div[contains(@class, 'flex') and contains(@class, 'lg:flex-row course-cta')]//a[contains(@target, '_self')])[3]`,
    deeperLookStarRating: `//h2[text()='A Deeper Look at Topical Ingredients']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_stars_button_container')]`,
    deepDiveProducts: `//h2[contains(text(), 'A Deep Dive Into Professional Products')]`,
    deepDiveSensitiveSkin: `//h2[contains(text(), 'A Deep Dive into Sensitive Skin and Treatment: A Physician's Point of View')]`,
    deeperLookTopicalIngredients: `//h2[contains(text(), 'A Deeper Look at Topical Ingredients')]`,
    deeperUnderstandingRosacea: `//h2[contains(text(), 'A Deeper Understanding of Rosacea')]`,
    achievingBrighteningResults: `//h2[contains(text(), 'Achieving Brightening Results without HQ')]`,
    acneMembership: `//h2[contains(text(), 'Acne Membership')]`,
    acneScarring: `//h2[contains(text(), 'Acne Scarring')]`,
    addressingAdolescentAcne: `//h2[contains(text(), 'Addressing Adolescent Acne')]`,
    advancedAging: `//h2[contains(text(), 'Advanced Aging: Treating Deep Wrinkling')]`,
    advancedPeelingTechniques: `//h2[contains(text(), 'Advanced Peeling Techniques')]`,
    agingSkinMembership: `//h2[contains(text(), 'Aging Skin Membership')]`,
    allAccessMembership: `//h2[contains(text(), 'All Access Membership')]`,
    inDepthLookMelasma: `//h2[contains(text(), 'An In Depth Look at Melasma')]`,
    inDepthLookHypopigmentation: `//h2[contains(text(), 'An In-Depth Look at Hypopigmentation')]`,
    antioxidantsExpectMore: `//h2[contains(text(), 'Antioxidants: Expect More')]`,
    asianSkinTreatments: `//h2[contains(text(), 'Asian Skin: Physiological Differenzces and Appropriate Treatments')]`,
    bodyTreatments: `//h2[contains(text(), 'Body Treatments')]`,
    boostingProfitTreatments: `//h2[contains(text(), 'Boosting Profit with Professional Treatments')]`,
    correctiveFacialsExtractions: `//h2[contains(text(), 'Corrective Facials & Extractions')]`,
    dailyCareProductOverview: `//h2[contains(text(), 'Daily Care Product Overview')]`,
    hormonallyInducedAcne: `//h2[contains(text(), 'Discover the Intricacies of Adult Hormonally Induced Acne: A Physician's Point of View')]`,
    enhancedMerchandising: `//h2[contains(text(), 'Enhanced Merchandising')]`,
    enhancingYourServicesMembership: `//h2[contains(text(), 'Enhancing  your  Services Membership')]`,
    enhancingDermaplaning: `//h2[contains(text(), 'Enhancing Dermaplaning with PCA SKIN®')]`,
    enhancingInjectables: `//h2[contains(text(), 'Enhancing Injectables with PCA SKIN®')]`,
    enhancingIpl: `//h2[contains(text(), 'Enhancing IPL with PCA SKIN®')]`,
    enhancingLed: `//h2[contains(text(), 'Enhancing LED with PCA SKIN®')]`,
    enhancingMicrocurrent: `//h2[contains(text(), 'Enhancing Microcurrent with PCA SKIN®')]`,
    enhancingMicrodermabrasion: `//h2[contains(text(), 'Enhancing Microdermabrasion with PCA SKIN®')]`,
    enhancingMicroneedling: `//h2[contains(text(), 'Enhancing Microneedling with PCA SKIN®')]`,
    enhancingRadioFrequency: `//h2[contains(text(), 'Enhancing Radiofrequency with PCA SKIN®')]`,
    enhancingStudentCurriculum: `//h2[contains(text(), 'Enhancing Student Curriculum')]`,
    enhancingUltraSound: `//h2[contains(text(), 'Enhancing Ultrasound with PCA SKIN®')]`,
    exploringAging: `//h2[contains(text(), 'Exploring Intrinsic & Extrinsic Aging')]`,
    intrinsicExtrinsicAging: `//h2[contains(text(), 'Extrinsic and Intrinsic Aging Factors: Prevention and Treatment: A Physician’s Point of View')]`,
    skinCancerProtection: `//h2[contains(text(), 'Fundamentals of Skin Cancer and Protection')]`,
    hyperpigmentationMembership: `//h2[contains(text(), 'Hyperpigmentation Membership')]`,
    treatingRosacea: `//h2[contains(text(), 'Identifying & Treating Papulopustular Rosacea')]`,
    treatingAcneIngredients: `//h2[contains(text(), 'Ingredients for Treating Acne')]`,
    treatingAgingSkinIngredients: `//h2[contains(text(), 'Ingredients for Treating Aging Skin')]`,
    treatingSensitiveSkinIngredients: `//h2[contains(text(), 'Ingredients for Treating Sensitive Skin')]`,
    mpairedBarrierFunction: `//h2[contains(text(), 'Investigating Impaired Barrier Function')]`,
    lasersPhysicianView: `//h2[contains(text(), \`Lasers & PCA: Physician's Point of View\`)]`,
    lasersPcaSkin: `//h2[contains(text(), 'Lasers and PCA SKIN®')]`,
    fitzpatrickScale: `//h2[contains(text(), 'Looking Deeper than the Fitzpatrick Scale')]`,
    menopausalSkin: `//h2[contains(text(), 'Managing Menopausal Skin')]`,
    viewingCourses: `//div[contains(@class, 'pt-8 my-12 text-center load_more')]//p`,
    loadMoreButton: `//div[contains(@class, 'pt-8 my-12 text-center load_more')]//button`,
    expandYourTreatment: `//p[contains(text(),'Expand your treatment plans and options for your p')]`,
    identifyKey: `//p[contains(text(),'Identify key ingredients, indications and contra')]`,
    createComprehensive: `//p[contains(text(),'Create comprehensive treatment plans by expand')]`,
    confidentlyAddress: `//p[contains(text(),'Confidently address fears and misconceptions re')]`,
    useYour$250: `//p[contains(text(),'Use your $250 product credit on any PCA SKIN pr')]`,
    thisondemand: `//p[contains(text(),'This on-demand video course will take you throu')]`,
    carolynJacob: `//p[contains(text(),'Carolyn Jacob, MD - Board-Certified Dermatologi')]`,
    theIntricacies: `//p[contains(text(),'The intricacies of the most common sensitive sk')]`,
    ingredients: `//p[contains(text(),'Ingredients that effectively treat this conditi')]`,
    become: `//p[contains(text(),'Become an expert in the most common skin care i')]`,
    definePCA: `//p[contains(text(),'Define PCA SKINs formulating philosophy.')]`,
    identifyTheMost: `//p[contains(text(),'Identify the most common ingredients used in th')]`,
    confidentlyRecommend: `//p[contains(text(),'Confidently recommend PCA SKIN products that in')]`,
    module1: `//p[contains(text(),'Module 1: Humectants, Occlusives, GAGs, AHAs, B')]`,
    module2: `//p[contains(text(),'Module 2: Antioxidants and Melanogenesis Inhibi')]`,
    module3: `//p[contains(text(),'Module 3: Acne Control, Stem Cells and Matric M')]`,
    anEstimated: `//p[contains(text(),'An estimated 16 million Americans have rosacea')]`,
    understand: `//p[contains(text(),'Understand the disease pathway of rosacea in ge')]`,
    gainClarity: `//p[contains(text(),'Gain clarity about previous beliefs and potenti')]`,
    identifyTopical: `//p[contains(text(),'Identify topical ingredients that are safe and ')]`,
    confidentlyRecommendDaily: `//p[contains(text(),'Confidently recommend daily care regimens and p')]`,
    learnHowIngredients: `//p[contains(text(),'Learn how ingredients other than hydroquinone t')]`,
    understandTheCares: `//p[contains(text(),'Understand the CARES Act and how it has impacte')]`,
    defineTheMelanogenesis: `//p[contains(text(),'Define the melanogenesis process.')]`,
    identifyCertain: `//p[contains(text(),'Identify certain ingredients that inhibit melano')]`,
    confidentlyRecommendTheMost: `//p[contains(text(),'Confidently recommend the most effective PCA SK')]`,
    becomeAnExpert: `//p[contains(text(),'Become an expert in treating acne with this con')]`,
    accessAllOnline: `//p[contains(text(),'Access all online education related to the trea')]`,
    daysFrom: `//p[contains(text(),'365 days from the purchase date of the membersh')]`,
    approximatelyMillion: `//p[contains(text(),'Approximately 20 million Americans have acne th')]`,
    understandThe: `//p[contains(text(),'Understand the pathogenesis of acne and common ')]`,
    DefineAcne: `//p[contains(text(),'Define acne scarring categories and types.')]`,
    discussTreatment: `//p[contains(text(),'Discuss treatment recommendations to control, m')]`,
    inThisCondition: `//p[contains(text(),'In this condition-specific module focused on ad')]`,
    understandThePhysiological: `//p[contains(text(),'Understand the physiological causes of all type')]`,
    identifyCommon: `//p[contains(text(),'Identify common contributors to adolescent acne')]`,
    selectTopical: `//p[contains(text(),'Select topical ingredients effective in prevent')]`,
    inCorporateNew: `//p[contains(text(),'Incorporate new professional treatment and dail')]`,
    deeperWrinkling: `//p[contains(text(),'Deeper wrinkling is caused by extrinsic factors')]`,
    understandCauses: `//p[contains(text(),'Understand causes of advanced aging leading to ')]`,
    selectFormulations: `//p[contains(text(),'Select formulations targeting these causes.')]`,
    unCoverPcaSkins: `//p[contains(text(),'Uncover PCA SKIN’s advanced treatment philosoph')]`,
    understandPcaSkins: `//p[contains(text(),'Understand PCA SKIN’s advanced treatment philos')]`,
    confidentlyCombine: `//p[contains(text(),'Confidently combine professional treatments and')]`,
    understandAdvanced: `//p[contains(text(),'Understand advanced treatment guidelines, avoid')]`,
    hormonallyInduced: `//p[contains(text(),'Hormonally induced hyperpigmentation, or melasm')]`,
    understandTheComplexity: `//p[contains(text(),'Understand the complexity and physiological dif')]`,
    combinePcaSkinTreatments: `//p[contains(text(),'Combine PCA SKIN treatments and daily care regi')]`,
    gainKnowledgeAround: `//p[contains(text(),'Gain knowledge around the etiology of hypopigme')]`,
    understandHypopigmented: `//p[contains(text(),'Understand hypopigmented skin complexity and ph')]`,
    defineDifferentTypes: `//p[contains(text(),'Define different types and causes of hypopigmen')]`,
    identifyAppropriate: `//p[contains(text(),'Identify appropriate treatments for hypopigment')]`,
    inThisWebinar: `//p[contains(text(),'In this webinar, uncover the complexity of comm')]`,
    understandTheScience: `//p[contains(text(),'Understand the science behind antioxidants’ ben')]`,
    identifyUsesForPcaSkin: `//p[contains(text(),'Identify uses for PCA SKIN products with antiox')]`,
    explainBenefits: `//p[contains(text(),'Explain benefits to patients based on antioxid')]`,
    favouriteIcon: `(//div[contains(@class,'flex flex')]//button[contains(@class,'fav-icon')])[1]`,
    unselectFavouriteToast: `//div[contains(@class,'Toastify__toast')]//div[contains(text(),'Removed From Favorite')]`,
    selectFavouriteToast: `//div[contains(@class,'Toastify__toast')]//div[contains(text(),'Added To Favorite')]`,


    povOfPhysicianRestrictedCourseStudent: `//div[contains(@class,'course-card-content-wrapper ')]//h2[contains(text(),'Point of View')]`,


    academyMenuListHeader: `//li[contains(@class,'navigation-menu-list')]//a[text()='Academy']`,
    fundamentalCoursesUnderAcademy: "//div[contains(@class,'navigation-submenu')] //a[@title='Fundamental courses']",
    courseListPageCLP: `//div[contains(@class,'col-span')]//h1[contains(text(),'Fundamental Courses')]`,
    antioxidantsImage: `//div[@aria-label="Antioxidants: Expect More"]//img`,
    antioxidantsProductTitle: `//div[contains(@aria-label,'Antioxidants: Expect More')]//h2[contains(text(),'Antioxidants: Expect More')]`,
    antioxidantsProductRating: `//div[contains(@aria-label,'Antioxidants: Expect More')]//div[contains(@data-bv-show,'inline_rating')]//a`,
    antioxidantsProductFirstDescription: `//div[contains(@aria-label,'Antioxidants: Expect More')]//div[contains(@class,'mt-2')]`,
    antioxidantsProductSecondDescription: `(//div[contains(@aria-label,'Antioxidants: Expect More')]//div[contains(@class,'text-sm')]//p)[1]`,
    learnMoreBtn: `//div[contains(@aria-label,'Antioxidants: Expect More')]//div[contains(@class,'items-start')]//a[contains(text(),'Learn More')]`,
    redirectCDPPage: `//div[contains(@class,'course-info')]//h1[contains(text(),'Antioxidants: Expect More')]`,

    loadMoreBtnCLP: `//div[contains(@class,'load_more')]//button[contains(text(),'Load More')]`,
    productscountBeforeClickLoadMoreCLP: `//div[contains(@class,'load_more')]//p[contains(text(),'Viewing 6 out of 10 courses')]`,
    productscountAfterClickLoadMoreCLP: `//div[contains(@class,'load_more')]//p[contains(text(),'Viewing 10 out of 10 courses')]`,

    leftMenuCourseTitleMain: `//div[contains(@class,'container ')]//h3[contains(text(),'Courses')]`,
    countOfAllCourse: `//div[contains(@class,'items-center')]//div[contains(text(),'courses')]`, // This is applicable for all course
    academyViewAll: `//li[contains(@class,'sub-sub-cta')]//a[contains(@aria-label,'View All : Courses')]`,

    titleOfAllCourses: `//div[contains(@class,'col-span')]//h1[contains(text(),'All Courses')]`,
    titleOfEducationMemberships: `//div[contains(@class,'col-span')]//h1[contains(text(),'Education Memberships')]`,
    titleOfFundamentalCourses: `//div[contains(@class,'col-span')]//h1[contains(text(),'Fundamental Courses')]`,
    titleOfCertificationCourses: `//div[contains(@class,'col-span')]//h1[contains(text(),'Certification Courses')]`,
    titleOfAcne: `//div[contains(@class,'col-span')]//h1[contains(text(),'Acne')]`,
    titleOfAging: `//div[contains(@class,'col-span')]//h1[contains(text(),'Aging')]`,
    titleOfHyperpigmentation: `//div[contains(@class,'col-span')]//h1[contains(text(),'Hyperpigmentation')]`,
    titleOfSensitiveSkin: `//div[contains(@class,'col-span')]//h1[contains(text(),'Sensitive Skin')]`,
    titleOfEnhancingYourServices: `//div[contains(@class,'col-span')]//h1[contains(text(),'Enhancing Your Services')]`,
    titleOfBusinessBuilding: `//div[contains(@class,'col-span')]//h1[contains(text(),'Business Building')]`,
    titleOfStudentCourses: `//div[contains(@class,'col-span')]//h1[contains(text(),'Student Courses')]`,
    titleOfNationalSeminars: `//div[contains(@class,'col-span')]//h1[contains(text(),'National Seminars')]`,
    titleOfAPhysiciansPointofView: `//div[contains(@class,'col-span')]//h1[contains(text(),"Point of View")]`,
    titleOfMulticulturalSkin: `//div[contains(@class,'col-span')]//h1[contains(text(),'Multicultural Skin')]`,
    titleOfPeelApplicationVideos: `//div[contains(@class,'col-span')]//h1[contains(text(),'Peel Application Videos')]`,


    clpDeepDiveIntoProfessionalProductName: `//div[contains(@class,'course-card')]//h2[contains(text(),'A Deep Dive Into Professional Products')]`,
    clpDeepDiveIntoProfessionalProductAddToFavorite: `//div[@aria-label='A Deep Dive Into Professional Products']//button[contains(@class,'favorite-button')]`,
    clpCourseTab: `//div[contains(@class,'tab-list')]//button[text()='Courses']`,//click course button
    clpProductTab: `/div[contains(@class,'tab-list')]//button[text()='Products']`,
    clpDeepDiveIntoProfessionalProductRemoveFromFavorite: `//div[@aria-label='A Deep Dive Into Professional Products']//button[contains(@class,'remove-favorite')]`,

    allCourseSelected: `//div[contains(@class,'col-span')]//h1[text()='All Courses']`,
    allCourseSelectedTotalNumber: `div.items-center div:has-text('courses')`,
    educationMembershipSelected: `//div[contains(@class,'col-span')]//h1[text()='Education Memberships']`,
    educationMembershipSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '7 courses')]`, //change the contains text number
    fundamentalCourseSelected: `//div[contains(@class,'col-span')]//h1[text()='Fundamental Courses']`,
    fundamentalCourseSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '10 courses')]`,
    certificationCourseSelected: `//div[contains(@class,'col-span')]//h1[text()='Certification Courses']`,
    certificationCourseSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '2 courses')]`,
    acneSelected: `//div[contains(@class,'col-span')]//h1[text()='Acne']`,
    acneSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '4 courses')]`,
    agingSelected: `//div[contains(@class,'col-span')]//h1[text()='Aging']`,
    agingSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '4 courses')]`,
    hyperpigmentationSelected: `//div[contains(@class,'col-span')]//h1[text()='Hyperpigmentation']`,
    hyperpigmentationSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '5 courses')]`,
    sensitiveSkinSelected: `//div[contains(@class,'col-span')]//h1[text()='Sensitive Skin']`,
    sensitiveSkinSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '5 courses')]`,
    enhanchingYourService: `//div[contains(@class,'col-span')]//h1[text()='Enhancing Your Services']`,
    enhanchingYourServiceTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '15 courses')]`,
    buildingBusinessSelected: `//div[contains(@class,'col-span')]//h1[text()='Business Building']`,
    buildingBusinessSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '6 courses')]`,
    studentCoursesSelected: `//div[contains(@class,'col-span')]//h1[text()='Student Courses']`,
    studentCoursesSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '3 courses')]`,
    nationalSeminarsSelected: `//div[contains(@class,'col-span')]//h1[text()='National Seminars']`,
    nationalSeminarsSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '6 courses')]`,
    multiculturalSkinSelected: `//div[contains(@class,'col-span')]//h1[text()='Multicultural Skin']`,
    multiculturalSkinSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '3 courses')]`,
    peelApplicationVideosSelected: `//div[contains(@class,'col-span')]//h1[text()='Peel Application Videos']`,
    peelApplicationVideosSelectedTotalNumber: `//div[contains(@class, 'col-span-12')]//div//div[contains(@class, 'font-bold') and contains(text(), '5 courses')]`,

    aDeepDownIntoProfessionalProducts: `//div[@aria-label='A Deep Dive Into Professional Products']`, //change product name
    aDeepDownIntoProfessionalProductsLearnMoreBtn: `//a[@aria-label='Learn More A Deep Dive Into Professional Products']`,//change aria label for another product
    aDeepDownIntoProfessionalProductsDetailsPage: `//h1[text()='A Deep Dive Into Professional Products']`, //course heading in course details page `,



    educationMemberShipCourseAcneMembership: `//div[@aria-label='Acne Membership']`,
    educationMemberproductImageAcne: `//div[contains(@class,'course-card')]//a[@aria-label='Acne Membership']//picture[@class='lazyload-true is-loaded']`, //change the aria label
    educationMemberproductNameAcne: `//div[contains(@class,'course-card')]//h2[text()='Acne Membership']`, //change the text of product
    educationMemberproductRatingAcne: `//h2[text()='Acne Membership']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,//change text
    educationMemberproductDescriptionAcne: `//h2[text()='Acne Membership']//following-sibling::div[contains(@class, 'pt-2')]`,//change the text for other products
    educationMemberproductLearnMoreBtnAcne: `//a[@aria-label='Learn More Acne Membership']`,//change aria label for another product
    educationMemberproductFavoriteBtnAcne: `//div[@aria-label='Acne Membership']//button[contains(@class,'favorite-button')]`,//change the aria label name
    educationMembershipCourseDeatailPage: `//h1[text()='Acne Membership']`, //course heading in course details page 

    //reviewPage
    courseReviewStar: `//div[@class='bv_main_container']//div[@class='bv_stars_component_container']`,//5 star icon
    courseHoverOverStar: `//div[@id='bv_components_histogram']`, //hovering over star
    courseHoverOverStarReadReviewbtn: `//div[@id='bv_components_histogram']//button[@type='button']`, //click read review btn
    courseReviewSections: `//div[@data-bv-show='reviews']`, //review sections
    courseReviewRating: `//div[@class='bv_main_container']//div[@itemprop='ratingValue']`,//rating value
    courseReviewTotalView: `//div[@class='bv_main_container']//div[@class='bv_numReviews_component_container']`, //total views
    courseReviewWriteReviewBtn: `//div[@class='bv_main_container']//button[text()='Write a review ']`,//write a review buttn
    courseMyReviewModule: `div.ips__sc-152gkq8-1.kGuDqT`,//my review module will openes

    toastMessageAddedToFav: `//div[@id='add-to-favorite-api-success']//div[text()='Added To Favorite']`, //toast message locater will BE same for every course favorite category
    toastMessageRemoveFromFav: `//div[@id='remove-from-favorite-api-sucess']//div[text()='Removed From Favorite']`, //toast message locater will BE same for every course favorite category


    fundamentalCourseAntioxidants: `//div[@aria-label='Antioxidants: Expect More']`,
    fundamentalCourseproductImageAntioxidants: `//div[contains(@class,'course-card')]//a[@aria-label='Antioxidants: Expect More']//picture[@class='lazyload-true is-loaded']`,
    fundamentalCourseproductNameAntioxidants: `//div[contains(@class,'course-card')]//h2[text()='Antioxidants: Expect More']`,
    fundamentalCourseproductRatingAntioxidants: `//h2[text()='Antioxidants: Expect More']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    fundamentalCourseproductDescriptionAntioxidants: `//h2[text()='Antioxidants: Expect More']//following-sibling::div[contains(@class, 'pt-2')]`,
    fundamentalCourseproductLearnMoreBtnAntioxidants: `//a[@aria-label='Learn More Antioxidants: Expect More']`,
    fundamentalCourseproductFavoriteBtnAntioxidants: `//div[@aria-label='Antioxidants: Expect More']//button[contains(@class,'favorite-button')]`,
    fundamentalCourseDetailsPage: `//h1[text()='Antioxidants: Expect More']`, //course heading in course details page

    certificationCourseProfessionalPeel: `//div[@aria-label='Professional Peel Certification']`,
    certificationCourseproductImageProfessionalPeel: `//div[contains(@class,'course-card')]//a[@aria-label='Professional Peel Certification']//picture[@class='lazyload-true is-loaded']`,
    certificationCourseproductNameProfessionalPeel: `//div[contains(@class,'course-card')]//h2[text()='Professional Peel Certification']`,
    certificationCourseproductRatingProfessionalPeel: `//h2[text()='Professional Peel Certification']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    certificationCourseproductDescriptionProfessionalPeel: `//h2[text()='Professional Peel Certification']//following-sibling::div[contains(@class, 'pt-2')]`,
    certificationCourseproductLearMoreBtnProfessionalPeel: `//a[@aria-label='Learn More Professional Peel Certification']`,
    certificationCourseproductFavoriteBtnProfessionalPeel: `//div[@aria-label='Professional Peel Certification']//button[contains(@class,'favorite-button')]`,
    certificationCourseDetailPage: `//h1[text()='Professional Peel Certification']`,
    certificationCourseProfessionalPeelPleaseNote: `//div[contains(@class,'mt-8 leading-6 ')]//p`, //note message under description

    certificationCoureInPersonFundamentalPeelCertification: `//div[@aria-label='In Person Fundamental Peel Certification']`,//course is presnt
    certificationCourseInPersonFundamentalPeelCertificationlLearMoreBt: `//a[@aria-label='Learn More In Person Fundamental Peel Certification']`,
    certificationCourseInPersonFundamentalPeelCertificationlDetailPage: `//h1[text()='In Person Fundamental Peel Certification']`,  //course heading
    certificationCourseInPersonFundamentalPeelCertificationlDetailPagePriceTage: `//div[contains(@class,'font-light ')]`, //price tag





    acneCourseAcneScarring: `//div[@aria-label='Acne Scarring']`,
    acneCourseImageAcneCourse: `//div[contains(@class,'course-card')]//a[@aria-label='Acne Scarring']//picture[@class='lazyload-true is-loaded']`,
    acnepCourseNameAcneCourse: `//div[contains(@class,'course-card')]//h2[text()='Acne Scarring']`,
    acnepCourseRatingAcneCourse: `//h2[text()='Acne Scarring']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    acneCourseDescriptionAcneCourse: `//h2[text()='Acne Scarring']//following-sibling::div[contains(@class, 'pt-2')]`,
    acneCourseLearnMoreAcneCourse: `//a[@aria-label='Learn More Acne Scarring']`,
    acneCourseFavouriteAcneCourse: `//div[@aria-label='Acne Scarring']//button[contains(@class,'favorite-button')]`,
    acneCourseDetailsPage: `//h1[text()='Acne Scarring']`,


    agingproductTreatingAgingSkin: `//div[@aria-label='Ingredients for Treating Aging Skin']`,
    agingproductImageTreatingAgingSkin: `//div[contains(@class,'course-card')]//a[@aria-label='Ingredients for Treating Aging Skin']//picture[@class='lazyload-true is-loaded']`,
    agingproductNameTreatingAgingSkin: `//div[contains(@class,'course-card')]//h2[text()='Ingredients for Treating Aging Skin']`,
    agingproductRatingTreatingAgingSkin: `//h2[text()='Ingredients for Treating Aging Skin']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    agingproductDescriptionTreatingAgingSkin: `//h2[text()='Ingredients for Treating Aging Skin']//following-sibling::div[contains(@class, 'pt-2')]`,
    agingproductLearnMoreTreatingAgingSkin: `//a[@aria-label='Learn More Ingredients for Treating Aging Skin']`,
    agingproductFavouriteTreatingAgingSkin: `//div[@aria-label='Ingredients for Treating Aging Skin']//button[contains(@class,'favorite-button')]`,
    agingCourseDetailPage: `//h1[text()='Ingredients for Treating Aging Skin']`,


    hyperpigmentationpCourseLooktMelasma: `//div[@aria-label='An In Depth Look at Melasma']`,
    hyperpigmentationproductImageLooktMelasma: `//div[contains(@class,'course-card')]//a[@aria-label='An In Depth Look at Melasma']//picture[@class='lazyload-true is-loaded']`,
    hyperpigmentationproductNameLooktMelasma: `//div[contains(@class,'course-card')]//h2[text()='An In Depth Look at Melasma']`,
    hyperpigmentationproductRatingLooktMelasma: `//h2[text()='An In Depth Look at Melasma']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    hyperpigmentationproductDescriptionLooktMelasma: `//h2[text()='An In Depth Look at Melasma']//following-sibling::div[contains(@class, 'pt-2')]`,
    hyperpigmentationproductLearnMoreLooktMelasma: `//a[@aria-label='Learn More An In Depth Look at Melasma']`,
    hyperpigmentationgproductFavouriteLooktMelasma: `//div[@aria-label='An In Depth Look at Melasma']//button[contains(@class,'favorite-button')]`,
    hyperpigmentationpCourseDetailsPage: `//h1[text()='An In Depth Look at Melasma']`,


    sensitiveSkinCourseUnderstandingofRosacea: `//div[@aria-label='A Deeper Understanding of Rosacea']`,
    sensitiveSkingproductImageUnderstandingofRosacea: `//div[contains(@class,'course-card')]//a[@aria-label='A Deeper Understanding of Rosacea']//picture[@class='lazyload-true is-loaded']`,
    sensitiveSkingproductNameUnderstandingofRosacea: `//div[contains(@class,'course-card')]//h2[text()='A Deeper Understanding of Rosacea']`,
    sensitiveSkinproductRatingUnderstandingofRosacea: `//h2[text()='A Deeper Understanding of Rosacea']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    sensitiveSkinproductDescriptionUnderstandingofRosacea: `//h2[text()='A Deeper Understanding of Rosacea']//following-sibling::div[contains(@class, 'pt-2')] `,
    sensitiveSkinproductLearnMoreUnderstandingofRosacea: `//a[@aria-label='Learn More A Deeper Understanding of Rosacea']`,
    sensitiveSkinproductFavouriteUnderstandingofRosacea: `//div[@aria-label='A Deeper Understanding of Rosacea']//button[contains(@class,'favorite-button')]`,
    sensitiveSkinCourseDetailPag: `//h1[text()='A Deeper Understanding of Rosacea']`,


    enhancingServiveCourseBodyTreatments: `//div[@aria-label='Body Treatments']`,
    enhancingServicegproductImageBodyTreatments: `//div[contains(@class,'course-card')]//a[@aria-label='Body Treatments']//picture[@class='lazyload-true is-loaded']`,
    enhancingServiceproductNameBodyTreatments: `//div[contains(@class,'course-card')]//h2[text()='Body Treatments']`,
    enhancingServiceproductRatingBodyTreatments: `//h2[text()='Body Treatments']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    enhancingServiceproductDescriptionBodyTreatments: ` //h2[text()='Body Treatments']//following-sibling::div[contains(@class, 'pt-2')] `,
    enhancingServiceproductLearnMoreBodyTreatments: `//a[@aria-label='Learn More Body Treatments']`,
    enhancingServiceproductFavouriteBodyTreatments: `//div[@aria-label='Body Treatments']//button[contains(@class,'favorite-button')]`,
    enhancingServiceCourseDetailsPage: `//h1[text()='Body Treatments']`,


    businessBuildingpMerchandising: `//div[@aria-label='Enhanced Merchandising']`,
    businessBuildingproductImageMerchandising: `//div[contains(@class,'course-card')]//a[@aria-label='Enhanced Merchandising']//picture[@class='lazyload-true is-loaded']`,
    businessBuildingproductNameMerchandising: `//div[contains(@class,'course-card')]//h2[text()='Enhanced Merchandising']`,
    businessBuildingproductRatingMerchandising: `//h2[text()='Enhanced Merchandising']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    businessBuildingproductDescriptionMerchandising: ` //h2[text()='Enhanced Merchandising']//following-sibling::div[contains(@class, 'pt-2')] `,
    businessBuildingproductLearnMoreMerchandising: `//a[@aria-label='Learn More Enhanced Merchandising']`,
    businessBuildingproductFavouriteMerchandising: `//div[@aria-label='Enhanced Merchandising']//button[contains(@class,'favorite-button')]`,
    businessBuildingMerchandisingDetailsPage: `//h1[text()='Enhanced Merchandising']`,



    studentCourseStudentCurriculum: `//div[@aria-label='Enhancing Student Curriculum']`,
    studentCourseproductImageStudentCurriculum: `//div[contains(@class,'course-card')]//a[@aria-label='Enhancing Student Curriculum']//picture[@class='lazyload-true is-loaded']`,
    studentCourseproductNameStudentCurriculum: `//div[contains(@class,'course-card')]//h2[text()='Enhancing Student Curriculum']`,
    studentCourseroductRatingStudentCurriculum: `//h2[text()='Enhancing Student Curriculum']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    studentCourseproductDescriptionStudentCurriculum: ` //h2[text()='Enhancing Student Curriculum']//following-sibling::div[contains(@class, 'pt-2')] `,
    studentCourseproductLearnMoreStudentCurriculum: `//a[@aria-label='Learn More Enhancing Student Curriculum']`,
    studentCourseproductFavouriteStudentCurriculum: `//div[@aria-label='Enhancing Student Curriculum']//div[text()='Favorite']`,
    studentCourseStudentCurriculumDetailsPage: `//h1[text()='Enhancing Student Curriculum']`,


    nationalSeminarCoursePeelingCharlotte: `//div[@aria-label='Mastering the Art of Peeling Charlotte, NC 10.25']`,
    nationalSeminarproductImagePeelingCharlotte: `//div[contains(@class,'course-card')]//a[@aria-label='Mastering the Art of Peeling Charlotte, NC 10.25']//picture[@class='lazyload-true is-loaded']`,
    nationalSeminarproductNamePeelingCharlotte: `//div[contains(@class,'course-card')]//h2[text()='Mastering the Art of Peeling Charlotte, NC 10.25']`,
    nationalSeminarproductRatingPeelingCharlotte: `//h2[text()='Mastering the Art of Peeling Charlotte, NC 10.25']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    nationalSeminarproductDescriptionPeelingCharlotte: ` //h2[text()='Mastering the Art of Peeling Charlotte, NC 10.25']//following-sibling::div[contains(@class, 'pt-2')] `,
    nationalSeminarproductLearnMorePeelingCharlotte: `//a[@aria-label='Learn More Mastering the Art of Peeling Charlotte, NC 10.25']`,
    nationalSeminarproductFavouritePeelingCharlotte: `//div[@aria-label='Mastering the Art of Peeling Charlotte, NC 10.25']//button[contains(@class,'favorite-button')]`,
    nationalSeminarCourseDetailsPage: `//h1[text()='Mastering the Art of Peeling Charlotte, NC 10.25']`,


    multiculturalSkinCourseSkinOfColor: `//div[@aria-label='Skin of Color']`,
    multiculturalSkinproductImageSkinOfColor: `//a[@aria-label='Skin of Color']//img[@class='object-cover']`,
    multiculturalSkinproductNameSkinOfColor: `//div[contains(@class,'course-card')]//h2[text()='Skin of Color']`,
    multiculturalSkinproductRatingSkinOfColor: `//h2[text()='Skin of Color']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    multiculturalSkinproductDescriptionSkinOfColor: ` //h2[text()='Skin of Color']//following-sibling::div[contains(@class, 'pt-2')] `,
    multiculturalSkinproductLearnMoreSkinOfColor: `//a[@aria-label='Learn More Skin of Color']`,
    multiculturalSkinproductFavouriteSkinOfColor: `//div[@aria-label='Skin of Color']//button[contains(@class,'favorite-button')]`,
    multiculturalSkinCourseDetailsPage: `//h1[text()='Skin of Color']`,


    peelApplicationCourseMDPeel: `//div[@aria-label='MD Peel (CCl3) Application Video']`,
    peelApplicationCourseImageMDPeel: `//a[@aria-label='MD Peel (CCl3) Application Video']//img[@class='object-cover']`,
    peelApplicationCourseNameMDPeel: `//div[contains(@class,'course-card')]//h2[text()='MD Peel (CCl3) Application Video']`,
    peelApplicationCourseRatingMDPeel: `//h2[text()='MD Peel (CCl3) Application Video']//following-sibling::div//div[@data-bv-show='inline_rating']//div[contains(@class, 'bv_sub_container')]`,
    peelApplicationCourseDescriptionMDPeel: ` //h2[text()='MD Peel (CCl3) Application Video']//following-sibling::div[contains(@class, 'pt-2')] `,
    peelApplicationCourseLearnMoreMDPeel: `//a[@aria-label='Learn More MD Peel (CCl3) Application Video']`,
    peelApplicationCourseFavouriteMDPeel: `//div[@aria-label='MD Peel (CCl3) Application Video']//button[contains(@class,'favorite-button')]`,
    peelApplicationCourseDetailsPage: `//h1[text()='MD Peel (CCl3) Application Video']`,


}