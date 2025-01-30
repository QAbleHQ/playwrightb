export const PLPLocators = {

    shop: `//a[normalize-space()='Shop']`,
    dailyCare: `//a[@title='Daily care']`,
    home: `//a[contains(@class, 'breadcrumbs-link')]`,
    allProducts: `//li[contains(@class, 'active-breadcrumb')]//span[text()='All Products']`,
    allProductsInBlue: `('div').filter({ hasText: /^All Products$/ }).click();`,
    acneCream: `('product-grid').getByLabel('Acne Cream false false').getByRole('link').first()`,
    acneGelwithOmniSome: `('Acne Gel with OmniSome® false').getByRole('link').first()`,
    activeBroad: `('Active Broad Spectrum SPF 45').getByRole('link').first().click();`,
    logIntoOrderAcneCream: `('product-grid').getByRole('button', { name: 'Log in to order Acne Cream' }).click();`,
    addToCartAcneCream: `('Acne Cream $20.00 / 0.5 oz.').getByRole('button', { name: 'Add to Cart' }).click();`,
    favoriteAcneCream: `'Acne Cream $20.00 / 0.5 oz.').getByRole('button', { name: 'Favorite Favorite not selected' }).click();`,
    acneGel: `('Acne Gel with OmniSome® $9.50').getByText('Quick ViewConsent not').click();`,
    selectSizeAcneGel: `('product-grid').getByLabel('Acne Gel with OmniSome® $9.50').getByRole('link', { name: 'Select Size' }).click();`,
    activeBroadSpec: `('product-grid').getByLabel('Active Broad Spectrum SPF 45').click();`,
    antiRedness: `('product-grid').getByLabel('Anti-Redness Serum $35.00 / 1').click();`,
    aprèsPeel: `('Après Peel® Hydrating Balm $').locator('a').filter({ hasText: 'Quick View' }).getByRole('link').click();`,
    bodyTherapy: `('Body Therapy $6.50-$36.00 / 1')`,
    bpo: `('BPO 5% Cleanser $22.00 / 7 oz.').click();`,
    cAndE: `('C&E Advanced $19.50-$64.50 /').click();`,
    handRenewal: `('C&E Hand Renewal $41.00 / 1')`,
    viewing: `('p').filter({ hasText: 'Viewing 9 out of 69 products' })`,
    loadMore: `('button', { name: 'Load More' })`,
    strength: `('C&E Strength Max $59.50 / 1')`,
    antioxidant: `('C-Quench® Antioxidant Serum $')`,
    clearskin: `('Clearskin $5.25-$75.00 / 1.7')`,
    collagenHydrator: `('Collagen Hydrator $5.25-$75.').locator('a').filter({ hasText: 'Quick View' }).getByRole('link')`,
    creamyCleanser: `('Creamy Cleanser $4.00-$19.00')`,
    dailyDefense: `('Daily Defense Broad Spectrum')`,
    dDMist: `('product-grid').getByLabel('Daily Defense Mist $26.00 / 2')`,
    dayandNight: `('Day and Night Hydration Set $')`,
    detoxifying: `('Detoxifying Mask $5.00-$33.50')`,
    dualAction: `('Dual Action Redness Relief $')`,
    exLineaPep: `('product-grid').getByLabel('ExLinea® Peptide Smoothing')`,
    exLineaPro: `('ExLinea® Pro Peptide Serum $')`,
    facialWash: `('Facial Wash $4.00-$32.00 / 7')`,
    facialWashOily: `('Facial Wash Oily/Problem $4.')`,
    hyaluronic: `('Hyaluronic Acid Boosting')`,
    hyaluronicAcid: `('Hyaluronic Acid Lip Booster $')`,
    microneedle: `('Hyaluronic Acid Microneedle')`,
    hydraBright: `('HydraBright $8.50-$50.00 / 1.')`,
    hydraLuxe: `('product-grid').getByLabel('HydraLuxe $27.75-$78.00 / 1.8')`,
    hydramatte: `('Hydramatte false false')`,
    hydratingMask: `('Hydrating Mask false false')`,
    hydratingSerum: `('product-grid').getByLabel('Hydrating Serum false false')`,
    hydratingToner: `('product-grid').getByLabel('Hydrating Toner false false')`,
    hydratorPlus: `('Hydrator Plus Broad Spectrum')`,
    restorative: `('Ideal Complex® restorative').getByRole('link').first()`,
    revitalizing: `('Ideal Complex® revitalizing')`,
    intensiveAge: `('product-grid').getByLabel('Intensive Age Refining')`,
    intensiveBrightening: `('Intensive Brightening')`,
    intensiveClarity: `('Intensive Clarity Treatment')`,
    microPeel: `('Micro Peel At-Home Kit false')`,
    nourished: `('Nourished and Bright Set')`,
    nutrientToner: `('Nutrient Toner')`,
    overnightLipMask: `('Overnight Lip Mask')`,
    perfectingNeckandDécolleté: `('Perfecting Neck and Décolleté')`,
    pigmentGelHQFree: `(Pigment Gel® HQ Free)`,
    pigmentGelPro: `(Pigment Gel® Pro)`,
    poreMinimizer: `(Pore Minimizer Skin Mattifying Gel)`,
    poreRefining: `(Pore Refining Treatment)`,
    proMaxAgeRenewal: `(Pro-Max Age Renewal)`,
    proMaxAgeRenewal6Piece: `(Pro-Max Age Renewal 6 Piece)`,
    purifyingMask: `(Purifying Mask)`,
    reBalance: `(ReBalance)`,
    rejuvenatingSerum: `(Rejuvenating Serum)`,
    resurfacingSerum: `(Resurfacing Serum)`,
    resveratrol: `(Resveratrol Restorative Complex)`,
    retinol: `(Retinol Treatment for Sensitive Skin)`,
    revitalizingMask: `(Revitalizing Mask)`,
    sheer: `(Sheer Tint Broad Spectrum SPF 45)`,
    silkcoat: `(Silkcoat® Balm)`,
    skin: `(Skin Procedure Ointment)`,
    smoothing: `(Smoothing Toner)`,
    testingTAP: `(TESTING TAP KIT)`,
    theEczema: `(The Eczema Solution)`,
    thePostProcedure: `(The Post-Procedure Solution kit)`,
    totalStrength: `(Total Strength Serum)`,
    vitaminb3: `(Vitamin b3 Brightening Serum)`,
    vitaminb3Eye: `(Vitamin b3 Eye Brightening Cream)`,
    weightless: `(Weightless Protection Broad Spectrum SPF 45)`,
    daily: `(Daily Cleansing Oil)`,
    hyaluronicAcidOvernight: `(Hyaluronic Acid Overnight Mask)`,


    quickViewButton: `div.product-card-main-wrapper button.quick-view-btn >> nth=0`,
    quickViewBtnBlemishControlBar: `div.product-card-content:has-text('Blemish Control Bar') div.quick-view-btn-container`,
    quickViewBtnActiveBroadSpecSPF45: `div.product-card-content:has-text('Active Broad Spectrum SPF 45') div.quick-view-btn-container`,
    hoverOnProductImg: `div.img-wrapper >> nth=0`,
    hoverOnblemishControlBarImg: `div.product-card-content:has-text('Blemish Control Bar')`,
    hoverscrollctiveBroadSpectrumSPF45: `div.product-card-content:has-text('Active Broad Spectrum SPF 45')`,
    quickViewDailog: `//div[contains(@id,"radix")]`,
    acneCreamProduct: `div.product-grid div.product-card-content:has-text('Acne Cream')`,
    activeBroadSpectrumSPF45Product: `div.product-grid div.product-card-content:has-text('Active Broad Spectrum SPF 45')`,
    blemishControlBarProduct: `div.product-grid div.product-card-content:has-text('Blemish Control Bar')`,
    activeBroadSpectrumSPF45: `div.quick-view-content-container button:has-text('Add to Cart')`,
    pCAPeelwithHydroquinoneResorcinolProduct: `div.product-card-content:has-text('Acne Gel with OmniSome®')`,
    studentOnlyAppliedFilter: `button.selected-filter:has-text('student-only')`,
    peelsAppliedFilter: `button.selected-filter:has-text('peels')`,
    normalAppliedFilter: `button.selected-filter:has-text('Normal')`,
    MDPeelCCl3Product: `div.product-grid div.product-card-content:has-text('MD Peel (CCl3)')`,
    RetinolPeelProduct: `div.product-card-content:has-text('4% Retinol Peel')`,
    studentOnlyPrice: `div.product-card-content div.price-wrapper`,
    studentOnlyQuickViewAddToCartBtn: `div.quick-view-product-info button:has-text('Add to Cart')`,
    studentQuickViewCloseBtn: `span.close-icon-default`,
    quickViewProductImage: `div.quick-view-content-container div.quick-view-img`,
    quickViewProductName: `div.quick-view-content-container h3`,
    quickViewSKU: `div.quick-view-content-container p:has-text('Item')`,
    quickViewRating: `div.quick-view-content-container div[data-bv-show="inline_rating"]`,
    quickViewProductPrice: `div.quick-view-content-container div.quick-view-price-display`,
    quickViewProductSubscriptionLink: `div.quick-view-product-info a:has-text('See more details and subscription options')`,
    quickViewQtySelector: `div.quick-view-product-info div.quantity-selector`,
    quickViewProductDescription: `//div[contains(@class, 'quick-view-content_product-description')]`,
    quickViewIncreaseButton: `span.increase-icon`,
    recentlyViewedProductsSection: `div.recently-viewed`,
    recentlyViewedProductCard: `div.recently-viewed div.product-card-content:has-text('MD Peel (CCl3)')`,
    recentlyViewedProductPrice: `div.recently-viewed div.product-card-content:has-text('Acne Cream') div.price-wrapper`,
    recentlyViewedAddToCartBtn: `div.more-to-explore-carousel div.product-card-main-wrapper button`,
    recentlyViewedSelectSizeBtn: `div.more-to-explore-carousel div.product-card-main-wrapper a:has-text('Select Size')`,
    recentlyViewedRestrictionMsg: `div.more-to-explore-carousel div.font-bold`,
    recentlyViewedAcneCreamProduct: `div.recently-viewed div.product-card-content:has-text('Acne Cream')`,
    recentlyViewedAcneCreamPrice: `div.recently-viewed div.product-card-content:has-text('Acne Cream') div.price-wrapper`,
    recentlyViewedAcneCreamAddToCartButton: `div.recently-viewed div.product-card-main-wrapper:has-text('Acne Cream') button`,
    recentlyViewedAcneGelwithOmniSomeProduct: `div.recently-viewed div.product-card-main-wrapper:has-text('Acne Gel with OmniSome®')`,
    recentlyViewedAcneGelwithOmniSomeSelectSizeBtn: `div.recently-viewed div.product-card-main-wrapper:has-text('Acne Gel with OmniSome®') a:has-text('Select Size')`,

    bestSellerSection: `div.popular-products.carousel-section`,
    bestSellerAcneCreamProduct: `div.popular-products.carousel-section div.product-card-content:has-text('Acne Cream') >> nth=1`,
    mdPeelCCL3Img: `div.product-grid div.product-card-content:has-text('MD Peel (CCl3)') img`,
    bestSellerNoPeelPeelRestrictionMsg: `div.more-to-explore-carousel div.product-card-main-wrapper:has-text('NoPeel Peel') div:has-text('Must be a verified professional to access wholesale pricing') >> nth =1`,
    bestSellerNoPeelPeelSelectSizeBtn: `div.more-to-explore-carousel div.product-card-main-wrapper:has-text('NoPeel Peel') button:has-text('Select Size') >> nth=1`,
    bestSellerNoPeelPeelAddToCartBtn: `div.more-to-explore-carousel div.product-card-main-wrapper:has-text('NoPeel Peel') button:has-text('Add to Cart') >> nth=1`,
    bestSellerNoPeelPeelPrice: `div.more-to-explore-carousel div.product-card-main-wrapper:has-text('NoPeel Peel') div.price-wrapper >> nth=1`,
    bestSellerNoPeelPeelProduct: `div.more-to-explore-carousel div.product-card-main-wrapper:has-text('NoPeel Peel') >> nth = 1`,
    bestSellerCAndEAdvancedSelectSizeBtn: `div.more-to-explore-carousel div.product-card-main-wrapper:has-text('C&E Advanced') a:has-text('Select Size') >> nth=1`,
    bestSellerAcneCreamPrice: `div.more-to-explore-carousel div.product-card-main-wrapper:has-text('Acne Cream') div.price-wrapper >> nth=1`,
    bestSellerAcneCreamAddToCartBtn: `div.more-to-explore-carousel div.product-card-main-wrapper:has-text('Acne Cream') button:has-text('Add to Cart') >> nth=1`,

    plpBreadCrumbTitle: `div.breadcrumb-title`,
    plpAcneCreamPriceWrapper: `div.product-grid div.product-card-content:has-text('Acne Cream') div.price-wrapper`,
    plpAcneCreamFavouriteBtn: `div.product-grid div.product-card-main-wrapper:has-text('Acne Cream') button.favorite-cta`,
    plpAcneCreamAddToCartBtn: `div.product-grid div.product-card-main-wrapper:has-text('Acne Cream') button:has-text('Add to Cart')`,
    plpMDPeelCCl3PriceWrapper: `div.product-grid div.product-card-content:has-text('MD Peel (CCl3)') div.price-wrapper`,
    plpMDPeelCCl3FavouriteBtn: `div.product-grid div.product-card-main-wrapper:has-text('MD Peel (CCl3)') button.favorite-cta`,
    plpMDPeelCCl3AddToCartBtn: `div.product-grid div.product-card-main-wrapper:has-text('MD Peel (CCl3)') button:has-text('Add to Cart')`,
    plpCreamyCleanserSelectSizeBtn: `div.product-grid div.product-card-main-wrapper:has-text('Creamy Cleanser') a:has-text('Select Size')`,
    plpRestrictionMsg: `div.product-grid:has-text('MD Peel (CCl3)') div.font-bold`,
    plpAcneGelProduct: `div.product-grid div.product-card-main-wrapper:has-text('Acne Gel with OmniSome®')`,
    plpAcneGelProductSelectSizeBtn: `div.product-grid div.product-card-main-wrapper:has-text('Acne Gel with OmniSome®') a:has-text('Select Size')`,
    plpFavouriteFilledBtn: `div.product-card-main-wrapper:has-text('Acne Cream') button div.favorite-cta-filled`,
    plpFavouriteOutlineBtn: `div.product-card-main-wrapper:has-text('Acne Cream') button div.favorite-cta-outline`,
    plpRemovedFromFavouriteToast: `//div[@id="remove-from-favorite-api-sucess"]`,
    plpAddedToFavouriteToast: `//div[@id="add-to-favorite-api-success"]`,

    productPrice: `(//div[contains(@class,'product-list')]//div[contains(@class,'price-wrapper')])[1]`,

    favouriteIcon: `(//div[contains(@class,'fav-compar')]//button[contains(@class,'favorite-button')])[1]`,
    selectFavouriteToast: `//div[contains(@id,'add-to-favorite-api-success')]//div[contains(text(),'Added To Favorite')]`,
    unselectFavouriteToast: `//div[contains(@id,'remove-from-favorite-api-sucess')]//div[text()='Removed From Favorite']`,
    selectFavouriteToastCloseBtn: `//div[contains(@id,'add-to-favorite-api-success')]//button`,
    unselectFavouriteToastCloseBtn: `//div[contains(@id,'remove-from-favorite-api-sucess')]//button`,

    selectSizeButton: `(//div[contains(@class,'product-card')]//a[contains(text(),'Select Size')])[1]`,

    //favorite and unfavorite products regardless of purchase eligibility
    favouriteIconRegardlessOfPurchaseEligibility: `(//div[contains(@class,'fav-compare-wrapper')]//div[contains(text(),'Favorite')])[1]`,
    selectFavouriteToastRegardlessofPurchaseEligibility: `//div[contains(@id,'add-to-favorite-api-success')]//div[contains(text(),'Added To Favorite')]`,
    removeFavouriteToastRegardlessofPurchaseEligibility: `//div[contains(@id,'remove-from-favorite-api-sucess')]//div[contains(text(),'Removed From Favorite')]`,
    selectFavouriteToastCloseBtnRegardlessOfPurchaseeEigibility: `//div[contains(@id,'add-to-favorite-api-success')]//button`,
    removeFavouriteToastCloseBtnRegardlessOfPurchaseEligibility: `//div[contains(@id,'remove-from-favorite-api-sucess')]//button`,

    //Notify Me Button
    notifyMeButton: `(//div[contains(@class,'product-card')]//button[contains(text(),'Notify Me')])[1]`,
    notifyMeButtonDialog: `//div[contains(@id,'radix-:Rdl9h5m:')]`,
    notifyMeDialogHeading: `//div[contains(@id,'radix-:Rdl9h5m:')]//h2`,
    notifyMeDialogMessageText: `//div[contains(@id,'radix-:Rdl9h5m:')]//p[contains(@id,'radix-:Rdl9h5mH2:')]`,
    notifyMeDialogProductNameText: `//div[contains(@id,'radix-:Rdl9h5m:')]//h4`,
    notifyMeDialogNameTextBox: `//div[contains(@id,'radix-:Rdl9h5m:')]//input[contains(@id,'name') and @placeholder='Name']`,
    notifyMeDialogEmailTextBox: `//div[contains(@id,'radix-:Rdl9h5m:')]//input[contains(@id,'email') and @placeholder='Email address']`,
    notifyMeDialogNotifyMeWhenAvailableBtn: `(//input[@value="Notify Me When Available"])[1]`,
    notifyMeDialogCloseBtn: `//div[contains(@id,'radix-:Rdl9h5m:')]//button[contains(@aria-label,'Close')]`,
    nameFieldIsRequired: `//div[contains(@id,'radix-:Rdl9h5m:')]//span[contains(text(),'Name is required')]`,
    emailFieldIsRequired: `//div[contains(@id,'radix-:Rdl9h5m:')]//span[contains(text(),'Email is required')]`,

    messageInsteadOffAddToCartAndSelectSize: `(//div[contains(@aria-label,'Acne Cream false false')]//div[contains(text(),'Must be a verified professional to access wholesale pricing')])[1]`, // Change Aria label to other product

    quickViewClpPageBtn: `(//div[contains(@class,'img-wrapper ')])[1]`,
    quickViewDialogBtn: `//div[contains(@id,'radix')]`,

    //QuickView for Restricted Products
    quickViewPlpPageRPBtn: `(//div[contains(@class,'img-wrapper ')]//button[contains(@aria-label,'Quick View')])[1]`,
    quickViewDialogRpBtn: `//div[contains(@id,'radix')]`,
    quickViewDialogRpMessageBtn: `//div[contains(@id,'radix')]//div[contains(text(),'Must be a verified professional to access wholesale pricing')]`,
    quickViewDialogRpPriceAndSizeBtn: `(//div[contains(@id,'radix')]//div[contains(@class,'view-price-display')])[1]`,
    quickViewDialogRpQuantityBtn: `(//div[contains(@id,'radix')]//div[contains(@class,'purchase-options')])[1]`,
    quickViewDialogrpAddToCartBtn: `//div[contains(@id,'radix')]//button[contains(text(),'Add to Cart')]`,

    //RecentView For Retricted Product
    pcaRecentViewProductLabel: `//div[contains(@class,'product-carousel-title')]//h3[text()='Recently Viewed Products']`,
    pcaRecentViewProductBestSellerBadge: `(//div[contains(@id,'swiper-wrapper')]//div[contains(@class,'product-badge')]//span[contains(text(),'Best-seller')])[1]`,
    pcaRecentViewProductProductListAcneCream: `(//div[contains(@id,'swiper-wrapper')]//div[contains(@aria-label,'Acne Cream')])[1]`,//Chnage Aria Labell for all other Product
    pcaRecentViewProductPrice: `(//div[contains(@id,'swiper-wrapper')]//div[contains(@aria-label,'Acne Cream')])//div[contains(@class,'price-wrapper')]`, //Chnage Aria Labell for all other Product
    pcaRecentViewProductAddToCartBtn: `//div[contains(@id,'swiper-wrapper')]//div[contains(@aria-label,'Acne Cream')]//button[contains(@aria-label,'Add to Cart')]`, //Chnage Aria Label product name for all other Product
    pcaRecentViewProductSelectSizeBtn: `(//div[contains(@id,'swiper-wrapper')]//div[contains(@aria-label,'Acne Gel with OmniSome®')]//a[contains(text(),'Select Size')])[1]`,//Chnage Aria Labell for all other Product
    pcaRecentViewProductNotifyMeBtn: `(//div[contains(@aria-label,'Hyaluronic Acid Overnight Mask')]//button[contains(text(),'Notify Me')])[1]`,//Chnage Aria Labell for all other Product
    pcaMessageinsteadoffAddToCartandSelectSize: `(//div[contains(@aria-label,'Acne Cream')]//div[contains(text(),'Must be a verified professional to access wholesale pricing')])[1]`,//Chnage Aria Labell for all other Product

    plprecentlyExploredcarouselRightactive: `//div[@class="swiper-button-next"]`,
    plprecentltExploredcarouselLeftactive: `//div[@class="swiper-button-prev"]`,
    plprecentltExploredcarouselRightinActive: `//div[@class="swiper-button-next swiper-button-disabled"]`,
    plprecentltExploredcarouselLeftinActive: `//div[@class="swiper-button-prev swiper-button-disabled"]`,

    // Login User
    plpProductPrice: `//span[contains(@class,'unit-price-wrapper')]//span[contains(@class,'product-card-price')]`,
    plpProductVarients: `//div[contains(@class,'product-card-sku')]//span[text()='Grape']`,
    plpBreadCrumbLabel: `//ul[contains(@class,'breadcrumb-label')]`,
    plpHeadingAllProducts: `//div[contains(@class, 'heading') and text()='All Products']`,
    plpHeadingFloss: `//div[contains(@class, 'heading') and text()='Floss']`,
    plpHeadingFluorideTherapy: `//div[contains(@class, 'heading') and text()='Fluoride Therapy']`,
    plpHeadingMouthwash: `//div[contains(@class, 'heading') and text()='Mouthwash']`,
    plpHeadingOralRinses: `//div[contains(@class, 'heading') and text()='Oral Rinses']`,
    plpHeadingToothBrushes: `//div[contains(@class, 'heading') and text()='Toothbrush']`,
    plpHeadingWhitening: `//div[contains(@class, 'heading') and text()='Whitening']`,

    plpSortDropDown: `//select[@id="sort-dropdown"]`,
    plpSortDropDownTopSelling: `//select[@id="sort-dropdown"]//option[text()='Top Selling']`,
    plpSortDropDownPriceLowToHigh: `//select[@id="sort-dropdown"]//option[text()='Price Low to High']`,
    plpSortDropDownPriceHighToLow: `//select[@id="sort-dropdown"]//option[text()='Price High to Low']`,

    plpTotalCountOfProducts: `//div[contains(@class,'plp-total-count')]//span`,
    plpLoadMorebtn: `//div[@aria-live="polite"]//button[text()='Load More']`,
    plpViewOutOfProduct: `//div[contains(@class,"loadmore")]//p`,
    plpSignInToOrderbtn: `//p[text()='Colgate® ZigZag® Toothbrush']//ancestor::div[contains(@class,'product-card-main')]//button`, // text can be changed according to the product name
    plpBestSellerbadge: `//div[@class="product-grid"]//p[text()='Colgate® 360® Deep Clean Compact Head Toothbrush']//ancestor::div[contains(@class,'product-card-main-wrapper')]//span`, // change the text to locate the specific badge
    plpSelectProductbtnforSpecificProduct: `//div[@class="product-grid"]//p[text()='Colgate® 360® Deep Clean Compact Head Toothbrush']//ancestor::div[contains(@class,'product-card-main-wrapper')]//a[text()='Select Product']`, // Change the Text to locate other products
    plpAddToCartbtnforSpecificProduct: `//div[@class="product-grid"]//p[text()='Colgate® Kids Cavity Protection Toothpaste']//ancestor::div[contains(@class,'product_card group')]//button[text()='Add to Cart']`,// Change the Text of the product to locate other products
    plpBestSellerBadgeCount: `//div[contains(@class, 'product-badge')]//span[text()='Best-Seller']`,
    linksBreadcrump: `div.breadcrumb-title nav li a:has-text('Home')`,
    currPageBreadCrump: `div.breadcrumb-title nav li span`,

    firstProductTitle: `(//p[contains(@class, 'product-name')])[1]`,

    plpAddToCartBtnAcneCream: `//div[@class="product-grid"]//p[text()='Acne Cream']//ancestor::div[contains(@class,'product_card group')]//button[text()='Add to Cart']`,
    plpAddToCartBtnQuickView: `//div[contains(@class, 'quick-view-product-info')]//button[text()='Add to Cart']`,
    plpAcneCreamTitle: `(//p[text()="Acne Cream"])[1]`,
    closeQuickViewButton: `span.close-icon-default`,




    //For Unauthenticated User
    quickViewBtnPlpPageUNu: `(//div[contains(@class,'img-wrapper ')]//button[contains(@aria-label,'Quick View')])[1]`,
    allProductsTitleUNu: `//div[contains(@class, 'heading') and text()='All Products']`,
    productPriceUNu: `(//div[contains(@class,'product-list')]//div[contains(@class,'price-wrapper')])[1]`,
    favouriteIconUNu: `(//div[contains(@class,'fav-compar')]//button[contains(@class,'favorite-button')])[1]`,

    notifyMeBtnUNu: `(//div[contains(@class,'product-card')]//button[contains(text(),'Notify Me')])[1]`,
    addtoCartBtnUNu: `//div[contains(@data-testid,'product-grid')]//div[contains(@aria-label,'Acne Cream')]//button[contains(@aria-label,'Add to Cart')]`,//Change Product name in aria label to other product
    selectSizeBtnUNu: `(//div[contains(@class,'product-card')]//a[contains(text(),'Select Size')])[1]`,
    //loginToOrderBtnUNu: `//div[contains(@aria-label,'Acne Cream ')]//..//child::button[text()='Log in to order']`, //Change Product name in aria label to other product
    loginToOrderBtnUNu: `(//div[contains(@class,'product-card-main')]//button[contains(@aria-label,'Log In to Order Acne Cream')])[1]`, //Change Product name in aria label to other product

    loginDialogBoxUNu: `//div[contains(@class,'sign-in-modal')]//div[contains(@id,'login-container')]//h1[contains(text(),'Customer Login')]`,

    loadMoreBtnUNu: `//div[contains(@class,'load_more')]//button[contains(text(),'Load More')]`,
    productscountBeforeClickLoadMoreUNu: `//div[contains(@class,'load_more')]//p[contains(text(),'Viewing 9 out of 69 products')]`,
    productscountAfterClickLoadMoreUNu: `//div[contains(@class,'load_more')]//p[contains(text(),'Viewing 18 out of 69 products')]`,
    productscountAfterClickLoadMoreSearching: `//div[contains(@class,'load_more')]//p[contains(text(),'Viewing 18 out of 69 products')]`,
    productscountBeforeClickLoadMoreSearching: `//div[contains(@class,'load_more')]//p`,


    productImageUNu: `(//div[contains(@class,'product-list')]//div[contains(@aria-label,'Acne Cream ')])[1]`,
    pDPRedirectUNu: `//div[contains(@class,'product-info')]//h1[contains(text(),'Acne Cream')]`,
    pCASkinHomeLogo: `//img[@alt='logo']`,

    //Recently Viewed Products
    // recentViewProductPriceUNu: `(//div[contains(@id,'swiper-wrapper')]//div[contains(@aria-label,'Acne Cream')])//div[contains(@class,'price-wrapper')]`, //Chnage Aria Labell for all other Product
    //recentViewProductAddtocartBtnUNu: `//div[contains(@id,'swiper-wrapper')]//div[contains(@aria-label,'Acne Cream')]//button[contains(@aria-label,'Add to Cart')]`, //Chnage Aria Label product name for all other Product
    //recentViewProductSelectSizeBtnUNu: `(//div[contains(@id,'swiper-wrapper')]//div[contains(@aria-label,'Acne Gel with OmniSome®')]//a[contains(text(),'Select Size')])[1]`,//Chnage Aria Labell for all other Product
    //recentViewProductNotifyMeBtnUNu: `(//div[contains(@aria-label,'Hyaluronic Acid Overnight Mask')]//button[contains(text(),'Notify Me')])[1]`,//Chnage Aria Labell for all other Product
    // recentViewProductLogintoOrderBtnUNu: `//div[contains(@aria-label,'Acne Cream ')]//button[contains(@aria-label,'Log in to Order')]`,
    readonlyecentViewProductLoginDialogBoxUNu: `//div[contains(@class,'sign-in-modal')]//div[contains(@id,'login-container')]//h1[contains(text(),'Customer Login')]`,

    //Recently Viewed Products Unauthenticated User
    recentViewProductPriceUNu: `(//div[contains(@id,'swiper-wrapper')]//div[contains(@aria-label,'Acne Cream')])//div[contains(@class,'price-wrapper')]`, //Chnage Aria Labell for all other Product
    recentViewProductAddtocartBtnUNu: `//div[contains(@id,'swiper-wrapper')]//div[contains(@aria-label,'Acne Cream')]//button[contains(@aria-label,'Add to Cart')]`, //Chnage Aria Label product name for all other Product
    recentViewProductSelectSizeBtnUNu: `(//div[contains(@id,'swiper-wrapper')]//div[contains(@aria-label,'Acne Gel with OmniSome®')]//a[contains(text(),'Select Size')])[1]`,//Chnage Aria Labell for all other Product
    recentViewProductNotifyMeBtnUNu: `(//div[contains(@aria-label,'Hyaluronic Acid Overnight Mask')]//button[contains(text(),'Notify Me')])[1]`,//Chnage Aria Labell for all other Product
    recentViewProductLogintoOrderBtnUNu: `//div[contains(@aria-label,'Acne Cream ')]//button[contains(@aria-label,'Log in to Order')]`,
    recentViewProductLoginDialogBoxUNu: `//div[contains(@class,'sign-in-modal')]//div[contains(@id,'login-container')]//h1[contains(text(),'Customer Login')]`,
    clickOnShopMenuUNu: `//a[normalize-space()='Shop']`,

    productCardUNu: `(//div[contains(@class,'swiper-wrapper')]//div[contains(@aria-label,'Acne Cream')])[1]`,

    //Left side Filters for Unauthenticated user
    leftHandFilter: `(//div[contains(@class,'accordion')]//div[contains(@class,'accordion__item')])[2]`,
    filtersProductsCategoryHeadingUNu: `//h3[contains(@class, 'heading') and text()='Product Category']`,
    filtersProductsAllProductsUNu: `//div[contains(@class,'accordion-panel')]//button[text()='All Products']`,
    filtersProductsAntioxidantsUNu: `//div[contains(@class,'accordion-panel')]//button[text()='Antioxidants']`,
    filtersProductsBroadSpectrumSPFUNu: `//div[contains(@class,'accordion-panel')]//button[text()='Broad Spectrum SPF']`,
    filtersProductsCleansersAndTonersUNu: `//div[contains(@class,'accordion-panel')]//button[text()='Cleansers & Toners']`,
    filtersProductsEyeNeckLipUNu: `//div[contains(@class,'accordion-panel')]//button[text()='Eye, Neck, Lip']`,
    filtersProductsMasksUNu: `//div[contains(@class,'accordion-panel')]//button[text()='Masks']`,
    filtersProductsShowAllCategoriesUNu: `//div[contains(@class,'accordion-panel')]//button[text()='Show All Categories']`,
    filtersProductsShowLessCategoriesUNu: `//div[contains(@class,'accordion-panel')]//button[text()='Show Less Categories']`,


    filtersByProductsBestSellerHeadingUNu: `//h3[contains(@class,'heading')and text()='Best Seller']`,
    filtersBestSellerCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Best Seller']`,
    filtersBestSellerCheckBoxesBestSellerlabelUNu: `//label[text()='Best Seller']`,

    filtersByProductsProductTypesHeadingUNu: `//h3[contains(@class,'heading')and text()='Product Types']`,
    filtersProductsRetailCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Retail']`,
    filtersProductsSampleCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Sample']`,
    filtersProductsCheckBoxesRetailLabelUNu: `//label[text()='Retail']`,
    filtersProductsCheckBoxesSampleLabelUNu: `//label[text()='Sample']`,

    filtersByProductsSkinConcernHeadingUNu: `//h3[contains(@class,'heading')and text()='Skin Concern']`,
    filtersProductsBrighteningCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Brightening']`,
    filtersProductsAgingCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Aging']`,
    filtersProductsDiscolorationsCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Discolorations']`,
    filtersProductsPreventativeCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Preventative']`,
    filtersProductsSensitiveSkinCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Sensitive Skin']`,
    filtersProductsCheckBoxesBrighteningLabelUNu: `//label[text()='Brightening']`,
    filtersProductsCheckBoxesAgingLabelUNu: `//label[text()='Aging']`,
    filtersProductsCheckBoxesDiscolorationsLabelUNu: `//label[text()='Discolorations']`,
    filtersProductsCheckBoxesPreventativeLabelUNu: `//label[text()='Preventative']`,
    filtersProductsCheckBoxesSensitiveSkinLabelUNu: `//label[text()='Sensitive Skin']`,

    filtersByProductsSkinTypeHeadingUNu: `//h3[contains(@class,'heading')and text()='Skin Type']`,
    filtersProductsCombinationCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Combination']`,
    filtersProductsDryCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Dry']`,
    filtersProductsNormalCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Normal']`,
    filtersProductsOilyCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Oily']`,
    filtersProductsSensitiveCheckBoxesUNu: `//div[@data-accordion-component='AccordionItemPanel']// input[@title='Sensitive']`,
    filtersProductsCheckBoxesCombinationLabelUNu: `//label[text()='Combination']`,
    filtersProductsCheckBoxesDryLabelUNu: `//label[text()='Dry']`,
    filtersProductsCheckBoxesNormalLabelUNu: `//label[text()='Normal']`,
    filtersProductsCheckBoxesOilyLabelUNu: `//label[text()='Oily']`,
    filtersProductsCheckBoxesSensitiveLabelUNu: `//label[text()='Sensitive']`,

    filtersProductsCategoryupArrowUNu: `//h3[text()='Product Category']/following-sibling::span[@class='self-center arrow-upwards']`,
    filtersProductsCategorydownArrowUNu: `//h3[text()='Product Category']/following-sibling::span[@class='self-center arrow-downwards']`,
    filtersBestSellerupArrowUNu: `//h3[text()='Best Seller']/following-sibling::span[@class='self-center arrow-upwards']`,
    filtersBestSellerdownArrowUNu: `//h3[text()='Best Seller']/following-sibling::span[@class='self-center arrow-downwards']`,
    filtersProductsTypeupArrowUNu: `//h3[text()='Product Types']/following-sibling::span[@class='self-center arrow-upwards']`,
    filtersProductsTypedownArrowUNu: `//h3[text()='Product Types']/following-sibling::span[@class='self-center arrow-downwards']`,
    filtersSkinConcernupArrowUNu: `//h3[text()='Skin Concern']/following-sibling::span[@class='self-center arrow-upwards']`,
    filtersSkinConcerndownArrowUNu: `//h3[text()='Skin Concern']/following-sibling::span[@class='self-center arrow-downwards']`,
    filtersSkinTypeupArrowUNu: `//h3[text()='Skin Type']/following-sibling::span[@class='self-center arrow-upwards']`,
    filtersSkinTypedownArrowUNu: `//h3[text()='Skin Type']/following-sibling::span[@class='self-center arrow-downwards']`,

    filtersBestSellerCheckBoxesCountUNu: `div.accordion__item:has-text("Best Seller") div.flex.py-2:has-text("Best Seller") div.font-light.text-tertiary-400`,
    filtersProductTypesRetailCheckBoxesCountUNu: `div.accordion__item:has-text("Product Types") div.flex.py-2:has-text("Retail") div.font-light.text-tertiary-400`,
    filtersProductTypesSampleCheckBoxes_countUNu: `div.accordion__item:has-text("Product Types") div.flex.py-2:has-text("Sample") div.font-light.text-tertiary-400`,
    filtersSkinConcernBrighteningCheckBoxesCountUNu: `div.accordion__item:has-text("Skin Concern") div.flex.py-2:has-text("Brightening") div.font-light.text-tertiary-400`,
    filtersSkinConcernAgingCheckBoxesCountUNu: `div.accordion__item:has-text("Skin Concern") div.flex.py-2:has-text("Aging") div.font-light.text-tertiary-400`,
    filtersSkinConcernDiscolorationsCheckBoxesCountUNu: `div.accordion__item:has-text("Skin Concern") div.flex.py-2:has-text("Discolorations") div.font-light.text-tertiary-400`,
    filtersSkinConcernPreventativeCheckBoxesCountUNu: `div.accordion__item:has-text("Skin Concern") div.flex.py-2:has-text("Preventative") div.font-light.text-tertiary-400`,
    filtersSkinConcernSensitiveSkinCheckBoxesCountUNu: `div.accordion__item:has-text("Skin Concern") div.flex.py-2:has-text("Sensitive Skin") div.font-light.text-tertiary-400`,
    filtersSkinTypeCombinationCheckBoxesCountUNu: `div.accordion__item:has-text("Skin Type") div.flex.py-2:has-text("Combination") div.font-light.text-tertiary-400`,
    filtersSkinTypeDryCheckBoxesCountUNu: `div.accordion__item:has-text("Skin Type") div.flex.py-2:has-text("Dry") div.font-light.text-tertiary-400`,
    filtersSkinTypeNormalCheckBoxesCountUNu: `div.accordion__item:has-text("Skin Type") div.flex.py-2:has-text("Normal") div.font-light.text-tertiary-400`,
    filtersSkinTypeOilyCheckBoxesCountUNu: `div.accordion__item:has-text("Skin Type") div.flex.py-2:has-text("Oily") div.font-light.text-tertiary-400`,
    filtersSkinTypeSensitiveCheckBoxesCountUNu: `div.accordion__item:has-text("Skin Type") div.flex.py-2:has-text("Sensitive") div.font-light.text-tertiary-400`,

    //Filter applied and displayed selcted filter on top of the product listing
    //Product Categories
    filterAppliedAntioxidants: `//div[contains(@class,'flex flex')]//div[contains(text(),'Antioxidants')]`,
    filterAppliedBroadSpectrumSPF: `//div[contains(@class,'flex flex')]//div[contains(text(),'Broad Spectrum SPF')]`,
    filterAppliedCleansersAndToners: `//div[contains(@class,'flex flex')]//div[contains(text(),'Cleansers & Toners')]`,
    filterAppliedEyeNeckLip: `//div[contains(@class,'flex flex')]//div[contains(text(),'Eye, Neck, Lip')]`,
    filterAppliedMasks: `//div[contains(@class,'flex flex')]//div[contains(text(),'Masks')]`,
    filterAppliedMoisturizers: `//div[contains(@class,'flex flex')]//div[contains(text(),'Moisturizers')]`,
    filterAppliedRetinols: `//div[contains(@class,'flex flex')]//div[contains(text(),'Retinols')]`,
    filterAppliedSerums: `//div[contains(@class,'flex flex')]//div[contains(text(),'Serums')]`,
    filterAppliedSolutionSets: `//div[contains(@class,'flex flex')]//div[contains(text(),'Solution Sets')]`,
    filterAppliedPeels: `//div[contains(@class,'flex flex')]//div[contains(text(),'Peels')]`,
    filterAppliedPeelAlternative: `//div[contains(@class,'flex flex')]//div[contains(text(),'Peel Alternative')]`,
    filterAppliedRetinoidTreatments: `//div[contains(@class,'flex flex')]//div[contains(text(),'Retinoid Treatments')]`,
    filterAppliedTherapeuticMasks: `//div[contains(@class,'flex flex')]//div[contains(text(),'Therapeutic Masks')]`,
    filterAppliedTreatmentEnhancements: `//div[contains(@class,'flex flex')]//div[contains(text(),'Treatment Enhancements')]`,

    filterAppliedBestSeller: `//div[contains(@class,'flex flex')]//div[contains(text(),'Best Seller')]`,
    filterAppliedBackbar: `//div[contains(@class,'flex flex')]//div[contains(text(),'Backbar')]`,
    filterAppliedRetail: `//div[contains(@class,'flex flex')]//div[contains(text(),'Retail')]`,
    filterAppliedSample: `//div[contains(@class,'flex flex')]//div[contains(text(),'Sample')]`,
    filterAppliedBrightening: `//div[contains(@class,'flex flex')]//div[contains(text(),'Brightening')] `,
    filterAppliedAcne: `//div[contains(@class,'flex flex')]//div[contains(text(),'Acne')]`,
    filterAppliedAging: `//div[contains(@class,'flex flex')]//div[contains(text(),'Aging')]`,
    filterAppliedDiscolorations: `//div[contains(@class,'flex flex')]//div[contains(text(),'Discolorations')]`,
    filterAppliedPreventative: `//div[contains(@class,'flex flex')]//div[contains(text(),'Preventative')]`,
    filterAppliedSensitiveSkin: `//div[contains(@class,'flex flex')]//div[contains(text(),'Sensitive Skin')]`,
    filterAppliedCombination: `//div[contains(@class,'flex flex')]//div[contains(text(),'Combination')]`,
    filterAppliedDry: `//div[contains(@class,'flex flex')]//div[contains(text(),'Dry')]`,
    filterAppliedNormal: `//div[contains(@class,'flex flex')]//div[contains(text(),'Normal')]`,
    filterAppliedOily: `//div[contains(@class,'flex flex')]//div[contains(text(),'Oily')]`,
    filterAppliedSensitive: `//div[contains(@class,'flex flex')]//div[(text()='Sensitive')]`,

    //Clicking on Close Button to reset filter and same locator is use for all menu
    resetFilterWithCloseBtn: `//div[contains(@class,'items-center')]//div[contains(@class,'cross-icon-active')]`,

    //Clicking on Clear All Button to reset filter same locator is use for all menu
    clearAllFiltersBtnOnTop: `//div[contains(@class,'sort-section')]//button[contains(text(),'Clear All')]`,


    acneCreamAddToCartButton: `div.product_card:has-text('Acne Cream') button:has-text('Add to Cart')`,
    plpMaximumQtyReachedToast: `//div[@id="add-to-cart-api-error"]//div[contains(text(),'Maximum Quantity Reached')]`,
    canNotAddProductAndCourseToast: `//div[@id='add-to-cart-api-error']//div[contains(text(), "Apologies, but you can't mix products and courses")]`,
    pcaSkinLogo: `//img[@alt="logo"]`,
    plpSortDropDownPriceAToZ: `//select[@id="sort-dropdown"]//option[text()='Alphabetical A - Z']`,
    plpSortDropDownPriceZToA: `//select[@id="sort-dropdown"]//option[text()='Alphabetical Z - A']`,
    firstProductRating: `div.bv_stars_component_container >> nth=0`,
    firstProductImage: `div.product-card-content >>nth=0`,
    skinTypeCombinationCount: `//label[contains(text(), "Combination")]/following-sibling::div//div[contains(text(), "70")]`,
    skinTypeDryCount: `//label[contains(text(), "Dry")]/following-sibling::div//div[contains(text(), "65")]`,
    skinTypeOilyCount: `//label[contains(text(), "Oily")]/following-sibling::div//div[contains(text(), "69")]`,
    skinTypeNormalCount: `//label[contains(text(), "Normal")]/following-sibling::div//div[contains(text(), "66")]`,
    skinTypeSensitiveCount: `//label[contains(text(), "Sensitive")]/following-sibling::div//div[contains(text(), "49")]`,
    skinTypeCombination: `//label[contains(text(), "Combination")]`,
    skinTypeDry: `//label[contains(text(), "Dry")]`,
    skinTypeOily: `//label[contains(text(), "Oily")]`,
    skinTypeNormal: `//label[contains(text(), "Normal")]`,
    skinTypeSensitive: `(//label[contains(text(), "Sensitive")])[2]`,
    skinTypes: `//h3[text()='Skin Type']/following-sibling::span[@class='self-center arrow-downwards']`,
    breadcrumb: `div.breadcrumb-title ul`,
    allProductsBreadcrumb: `div.breadcrumb-title ul li.active-breadcrumb :text-is("All Products")`,
    productCategoryDownwardArrow: ` div#accordion__heading-category-accordion h3:text-is("Product Category") + span.self-center.arrow-downwards`,
    productCategoryUpward: `div#accordion__heading-category-accordion h3:text-is("Product Category") + span.self-center.arrow-upwards`,
    antioxidantsCategory: `div#accordion__panel-category-accordion button:text-is("Antioxidants")`,
    antioxidantsBreadcrumb: `div.breadcrumb-title ul li.active-breadcrumb :text-is("Antioxidants")`,
    homeInBreadCrumb: `div.breadcrumb-title ul li :text-is("Home")`,
    allProductInBreadcrumb: `div.breadcrumb-title ul li :text-is("All Products")`,
    antioxidantsTitle: `div.breadcrumb-title.container div:text-is("Antioxidants")`,
    bestseller: `div.accordion div.accordion__item h3:text-is("Best Seller")`,
    productCategory: `div.accordion div.accordion__item h3:text-is("Product Category")`,
    productTypes: `div.accordion div.accordion__item h3:text-is("Product Types")`,
    skinConcern: `div.accordion div.accordion__item h3:text-is("Skin Concern")`,
    skinType: `div.accordion div.accordion__item h3:text-is("Skin Type")`,
    boarderLine1: `div.accordion div.border-b >>nth=1`,
    boarderLine2: `div.accordion div.border-b >>nth=2`,
    boarderLine3: `div.accordion div.border-b >>nth=3`,
    boarderLine4: `div.accordion div.border-b >>nth=4`,
    boarderLine5: `div.accordion div.border-b >>nth=5`,

    recentViewAcneCreamAddToCart: `(//div[contains(@class,'swiper-wrapper')]//div[contains(@class,'product-card')]//button[contains(text(),'Add to Cart')])[1]`,
    plpCardEligibleProductsRecentView: `(//div[contains(@class,'swiper-wrapper')]//div[contains(@aria-label,'Acne Cream')])[1]`,
    recentViewScrollUpToMessage: `(//div[contains(@class,'swiper-wrapper')]//div[contains(@class,'product-card')]//div[contains(text(),'Must be a verified professional to access wholesale pricing')])[1]`,

    plpAllProductInBold: `//div[contains(@class,'title container')]//div`,//all products in blue colors
    plpProductNameAcneCreame: `//div[contains(@class,'product-list')]//div[@aria-label="Acne Cream $25.00  / 0.5 oz."]//p[@title='Acne Cream']`, //Verify product name
    plpProductPriceAcneCreame: `//div[contains(@class,'product-list')]//div[@aria-label="Acne Cream $25.00  / 0.5 oz."]//span[text()='$25.00']`,//verify product price
    plpProductAddToCartAcneCreame: `//div[@class="product-grid"]//p[text()='Acne Cream']//ancestor::div[contains(@class,'product_card group')]//button[text()='Add to Cart']`,//verify add to cart button
    plpProductFavoriteBtnAcneCreame: `//div[@class="product-grid"]//p[text()='Acne Cream']//ancestor::div[contains(@class,'product_card group')]//div[text()='Favorite']`, //verify favorite btn is visible
    plpProductRemoveFromFavoriteAcneCreame: `//div[@class="product-grid"]//p[text()='Acne Cream']//ancestor::div[contains(@class,'product_card group')]//div[text()='Remove from Favorites']`, //works only after added
    plpProductBestSellerBadgeAcneCream: `//div[contains(@class,'product-list')]//div[@aria-label="Acne Cream $25.00  / 0.5 oz."]//span[text()='Best-seller']`,//change the product name for respective best seller badge

    plpProductNameClearSkin: `//div[contains(@class,'product-list')]//div[@aria-label='Clearskin $5.25-$75.00  / 1.7 oz.']//p[@title='Clearskin']`, //Verify product name`
    plpProductSelectSizeClearSkin: `//div[@class="product-grid"]//p[text()='Clearskin']//ancestor::div[contains(@class,'product_card group')]//a[text()='Select Size']`,
    plpProductBestSellerBadgeClearSkin: `//div[contains(@class,'product-list')]//div[@aria-label='Clearskin $5.25-$75.00  / 1.7 oz.']//span[text()='Best-seller']`,

    plpProductNameCreamyCleanser: `//div[contains(@class,'product-list')]//div[@aria-label='Creamy Cleanser $4.00-$19.00  / 7 oz.']//p[@title='Creamy Cleanser']`, //Verify product name`
    plpProductSelectSizeCreamyCleanser: `//div[@class="product-grid"]//p[text()='Creamy Cleanser']//ancestor::div[contains(@class,'product_card group')]//a[text()='Select Size']`,//verify select size buttn is visible
    plpProductTabCategory: `//div[contains(@class,'tab-list')]//button[text()='Products']`,//verifying product tab is visible
    plpCourseTabCategory: `//div[contains(@class,'tab-list')]//button[text()='Courses']`, //verify course tab is visible

    plpProductNameAcneGelWithOmniSome: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'Acne Gel with OmniSome')]//p[text()='Acne Gel with OmniSome®']`,
    plpProductPriceAcneGelWithOmniSome: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'Acne Gel with OmniSome')]//span[text()='$9.50-$32.00']`,
    plpProductAddToFavoriteAcneGelWithOmniSome: `//div[@class="product-grid"]//p[text()='Acne Gel with OmniSome®']//ancestor::div[contains(@class,'product_card group')]//div[text()='Favorite']`,
    plpProductRemoveFromFavoriteAcneGelWithOmniSome: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'Acne Gel with OmniSome')]//div[text()='Remove from Favorites']`,
    plpProductSelectSizeButtonAcneGelWithOmniSome: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'Acne Gel with OmniSome')]//a[text()='Select Size']`,

    plpProductNameRetinolPeel: `//div[contains(@class,'product-list')]//p[@title='4% Retinol Peel']`, //Verify product name
    plpProductRetinolPeelImage: `//div[contains(@aria-label,'4% Retinol Peel')]//picture[@class='lazyload-true is-loaded']`,//retino peel image hover
    plpProductFavoritesBtnRetinolPeel: `//div[@class="product-grid"]//p[text()='4% Retinol Peel']//ancestor::div[contains(@class,'product_card group')]//div[text()='Favorite']`,
    plpProductMessageUnderFavoriteRetinolPeel: `//div[@class="product-grid"]//p[text()='4% Retinol Peel']//ancestor::div[contains(@class,'product_card group')]//div[contains(text(),'Must be a verified professional')]`, //verify  professional to access wholesale pricing 
    plpProductRetinolPeelQuickViewBtn: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'4% Retinol Peel')]//button[@aria-label='Quick View']`,
    plpProductClickQuickViewBtnRetinolPeelMessage: `//div[@role='dialog' and @data-state='open']//div[contains(text(),'Must be a verified professional to access')]`,
    plpProductClickQuickViewBtnRetinolPeelName: `//div[@role='dialog' and @data-state='open']//h3[text()='4% Retinol Peel']`,
    plpProductRetinolPeelPriceIsHidden: `//div[contains(@class,'product-list')]//div[@aria-label='4% Retinol Peel false false']//div[contains(@class,'price-wrapper')]`, //price is hiiden
    plpProductRetinolPeelAddToCartBtnIsHidden: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'Intensive Age Refining Treatmen')]//button[@aria-label='Add to Cart']`,//add to cart btn is hidden
    plpProductRetinolPeelNotifyBtnIsHidden: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'4% Retinol Peel ')]//button[@aria-label='Add to Cart']`, //notify btn is hidden
    plpProductRetinolPeelSelectSizeIsHidden: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'4% Retinol Peel')]//a[text()='Select Size']`,
    plpProductRemoveFromFavoriteBtnRetinolPeel: `//div[@class="product-grid"]//p[text()='4% Retinol Peel']//ancestor::div[contains(@class,'product_card group')]//div[text()='Remove from Favorites']`, //this works only after added to favorite
    plpProductApologyMessageUnderRemoveFromFavoriteRetinolPeel: `//div[@class="product-grid"]//p[text()='4% Retinol Peel']//ancestor::div[contains(@class,'product_card group')]//div[contains(text(),'Apologies')]`,//this works only after added to favorite


    plpProductNameIntensiveAgeRefiningTreatment: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'Intensive Age Refining Treatmen')]//p[contains(text(),'Intensive Age')]`, //Verify product name
    plpProductPriceIntensiveAgeRefiningTreatment: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'Intensive Age Refining Treatmen')]//span[text()='$58.50']`,//verify product price
    plpProductAddToCartIntensiveAgeRefining_reatment: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'Intensive Age Refining Treatmen')]//button[@aria-label='Add to Cart']`,//verify add to cart button
    plpProductFavoriteBtnIntensiveAgeRefiningTreatmente: `//div[contains(@class,'product-list')]//div[contains(@aria-label,'Intensive Age Refining')]//div[text()='Favorite']`, //verify favorite btn is visible

    plpProductHOverOverPictureQuickView: `//div[@aria-label="Acne Cream $25.00  / 0.5 oz."]//picture[@class='lazyload-true is-loaded']`,//hover over the picture //change product name
    plpProductQuickViewBtn: `//div[contains(@class,'product-list')]//div[@aria-label="Acne Cream $25.00  / 0.5 oz."]//button[@aria-label='Quick View']`, //replace aria label with product name
    plpProductQuickViewModul: `//div[contains(@class,'quick-view-product-info')]`, //quick view model is opned 
    plpProductClickQuickViewBtnProductName: `//div[@role='dialog' and @data-state='open']//h3[text()='Acne Cream']`, //verify the product name after quick view buttn

    plpProductNameForNotifyMe: `//div[contains(@class,'product-list')]//div[@aria-label='Hyaluronic Acid Overnight Mask $38.75  / 1.8 oz.']//p[text()='Hyaluronic Acid Overnight Mask']`,//verify name of the product
    plpProductPriceForNotifyMe: `//div[contains(@class,'product-list')]//div[@aria-label='Hyaluronic Acid Overnight Mask $38.75  / 1.8 oz.']//span[text()='$38.75']`,
    plpProductFavoriteNotifyMe: `//div[contains(@class,'product-list')]//div[@aria-label='Hyaluronic Acid Overnight Mask $38.75  / 1.8 oz.']//div[text()='Favorite']`,
    plpProductNotifyMeBtn: `//div[contains(@class,'product-list')]//div[@aria-label='Hyaluronic Acid Overnight Mask $38.75  / 1.8 oz.']//button[text()='Notify Me']`,//verify notify me button
    plpProductBestSellerBadgeHyaluronicAcid: `//div[contains(@class,'product-list')]//div[@aria-label="Hyaluronic Acid Overnight Mask $38.75  / 1.8 oz."]//span[text()='Best-seller']`,
    plpDualActionRednessReliefFavBtnOutline: `div.product-card-main-wrapper:has-text('Dual Action Redness Relief') div.favorite-cta-outline`,
    plpDualActionRednessReliefFavBtnFilled: `div.product-card-main-wrapper:has-text('Dual Action Redness Relief') div.favorite-cta-filled`,

    plpPigmentCorrectPeelFavBtnOutline: `div.product-card-main-wrapper:has-text('Pigment Correct Peel') div.favorite-cta-outline`,
    plpPigmentCorrectPeelFavBtnFilled: `div.product-card-main-wrapper:has-text('Pigment Correct Peel') div.favorite-cta-filled`,
    productCategoryItem: `div.accordion__item >>nth=1`,
    bestsellerItem: `div.accordion__item >>nth=2`,
    productTypesItem: `div.accordion__item >>nth=3`,
    skinConcernItem: `div.accordion__item >>nth=4`,
    skinTypeItem: `div.accordion__item >>nth=5`,
    filtersProductsMoisturizers: `//div[contains(@class,'accordion-panel')]//button[text()='Moisturizers']`,
    filtersProductsRetinols: `//div[contains(@class,'accordion-panel')]//button[text()='Retinols']`,
    filtersProductsSerums: `//div[contains(@class,'accordion-panel')]//button[text()='Serums']`,
    filtersProductsSolutionSets: `//div[contains(@class,'accordion-panel')]//button[text()='Solution Sets']`,
    filtersProductsPeels: `//div[contains(@class,'accordion-panel')]//button[text()='Peels']`,
    filtersProductsPeelAlternative: `//div[contains(@class,'accordion-panel')]//button[text()='Peel Alternative']`,
    filtersProductsRetinoidTreatments: `//div[contains(@class,'accordion-panel')]//button[text()='Retinoid Treatments']`,
    filtersProductsTherapeuticMasks: `//div[contains(@class,'accordion-panel')]//button[text()='Therapeutic Masks']`,
    filtersProductsTreatmentEnhancements: `//div[contains(@class,'accordion-panel')]//button[text()='Treatment Enhancements']`,
    filtersProductsBackbarSizes: `//div[contains(@class,'accordion-panel')]//button[text()='Backbar Sizes']`,
    filtersProductsBackbarTools: `//div[contains(@class,'accordion-panel')]//button[text()='Backbar Tools']`,
    filtersProductsBodyTreatments: `//div[contains(@class,'accordion-panel')]//button[text()='Body Treatments']`,
    filtersProductsExfoliants: `//div[contains(@class,'accordion-panel')]//button[text()='Exfoliants']`,
    bestsellerCount: `div.accordion__item label:text-is("Best Seller") + div.checkbox-number div`,
    bestsellerBadgeAfterFilter: `div.product-grid div.product-badge span`,
    filterCount: `div#plp-page div.sort-label span`,
    productTypeSample: `div.accordion__item label:text-is("Sample")`,
    productTypeRetail: `div.accordion__item label:text-is("Retail")`,
    productTypeBackbar: `div.accordion__item label:text-is("Backbar")`,
    backbarCount: `div.accordion__item label:text-is("Backbar") + div.checkbox-number div`,
    sampleCount: `div.accordion__item label:text-is("Sample") + div.checkbox-number div`,
    retailCount: `div.accordion__item label:text-is("Retail") + div.checkbox-number div`,

    bestSellersTitle: `//div[contains(@class,'container ')]//div[contains(@class,'product-carousel-title')]//h2`,
    bestSellersloginToViewPrices: `//div[contains(@class,'container ')]//button[contains(text(),'Log in to view prices')]`,
    bestSellersloginDialogBox: `//div[contains(@class,'sign-in-modal')]//div[contains(@id,'login-container')]//h1[contains(text(),'Customer Login')]`,
    bestSellerAcneCreamPriceSearching: `div.more-to-explore-carousel div.product-card-main-wrapper:has-text('Acne Cream') div.price-wrapper >> nth=1`,
    bestSellerAcneCreamAddToCartBtnSearching: `div.more-to-explore-carousel div.product-card-main-wrapper:has-text('Acne Cream') button:has-text('Add to Cart') >> nth=1`,
    bestSellerCAndEAdvancedSelectSizeBtnSearching: `div.more-to-explore-carousel div.product-card-main-wrapper:has-text('C&E Advanced') a:has-text('Select Size') >> nth=1`,
    bestSellerLoginToOrderBtn: `(//div[contains(@class,'swiper-initialized')]//button[contains(@aria-label,'Log In to Order Acne Cream')])[2]`,
}