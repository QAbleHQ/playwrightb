export const PDPLocators = {
    acneCreamInBlue: "//h1[normalize-space()='Acne Cream']",
    star: "//div[@class='flex flex-row items-center mb-4']",
    item: "//div[@class='text-sm text-tertiary-400 font-regular']",
    consent: "//div[@class='flex flex-row items-center mb-4']",
    productSize: "//div[@class='product-size-selector']",
    imageAcenCream: "//img[@src='https://pcaskinqa.vtexassets.com/arquivos/ids/156506-20-auto/Thumbnail_Acne_Cream_sku21174_.jpg?v=638305746423830000&width=20&height=auto&aspect=true']",
    imageSlides: "//div[@class='swiper-slide swiper-slide-visible']",
    oneTimePurchaseButton: "//span[@class='relative inline-block w-6 h-6 align-middle border-2 rounded-full cursor-pointer checkmark border-tertiary-400']",
    oneTimePurchase: '//span[@class="label inline-block relative top-0.5 cursor-pointer pl-4 text-tertiary-400 font-heavy text-xl leading-28"]',
    oneTimePurchaseAmount: "//span[@class='inline-block text-xl list-price text-tertiary-400 font-heavy leading-28']",
    itemQuantity: "//label[@for='One-Time Purchase_itemQty']",
    itemQuantityBox: "//div[@class='quantity-selector_quantity-selector__ljpEb quantity-selector flex items-center justify-between bg-tertiary-100 p-2 rounded-3xl w-full lg:w-auto false']",
    subscribeButton: "//span[@class='relative inline-block w-6 h-6 align-middle border-2 rounded-full cursor-pointer checkmark border-tertiary-400']",
    subscribe: "//span[@class='label product-info_autoship-label__AnP4l inline-block relative top-0.5 cursor-pointer pl-4 text-tertiary-400 font-heavy text-xl leading-28']",
    subscribeAmount: '//span[@class=" inline-block text-xl list-price text-primary-400 font-heavy leading-28"]',
    everyday: '//label[@for="frequency"]',
    heartIcon: '//button[@class=" flex gap-2 items-center justify-center px-2 py-2 fav-icon border border-primary-500 border-solid font-bold text-primary-400 text-sm favorite-cta favorite_favorite-button__XiNVR default-favorite-button false primary light false"]',
    addtoCart: "//button[@aria-label='Add to Cart Acne Cream']",
    detailsUnderAddtoCart: "//div[contains(@class, 'product-info_product-description-content-wrapper__EeGd7')]",
    downloadFactsheetFullIngredientList: "//a[contains(@href, '/cms/assets/5e25659b-0f7f-4335-810b-5ee9c6f3e3f8.pdf') and contains(@class, 'text-primary-400')]",
    joinButtonText: `//button[text()="Join"]`,



    pdpHeading: `div.product-info h1`,
    pdpProductSize: `div.product-info div.product-size-selector`,
    pdpOneTimePurchaseSection: `div.product-info div.one-time`,
    pdpOneTimePurchasePrice: `div.product-info div.one-time span.list-price`,
    pdpOneTimePurchaseQTY: `div.product-info div.one-time div.quantity-selector`,
    pdpProductAddToCartBtn: `div.product-info button.add-to-cart-button`,
    pdpProductFavouriteBtn: `div.product-info button.favorite-cta`,
    pdpProductNotifymeBtn: `div.product-info button:has-text('Notify Me')`,
    pdpProductSubscribeSection: `div.product-info div.autoship`,
    pdpQtyIncreaseBtn: `div.quantity-selector span.increase-icon`,
    pdpQtyInput: `div.quantity-selector input.quantity-input`,
    pdpMaximumQtyReachedToast: `//div[@id="add-to-cart-api-error"]//div[contains(text(),'Maximum Quantity Reached')]`,
    pdpMaximunQtyReachedCloseBtn: `//div[@id="add-to-cart-api-error"]//button`,
    pdpFavouriteBtnOutline: `button div.favorite-cta-outline`,
    pdpFavouriteBtnFilled: `button div.favorite-cta-filled`,
    addToFavouriteToast: `//div[@id="add-to-favorite-api-success"]`,
    removedFromFavouriteToast: `//div[@id="remove-from-favorite-api-sucess"]`,
    favouriteButton: `button.favorite-cta`,
    restrictionMessage: `p.restricted-message-section`,
    relatedProductSection: `div.more-to-explore-carousel`,
    relatedProductsAcneGelProduct: `div.product-card-content:has-text('Acne Gel') div.price-wrapper >> nth=1`,
    relatedProductsHydramatte: `div.product-card-main-wrapper:has-text('Hydramatte') button >> nth=1`,
    relatedRestrictedProductUltraPeelPrice: `div.product-card-main-wrapper:has-text('Ultra Peel®') div.price-wrapper`,
    relatedRestrictedProductUltraPeelAddToCart: `div.product-card-main-wrapper:has-text('Ultra Peel®') button:has-text('Add to Cart')`,
    relatedRestrictedProductMessageUltraPeel: `div.product-card-main-wrapper:has-text('Ultra Peel®') div:has-text('Must be a verified professional to access wholesale pricing')`,
    pdpBreadCrumb: `ul.breadcrumb-label`,
    pdpBreadCrumbAllProducts: `ul.breadcrumb-label a:has-text('All Products')`,



    shopMenuListHeaderPDP: `//li[contains(@class,'navigation-menu-list')]//a[text()='Shop']`,
    viewallDailycarePDP: `(//li[contains(@class,'navigation-filter-options')]//following::a[@aria-label="View All : Daily care"])[1]`,
    acneCreamProcutImagePDP: `//div[contains(@class,'col-span')]//div[contains(@aria-label,'Acne Cream')]`,
    acneCreamDetailsPagePDP: `//div[contains(@class,'product-info')]//h1[contains(text(),'Acne Cream')]`,
    acneCreamLoginBtnPDP: `(//button[contains(@class,'cta-label') and contains(@class,'bg-primary-400')])[1]`,
    acneCreamLoginDialogPDP: `//div[contains(@class,'sign-in-modal')]//h1[contains(text(),'Customer Login')]`,
    allproductBreadCrumb: `//div[contains(@class,'breadcrumb-title')]//nav[contains(@aria-label,'breadcrumbs')]`,
    allProductsText: `//div[contains(@class,'breadcrumb-title')]//div[contains(text(),'All Products')]`,
    acnecreamJoinBtnPDP: `//button[text()='Join']`,
    registerYourProfilePagePDP: `//div[contains(@id,'registration')]//h1[contains(text(),'Register Your Profile')]`,

    productPricePDP: `(//div[contains(@class,'product-list')]//div[contains(@class,'price-wrapper')])[1]`,
    favouriteIconPDP: `(//div[contains(@class,'fav-compar')]//button[contains(@class,'favorite-button')])[1]`,
    addtoCartBtnPDP: `//div[contains(@data-testid,'product-grid')]//div[contains(@aria-label,'Acne Cream')]//button[contains(@aria-label,'Add to Cart')]`,//Change Product name in aria label to other product
    loadMoreBtnPDP: `//div[contains(@class,'load_more')]//button[contains(text(),'Load More')]`,

    //Related Products
    relatedProductsTextPDP: `//div[contains(@class,'flex flex-col')]//h2[contains(text(),'Related Products')]`,
    loginIntoOrderButtonPDP: `(//div[contains(@class,'flex justify-center')]//button[contains(@aria-label,'Log In to Order Acne Gel with OmniSome®')])[2]`,
    relatedProductsAcneGelPDP: `(//div[contains(@class,'product-card')]//p[contains(text(),'Acne Gel with OmniSome®')])[2]`,
    relatedProductPriceAcneGel: `(//div[contains(@class,'product-card-main')]//div[contains(@class,'mt-3')])[7]`,
    relatedProductAddToCartAcneGelPDP: `(//div[contains(@class,'product-card-main')]//button[contains(text(),'Add to Cart')])[7]`,


}
