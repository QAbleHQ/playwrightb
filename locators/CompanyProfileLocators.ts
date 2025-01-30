export const CompanyProfileLocators = {

    companyProfileLocators: {

        // Company Name:
        defaultLocation: `//p[text()='Default Location']`,
        name: `//p[@class='font-bold mb-3' and text()='Esha20241028']`,
        shipTo: `//p[text()='Ship to']`,
        streetAddress: `//p[text()='24 Commercial Street']`,
        cityStateCountry: `//p[text()='San Diego, CA, USA']`,
        postalCode: `//p[text()='92101']`,
        phoneNumber: `//p[@aria-label='phone' and text()='6193386379']`,
        requestAddressUpdateButton: `//button[text()='Request Address Update']`,
        sapShipTo: `//h3[text()='SAP Ship-to #']/following-sibling::p[text()='20008693']`,
        salesRepInfo: `//h3[text()='Sales Rep Info']/following-sibling::p[text()='N/A']`,

        // Company Profile section
        companyName: `//p[text()='Company Name']/following-sibling::div[@class='p-4 mb-8 text-base font-bold leading-6 bg-tertiary-100']`,
        primaryContactName: `//p[text()='Primary Contact']/following-sibling::div//p[@aria-label='name: Esha Shah']`,
        primaryContactEmail: `//p[text()='Primary Contact']/following-sibling::div//p[@aria-label='email: bp_esha_shah+all@colpal.com']`,
        streetAddressCompany: `//p[text()='Company Headquarters']/following-sibling::div//p[text()='24 Commercial Street']`,
        cityStateCountryCompany: `//p[text()='Company Headquarters']/following-sibling::div//p[text()='San Diego, CA, USA']`,
        postalCodeCompany: `//p[text()='Company Headquarters']/following-sibling::div//p[text()='92101']`,
        phoneNumberCompany: `//p[text()='Company Headquarters']/following-sibling::div//p[@aria-label='phone' and text()='6193386379']`
    }
}