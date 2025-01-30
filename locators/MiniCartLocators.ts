export const MiniCartLocators = {
    productName: "(//span[text()='Acne Cream'])[1]",
    productId: "//span[text()='Acne Cream']//following-sibling::span[text()='Item# 21174']",
    removeButton: "//span[text()='Acne Cream']//parent::div//parent::div//following-sibling::div//button[contains(@aria-label,'remove')]",
    price: "//span[text()='Acne Cream']//parent::div//parent::div//following-sibling::div//button[contains(@aria-label,'remove')]//following-sibling::span[text()='$20.00']",
    subTotal: "//span[text()='Subtotal']",
    subToal_Amount: "//span[text()='Subtotal']//following-sibling::span[text()='$20.00']",
    viewCart: "//a[text()='View Cart']",
    startShopping: "//a[text()='Start Shopping']",
    minusButton: "//span[text()='6% Pure Retinol Peel']//parent::div//div//button[@aria-label='minus']",
    plusButton: "//span[text()='6% Pure Retinol Peel']//parent::div//div//button[@aria-label='plus']",


    MaximumQtyReachedToast: `//div[@id="add-to-cart-api-error"]`,
    MaximunQtyReachedCloseBtn: `//div[@id="add-to-cart-api-error"]//button`,
    Product_Price: `//span[contains(@class,'global-cart-item-price')]/ancestor::div[contains(@class,'global-cart-items-section')]//span[contains(@class,'global-cart-item-price')]`,

    //subtotal of cart and product 
    SubTotalOfAcneCream: `//span[text()='Subtotal']//following-sibling::span[text()='$25.00']`,
    SubTotalOfCartAcneCream: `//span[text()='Acne Cream']//parent::div//parent::div//following-sibling::div//button[contains(@aria-label,'remove')]//following-sibling::span[text()='$25.00']`,
    //subtotal of cart and product 
    SubTotalOfAcneCreamAfterOneIncrease: `//span[text()='Subtotal']//following-sibling::span[text()='$50.00']`,
    SubTotalOfCartAcneCreamAfterOneIncrease: `//span[text()='Acne Cream']//parent::div//parent::div//following-sibling::div//button[contains(@aria-label,'remove')]//following-sibling::span[text()='$50.00']`,

    //Plus and minus button of acne cream
    minusButtonAcneCream: "//span[text()='Acne Cream']//parent::div//div//button[@aria-label='minus']",
    plusButtonAcneCream: "//span[text()='Acne Cream']//parent::div//div//button[@aria-label='plus']",
    removeFromCartButtonForAcneCream: `//span[contains(text(), 'Acne Cream')]/ancestor::div/following-sibling::div//button//div`,
    noofQuantity: `span.current-qty`,
    maximumQtyReachedToast: `//div[@id="add-to-cart-api-error"]`,
    maximunQtyReachedCloseBtn: `//div[@id="add-to-cart-api-error"]//button`,
    productPrice: `//span[contains(@class,'global-cart-item-price')]/ancestor::div[contains(@class,'global-cart-items-section')]//span[contains(@class,'global-cart-item-price')]`,

    miniCartIconQuantity: `span.cart-current-qty`,

    //antioxident expeted more corse 
    removeFromCartAntioxidentExpectedMore: `//span[contains(text(), 'Antioxidants: Expect More')]/ancestor::div /following-sibling::div//button`,
    courseNameAntioxidentExpectedMore: `//span[text()='Antioxidants: Expect More']`,

    //Unauthenticated User Mini Cart
    miniCartHeaderButton: `//div[contains(@class,'navigation-cart ')]//button[contains(@class,'cart-icon')]`,
    miniCartDescriptionText: `//div[contains(@class,'navigation-cart ')]//div[contains(@id,'login-flyout-1')]//h2`,
    miniCartLoginButton: `//div[contains(@class,'navigation-cart ')]//div[contains(@class,'cta')]//button[contains(text(),'Log In')]`,
    miniCartCreateAccountButton: `//div[contains(@class,'navigation-cart ')]//div[contains(@class,'cta')]//a[contains(text(),'Create Account')]`,
    miniCartLoginDialog: `//div[contains(@class,'sign-in-modal')]//h1[contains(text(),'Customer Login')]`,
    miniCartRegisterYourProfilePage: `//div[contains(@id,'registration')]//h1[contains(text(),'Register Your Profile')]`,
    priceOfAntioxidentExpectedMoreInCart: `//span[text()='Antioxidants: Expect More']//parent::div//parent::div//following-sibling::div//button[contains(@aria-label,'remove')]//following-sibling::span[text()='$149.00']`,
    SubTotalOfAntioxidentExpectedMore: `//span[text()='Subtotal']//following-sibling::span[text()='$149.00']`,

    quantityControls: `div.quantity-selector`,
    emptyCartSubtotal: `//span[text()='Subtotal']//following-sibling::span[text()='$0.00']`,

}