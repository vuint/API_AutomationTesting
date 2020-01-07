import { BasePage } from '../helper/base';

export class APITestingPageObject extends BasePage {
    constructor() {
        super();
    }
    async postApi(theUrl: string, authenUerName: string, authenPassword: string, bodyInJson: string) {
        return await this.httpAPIPost(theUrl, authenUerName, authenPassword, bodyInJson);
    }
    async putApi(theUrl: string, authenUerName: string, authenPassword: string, bodyInJson: string) {
        return await this.httpAPIPut(theUrl, authenUerName, authenPassword, bodyInJson);
    }
    async getApi(theUrl: string, authenUerName: string, authenPassword: string) {
        return await this.httpAPIGet(theUrl, authenUerName, authenPassword);
    }
}