import { ElementHelper } from "../utils/elementHelper";
import { VerificationHelpers } from "../utils/verificationHelper";
import { OrderHistoryLocators } from "../locators/OrderHistoryLocators";
import OrderHistoryLocatorsTestData from "../testdata/pcaSkinCare.testdata.json";

export class OrderHistoryPage {

    static async visibilityOrderHistoryHeading(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.orderHistoryHeading);
    }

    static async verifyOrderHistoryHeadingText(page: any) {
        await VerificationHelpers.elementContainsText(page, OrderHistoryLocators.orderHistoryHeading, OrderHistoryLocatorsTestData.OrderHistoryPage.heading);
    }

    static async visibilityOrderTableDateHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.orderTableDateHeader);
    }

    static async visibilityOrderTableOrderHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.orderTableOrderHeader);
    }

    static async visibilityOrderTableAmountHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.orderTableAmountHeader);
    }

    static async visibilityOrderTableStatusHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.orderTableStatusHeader);
    }

    static async visibilityOrderTableTrackingHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.orderTableTrackingHeader);
    }

    static async visibilityOrderTableShipToHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.orderTableShipToHeader);
    }

    static async visibilityOrderTableShipToAddressHeader(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.orderTableShipToAddress);
    }

    static async visibilityOrderTable(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.orderHistoryTable);
    }

    static async verifyOrderHistoryLocatorsDateHeaderText(page: any) {
        await VerificationHelpers.elementContainsText(page, OrderHistoryLocators.orderTableDateHeader, OrderHistoryLocatorsTestData.OrderHistoryPage.orderDateHeader);
    }

    static async verifyOrderHistoryLocatorsOrderHeaderText(page: any) {
        await VerificationHelpers.elementContainsText(page, OrderHistoryLocators.orderTableOrderHeader, OrderHistoryLocatorsTestData.OrderHistoryPage.orderOrderHeader);
    }

    static async verifyOrderHistoryLocatorsAmountHeaderText(page: any) {
        await VerificationHelpers.elementContainsText(page, OrderHistoryLocators.orderTableAmountHeader, OrderHistoryLocatorsTestData.OrderHistoryPage.orderAmountHeader);
    }

    static async verifyOrderHistoryStatusHeaderText(page: any) {
        await VerificationHelpers.elementContainsText(page, OrderHistoryLocators.orderTableStatusHeader, OrderHistoryLocatorsTestData.OrderHistoryPage.orderStatusHeader);
    }

    static async verifyOrderHistoryTrackingHeaderText(page: any) {
        await VerificationHelpers.elementContainsText(page, OrderHistoryLocators.orderTableTrackingHeader, OrderHistoryLocatorsTestData.OrderHistoryPage.orderTrackingHeader);
    }

    static async verifyOrderHistoryShipToHeaderText(page: any) {
        await VerificationHelpers.elementContainsText(page, OrderHistoryLocators.orderTableShipToHeader, OrderHistoryLocatorsTestData.OrderHistoryPage.orderShipToHeader);
    }

    static async verifyOrderHistoryShipToAddressHeaderText(page: any) {
        await VerificationHelpers.elementContainsText(page, OrderHistoryLocators.orderTableShipToAddress, OrderHistoryLocatorsTestData.OrderHistoryPage.orderShipToAddressHeader);
    }

    static async clickOnOrderTableDateHeader(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.orderTableDateHeader);
    }

    static async clickOnOrderTableOrderHeader(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.orderTableOrderHeader);
    }

    static async clickOnOrderTableAmountHeader(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.orderTableAmountHeader);
    }

    static async clickOnOrderTableStatusHeader(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.orderTableStatusHeader);
    }

    static async clickOnOrderTableShipToHeader(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.orderTableShipToHeader);
    }

    static async clickOnOrderTableShipToAddressHeader(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.orderTableShipToAddress);
    }

    static async visibilityRecordsDropDown(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.recordsDropDown)
    }

    static async clickRecordsDropDown(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.recordsDropDown);
    }

    static async clickRecordsDropDown20(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.recordsDropDown20);
    }

    static async clickRecordsDropDown50(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.recordsDropDown50);
    }

    static async clickRecordsDropDown100(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.recordsDropDown100);
    }

    static async visibilityPaginationNextButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.paginationRecordsNextBtn);
    }

    static async clickPaginationNextButton(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.paginationRecordsNextBtn);
    }

    static async visibilityPaginationPrevButton(page: any) {
        await VerificationHelpers.elementIsVisible(page, OrderHistoryLocators.paginationRecordsPrevBtn);
    }

    static async clickPaginationPrevButton(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.paginationRecordsPrevBtn);
    }

    //Change the Pagination Number from the locator to locate other pagination number
    static async clickOnPageNumber(page: any) {
        await ElementHelper.clickElement(page, OrderHistoryLocators.recordsPagination);
    }
}
