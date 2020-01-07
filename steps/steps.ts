import { Given, When, Then } from 'cucumber';
import { expect } from '../helper/chai-imports';
import { APITestingPageObject } from '../page object/common.po';
import { BasePage } from '../helper/base';
import { BookingPageObject } from '../page object/booking.po';
import { SearchFlightPageObject } from '../page object/searchFlight';

const basePage = new BasePage();
const apiTestingPage = new APITestingPageObject();
const booKingPage = new BookingPageObject();
const searchFlightPage = new SearchFlightPageObject();
let responseReturn: any[], getFlightId, getTravelerId, getBookingFlightId, getPaymentId, getConfirmId, bookKingResponse = new Array;

When(/^I send "(.*?)" request to "(.*?)" url with parameters as following info$/, { timeout: basePage.timeout }, async (requestType: string, url: string, docString) => {
    let jsonBody = docString;
    let response, userName = "", passWord = "";
    let replaceObject;

    if (url.includes("getFlightId")) {
        replaceObject = "getFlightId";
        url = basePage.replaceAllText(url, getFlightId, replaceObject);
    }

    else if (url.includes("bookingCode")) {
        replaceObject = "bookingCode";
        url = basePage.replaceAllText(url, bookKingResponse[1], replaceObject);
    }

    if (jsonBody.includes("getFlightId")) {
        replaceObject = "getFlightId";
        jsonBody = basePage.replaceAllText(jsonBody, getFlightId, replaceObject);
    }

    console.log("Send " + requestType + " request to url: " + url);
    switch (requestType) {
        case "post": {
            response = await apiTestingPage.postApi(url, userName, passWord, jsonBody);
            responseReturn = response;
            break;
        }
        case "put": {
            response = await apiTestingPage.putApi(url, userName, passWord, jsonBody);
            responseReturn = response;
            break;
        }
        case "get": {
            response = await apiTestingPage.getApi(url, userName, passWord);
            responseReturn = response;
            break;
        }
    }
});

Then(/^I get "(.*?)" as status code and "(.*?)" as message in response retun$/, async (statusCode: string, responseMessage: string) => {
    let responseRequest, checkConditon, codeResponse, messageResponse;
    responseRequest = responseReturn;
    codeResponse = responseRequest.status;
    messageResponse = responseRequest.statusText;
    codeResponse = codeResponse.toString().trim();
    messageResponse = messageResponse.toString().trim();
    console.log("Response message: " + messageResponse);
    console.log("Response status code: " + codeResponse);
    if (codeResponse === statusCode && messageResponse === responseMessage) {
        checkConditon = true;
    }
    else checkConditon = false;

    await expect(checkConditon).to.equal(true);
});

Then(/^I get detail of data response as following info$/, async (docString) => {
    let expResponse = JSON.parse(docString), checkCondition = false, actualResponse;
    actualResponse = responseReturn;
    actualResponse = actualResponse.data;
    actualResponse = JSON.stringify(actualResponse);
    expResponse = JSON.stringify(expResponse);

    expResponse = basePage.replaceAllText(expResponse, getFlightId, "getFlightId")

    if (expResponse === actualResponse) {
        checkCondition = true;
    }
    return expect(checkCondition).to.equal(true);
});

When(/^I get id of a flight in response$/, async () => {
    getFlightId = responseReturn;
    getFlightId = getFlightId.data.model[0].id;
    console.log("Get flight id: " + getFlightId);
    return getFlightId;
});

When(/^I get "(.*?)" id of booking flight in response$/, async (section: string) => {
    switch (section) {
        case "flight": {
            getBookingFlightId = responseReturn;
            getBookingFlightId = getBookingFlightId.data.model.flightViewModel.id;
            console.log("Get flight id: " + getBookingFlightId);
            return getBookingFlightId;
        }
        case "payment": {
            getPaymentId = responseReturn;
            getPaymentId = getPaymentId.data.model.paymentViewModel.id;
            console.log("Get Payment id: " + getPaymentId);
            return getPaymentId;
        }
        case "confirmation": {
            getConfirmId = responseReturn;
            getConfirmId = getConfirmId.data.model.confirmationInfoViewModel.id;
            console.log("Get confirmation id: " + getConfirmId);
            return getConfirmId;
        }
        case "travellers": {
            getTravelerId = responseReturn;
            getTravelerId = getTravelerId.data.model.travellerViewModels[0].id
            console.log("Get travellers id: " + getTravelerId);
            return getTravelerId;
        }
    }

});

When(/^I get id and code of a booking flight in response$/, async () => {
    let tmpResponse;
    tmpResponse = responseReturn;
    let getBookingId = tmpResponse.data.model.BookingId;
    let getBookingCode = tmpResponse.data.model.Code;
    console.log("Get booking id: " + getBookingId);
    console.log("Get booking code: " + getBookingCode);
    bookKingResponse.push(getBookingId, getBookingCode);
    return bookKingResponse;
});

Then(/^I get data of booking flight return in response as following info$/, async (docString) => {
    let expResponse = JSON.parse(docString), checkCondition = false, actualResponse;
    actualResponse = responseReturn;
    actualResponse = actualResponse.data;
    actualResponse = JSON.stringify(actualResponse);
    expResponse = JSON.stringify(expResponse);

    expResponse = basePage.replaceAllText(expResponse, bookKingResponse[0], "bookingId")
    expResponse = basePage.replaceAllText(expResponse, bookKingResponse[1], "bookingCode")

    // console.log("Expected booking flight return: " + expResponse);
    // console.log("Acutal booking flight return: " + actualResponse);

    if (expResponse === actualResponse) {
        checkCondition = true;
    }
    return expect(checkCondition).to.equal(true);
});

Then(/^I get detail of booking flight for a booking code in response as following info$/, async (docString) => {
    let expResponse = JSON.parse(docString), checkCondition = false, actualResponse;
    actualResponse = responseReturn;
    actualResponse = actualResponse.data;
    actualResponse = JSON.stringify(actualResponse);
    expResponse = JSON.stringify(expResponse);

    expResponse = basePage.replaceAllText(expResponse, getBookingFlightId, "getFlightId");
    expResponse = basePage.replaceAllText(expResponse, bookKingResponse[0], "bookingId");
    expResponse = basePage.replaceAllText(expResponse, bookKingResponse[1], "bookingCode");
    expResponse = basePage.replaceAllText(expResponse, getTravelerId, "getTravellersId");
    expResponse = basePage.replaceAllText(expResponse, getPaymentId, "getPaymentId");
    expResponse = basePage.replaceAllText(expResponse, getConfirmId, "getConfirmationId");

    if (expResponse === actualResponse) {
        checkCondition = true;
    }
    return expect(checkCondition).to.equal(true);
});

Then(/^I get data of booking flight of booking code return in response as following info$/, async (docString) => {
    let expResponse = JSON.parse(docString), checkCondition = false, actualResponse;
    actualResponse = responseReturn;
    actualResponse = actualResponse.data;

    actualResponse = JSON.stringify(actualResponse);
    expResponse = JSON.stringify(expResponse);

    expResponse = basePage.replaceAllText(expResponse, getBookingFlightId, "getFlightId");
    expResponse = basePage.replaceAllText(expResponse, bookKingResponse[0], "bookingId");
    expResponse = basePage.replaceAllText(expResponse, bookKingResponse[1], "bookingCode");
    expResponse = basePage.replaceAllText(expResponse, getTravelerId, "getTravellersId");
    expResponse = basePage.replaceAllText(expResponse, getPaymentId, "getPaymentId");
    expResponse = basePage.replaceAllText(expResponse, getConfirmId, "getConfirmationId");

    checkCondition = await booKingPage.isDataDisplayedInResponse(expResponse, actualResponse);
    return expect(checkCondition).to.equal(true);
});

Then(/^I get detail of searching flight with flight id as following info$/, async (docString) => {
    let expResponse = JSON.parse(docString), checkCondition = false, actualResponse;
    actualResponse = responseReturn;
    actualResponse = actualResponse.data;
    actualResponse = JSON.stringify(actualResponse);
    expResponse = JSON.stringify(expResponse);

    expResponse = basePage.replaceAllText(expResponse, getFlightId, "getFlightId")

    checkCondition = await searchFlightPage.isSearchFlightDataDisplayedInResponse(expResponse, actualResponse);
    return expect(checkCondition).to.equal(true);
});

Then(/^I get detail searching list of flight with flight id as following info$/, async (docString) => {
    let expResponse = JSON.parse(docString), checkCondition = false, actualResponse;
    actualResponse = responseReturn;
    actualResponse = actualResponse.data;
    actualResponse = JSON.stringify(actualResponse);
    expResponse = JSON.stringify(expResponse);

    expResponse = basePage.replaceAllText(expResponse, getFlightId, "getFlightId")

    checkCondition = await searchFlightPage.isListSearchFlightDataDisplayedInResponse(expResponse, actualResponse);
    return expect(checkCondition).to.equal(true);
});
