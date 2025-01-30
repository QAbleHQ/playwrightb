import { Page } from 'playwright';
class CompanyProfilePage {
  constructor(private page: Page) {}

  // Button Actions
  async isButtonVisible(locator: string): Promise<boolean> {
    const button = await this.page.locator(locator);
    return button.isVisible();
  }

  async isButtonClickable(locator: string): Promise<boolean> {
    const button = await this.page.locator(locator);
    return button.isEnabled();
  }

  async isButtonEnabled(locator: string): Promise<boolean> {
    const button = await this.page.locator(locator);
    return button.isEnabled();
  }

  async isButtonDisabled(locator: string): Promise<boolean> {
    const button = await this.page.locator(locator);
    return button.isDisabled();
  }

  async hoverButton(locator: string): Promise<void> {
    const button = await this.page.locator(locator);
    await button.hover();
  }

  // Input Field Actions
  async isInputFieldVisible(locator: string): Promise<boolean> {
    const inputField = await this.page.locator(locator);
    return inputField.isVisible();
  }

  async clickInputField(locator: string): Promise<void> {
    const inputField = await this.page.locator(locator);
    await inputField.click();
  }

  async clearInputField(locator: string): Promise<void> {
    const inputField = await this.page.locator(locator);
    await inputField.fill('');
  }

  async enterDataIntoInputField(locator: string, data: string): Promise<void> {
    const inputField = await this.page.locator(locator);
    await inputField.fill(data);
  }

  async getInputFieldData(locator: string): Promise<string> {
    const inputField = await this.page.locator(locator);
    return inputField.inputValue();
  }

  async verifyInputText(locator: string, expectedText: string): Promise<boolean> {
    const inputField = await this.page.locator(locator);
    const text = await inputField.inputValue();
    return text === expectedText;
  }

  // Text Actions
  async isTextVisible(locator: string): Promise<boolean> {
    const textElement = await this.page.locator(locator);
    return textElement.isVisible();
  }

  async getText(locator: string): Promise<string> {
    const textElement = await this.page.locator(locator);
    return textElement.innerText();
  }

  async verifyText(locator: string, expectedText: string): Promise<boolean> {
    const textElement = await this.page.locator(locator);
    const text = await textElement.innerText();
    return text === expectedText;
  }

}


