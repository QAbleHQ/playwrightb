export const InvoiceLocators = {

    invoiceHistoryTable:"//table[@role='table']",
    invoiceHistoryTitle:"//h2[@class='border-brand-primary table-heading border-b pb-2 text-xl font-bold']",
    selectInvoicrForPdf:"//p[@class='mt-3 mb-5 text-base font-light']",
    dateTag:"//span[normalize-space()='Date']",
    dateSortingByUp:"//th[@class='asc date header pb-2 text-base']//div[@class='relative ml-2 h-7']//*[name()='svg']//*[name()='path' and contains(@d,'M5.293 7.2')]",
    invoiceTag:"//span[normalize-space()='invoice #']",
    invoiceSortingByUp:"//th[contains(@class,'invoice header pb-2 text-base')]//div[@class='relative ml-2 h-7']//*[@class='absolute top-0 h-5 w-5 rotate-180 opacity-40']",
    invoiceSortingByDown:"//th[contains(@class,'invoice header pb-2 text-base')]//div[@class='relative ml-2 h-7']//*[@class='absolute top-2.5 h-5 w-5 opacity-40']",
    amountTag:"//span[normalize-space()='Amount']",
    amountSortingByUp:"//th[contains(@class,'amount header pb-2 text-base')]//div[@class='relative ml-2 h-7']//*[@class='absolute top-0 h-5 w-5 rotate-180 opacity-40']",
    amountSortingByDown:"//th[contains(@class,'amount header pb-2 text-base')]//div[@class='relative ml-2 h-7']//*[@class='absolute top-2.5 h-5 w-5 opacity-40']",
    statusTag:"//span[normalize-space()='Status']",
    statusSortingUp:"//th[contains(@class,'status header pb-2 text-base')]//div[@class='relative ml-2 h-7']//*[@class='absolute top-0 h-5 w-5 rotate-180 opacity-40']",
    statusSortingDowm:"//th[contains(@class,'status header pb-2 text-base')]//div[@class='relative ml-2 h-7']//*[@class='absolute top-2.5 h-5 w-5 opacity-40']",
    invoice110002862May242024:"//table//tr[1]//td[1]",
    invoiceNumber110002862:"//span[normalize-space()='110002862']",
    invoice110002862Amount:"//span[normalize-space()='$390.00']",
    invoice110002862Status:"//span[text()='110002862']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice110002869May242024:"//table//tr[2]//td[1]",
    Invoicenumber110002869:"//span[normalize-space()='110002869']",
    Invoice110002869Amount:"//span[normalize-space()='$409.00']",
    invoice110002869Status:"//span[text()='110002862']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice110002859May232024:"//table//tr[3]//td[1]",
    invoicenumber110002859:"//span[normalize-space()='110002859']",
    invoice110002859Amount:"//span[normalize-space()='$403.82']",
    invoice110002859Status:"//span[text()='110002859']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice90002004Feb282024:"//table//tr[4]//td[1]",
    invoicenumber90002004:"//span[normalize-space()='90002004']",
    invoice90002004Amount:"//span[normalize-space()='$216.50']",
    invoice90002004Status:"//span[text()='90002004']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice90002001Feb212024:"//table//tr[5]//td[1]",
    invoicenumber90002001:"//span[normalize-space()='90002001']",
    invoice90002001Amount:"//span[normalize-space()='$0.00']",
    invoice90002001Status:"//span[text()='90002001']//parent::div//parent::td//following-sibling::td//span[text()='Cancelled']",
    invoice90002000Feb142024:"//table//tr[6]//td[1]",
    invoicenumber90002000:"//span[normalize-space()='90002000']",
    invoice90002000Amount:"//span[normalize-space()='$252.50']",
    invoice90002000Status:"//span[text()='90002000']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice90001998Feb132024:"//table//tr[7]//td[1]",
    invoicenumber90001998:"//span[normalize-space()='90001998']",
    invoice90001998Amount:"//span[normalize-space()='$1262.50']",
    invoice90001998Status:"//span[text()='90001998']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice90001990Feb132024:"//table//tr[8]//td[1]",
    invoicenumber90001999:"//span[normalize-space()='90001999']",
    invoice90001990Amount:"//span[normalize-space()='$1010.00']",
    invoice90001990Status:"//span[text()='90001990']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice90001987Dec182023:"//table//tr[9]//td[1]",
    invoicenumber90001987:"//span[normalize-space()='90001987']",
    invoice90001987Amount:"//span[normalize-space()='$907.50']",
    invoice90001987Status:"//span[text()='90001987']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice90001975Aug082023:"//table//tr[10]//td[1]",
    invoicenumber90001975:"//span[normalize-space()='90001975']",
    invoice90001975Amount:"//span[normalize-space()='$1838.50']",
    invoice90001975Status:"//span[text()='90001975']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice90001976Aug082023:"//table//tr[11]//td[1]",
    invoicenumber90001976:"//span[normalize-space()='90001976']",
    invoice90001976Amount:"//span[normalize-space()='$1394.00']",
    invoice90001976Status:"//span[text()='90001976']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice90001977Aug082023:"//table//tr[12]//td[1]",
    invoicenumber90001977:"//span[normalize-space()='90001977']",
    invoice90001977Amount:"//span[normalize-space()='$505.00']",
    invoice90001977Status:"//span[text()='90001977']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice90001974Aug022023:"//table//tr[13]//td[1]",
    invoicenumber90001974:"//span[normalize-space()='90001974']",
    invoice90001974Amount:"//span[normalize-space()='$0.00']",
    invoice90001974Status:"//span[text()='90001974']//parent::div//parent::td//following-sibling::td//span[text()='Cancelled']",
    invoice90001973Jul012023:"//table//tr[14]//td[1]",
    invoicenumber90001973:"//span[normalize-space()='90001973']",
    invoice90001973Amount:"//span[normalize-space()='$252.50']",
    invoice90001973Status:"//span[text()='90001973']//parent::div//parent::td//following-sibling::td//span[text()='Open']",
    invoice90001955Jun012023:"//table//tr[15]//td[1]",
    invoicenumber90001955:"//span[normalize-space()='90001955']",
    invoice90001955Amount:"//span[normalize-space()='$168.42']",
    invoice90001955Status:"//span[text()='90001955']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice90001936apr202023:"//table//tr[16]//td[1]",
    invoicenumber90001936:"//span[normalize-space()='90001936']",
    invoice90001936Amount:"//span[normalize-space()='$2425.00']",
    invoice90001936Status:"//span[text()='90001936']//parent::div//parent::td//following-sibling::td//span[text()='Open']",
    invoice90001855Feb162023:"//table//tr[17]//td[1]",
    invoicenumber90001855:"//span[normalize-space()='90001855']",
    invoice90001855Amount:"//span[normalize-space()='$1201.00']",
    invoice90001855Status:"//span[text()='90001855']//parent::div//parent::td//following-sibling::td//span[text()='Closed']",
    invoice90001845Feb152023:"//table//tr[18]//td[1]",
    invoicenumber90001845:"//span[normalize-space()='90001845']",
    invoice90001845Amount:"//span[normalize-space()='$15.06']",
    invoice90001845Status:"//span[text()='90001845']//parent::div//parent::td//following-sibling::td//span[text()='Open']",
    invoice90001852Feb152023:"//table//tr[19]//td[1]",
    invoicenumber90001852:"//span[normalize-space()='90001852']",
    invoice90001852Amount:"//span[normalize-space()='$181.50']",
    invoice90001852Status:"//span[text()='90001852']//parent::div//parent::td//following-sibling::td//span[text()='Open']",
    invoice90001871Feb152023:"//table//tr[20]//td[1]",
    invoicenumber90001871:"//span[normalize-space()='90001871']",
    invoice90001871Amount:"//span[normalize-space()='$181.50']",
    invoice90001871Status:"//span[text()='90001871']//parent::div//parent::td//following-sibling::td//span[text()='Cancelled']",
    show20Records:"//option[text()='20']",
    show50Records:"//option[text()='50']",
    show100Records:"//option[text()='100']",
    previousButton:"//button[normalize-space()='Prev']",
    page1:"//li[normalize-space()='1']",
    page2:"//li[normalize-space()='2']",
    nextButton:"//button[normalize-space()='Next']",
    scrollBacktotoButton:"//button[@aria-label='Scroll back to top']"








}



