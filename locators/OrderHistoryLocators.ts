export const OrderHistoryLocators = {
    orderHistoryHeading: `//h2[contains(@class,'table-heading')]`,
    orderTableDateHeader: `//th[contains(@class,'date header')]`,
    orderTableOrderHeader: `//th[contains(@class,'order header')]`,
    orderTableAmountHeader: `//th[contains(@class,'order header')]`,
    orderTableStatusHeader: `//th[contains(@class,'status header')]`,
    orderTableTrackingHeader: `//th[contains(@class,'tracking header')]`,
    orderTableShipToHeader: `//th[contains(@class,'shipTo header')]`,
    orderTableShipToAddress: `//th[contains(@class,'shipToAddress header')]`,
    orderHistoryTable:`//tbody[@role="rowgroup"]`,
    

    recordsDropDown: `//select[@data-testid="records-dropdown"]`,
    recordsDropDown20: `//select[@data-testid="records-dropdown"]//option[@value='20']`,
    recordsDropDown50: `//select[@data-testid="records-dropdown"]//option[@value='50']`,
    recordsDropDown100: `//select[@data-testid="records-dropdown"]//option[@value='100']`,
    recordsPagination:`//ul[contains(@class,'items-end')]//li[text()='1']`, // Change the Number to locate the element
    paginationRecordsNextBtn:`//button[text()='Next']`,
    paginationRecordsPrevBtn:`//button[text()='Prev']`,
}

//OrderHistoryLocators.ts