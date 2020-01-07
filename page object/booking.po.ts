import { BasePage } from '../helper/base';
import { BookingModel } from './modelMapping/responReturnModel/bookingModel';
import { ConfirmationInfoViewModel } from './modelMapping/responReturnModel/confirmationInfoViewModel';
import { FlightViewModel } from './modelMapping/responReturnModel/flighViewModel';
import { PaymentViewModel } from './modelMapping/responReturnModel/paymentViewModel';
import { TravellerViewModels } from './modelMapping/responReturnModel/travellerViewModels';
import { ExpectedBookingModel } from './modelMapping/expectedModel/expBookingModel';
import { ExpectedConfirmationInfoViewModel } from './modelMapping/expectedModel/expconfirmationInfoViewModel';
import { ExpectedPaymentViewModel } from './modelMapping/expectedModel/exppaymentViewModel';
import { ExpectedTravellerViewModels } from './modelMapping/expectedModel/exptravellerViewModels';
import { ExpectedFlightViewModel } from './modelMapping/expectedModel/expflighViewModel';
import { isNullOrUndefined } from 'util';
export class BookingPageObject extends BasePage {
    constructor() {
        super();
    }
    bookingModel = new BookingModel();
    expBookingModel = new ExpectedBookingModel();
    confirmationInfoViewModel = new ConfirmationInfoViewModel();
    paymentViewModel = new PaymentViewModel();
    travellerViewModels = Array(new TravellerViewModels());
    flightViewModel = new FlightViewModel();

    expconfirmationInfoViewModel = new ExpectedConfirmationInfoViewModel();
    exppaymentViewModel = new ExpectedPaymentViewModel();
    exptravellerViewModels = new Array(new ExpectedTravellerViewModels());
    expflightViewModel = new ExpectedFlightViewModel();

    mappingBookingResponse(response: string) {
        let tmpResponse = JSON.parse(response);

        this.flightViewModel.departTime = tmpResponse.model.flightViewModel.departTime;
        this.flightViewModel.id = tmpResponse.model.flightViewModel.id;
        this.flightViewModel.return = tmpResponse.model.flightViewModel.return;
        this.flightViewModel.returnAirlineName = tmpResponse.model.flightViewModel.returnAirlineName;
        this.flightViewModel.returnAirlinePicture = tmpResponse.model.flightViewModel.returnAirlinePicture;
        this.flightViewModel.returnAirlinePlane = tmpResponse.model.flightViewModel.returnAirlinePlane;
        this.flightViewModel.returnAirport = tmpResponse.model.flightViewModel.returnAirport;
        this.flightViewModel.returnTime = tmpResponse.model.flightViewModel.returnTime;
        this.flightViewModel.roundTrip = tmpResponse.model.flightViewModel.roundTrip;
        this.flightViewModel.totalMoney = tmpResponse.model.flightViewModel.totalMoney;
        this.flightViewModel.totalTime = tmpResponse.model.flightViewModel.totalTime;
        this.flightViewModel.updatedDate = tmpResponse.model.flightViewModel.updatedDate;
        this.flightViewModel.classType = tmpResponse.model.flightViewModel.classType;
        this.flightViewModel.createdDate = tmpResponse.model.flightViewModel.createdDate;
        this.flightViewModel.depart = tmpResponse.model.flightViewModel.depart;
        this.flightViewModel.departAirlineName = tmpResponse.model.flightViewModel.departAirlineName;
        this.flightViewModel.departAirlinePicture = tmpResponse.model.flightViewModel.departAirlinePicture;
        this.flightViewModel.departAirlinePlane = tmpResponse.model.flightViewModel.departAirlinePlane;
        this.flightViewModel.departAirport = tmpResponse.model.flightViewModel.departAirport;

        // //Push traveller data to model
        this.travellerViewModels = [];
        for (let tIndex = 0; tIndex < tmpResponse.model.travellerViewModels.length; tIndex++) {
            this.travellerViewModels.push({
                id: tmpResponse.model.travellerViewModels[tIndex].id,
                lastName: tmpResponse.model.travellerViewModels[tIndex].lastName,
                nationality: tmpResponse.model.travellerViewModels[tIndex].nationality,
                pasportExpiryDateMonth: tmpResponse.model.travellerViewModels[tIndex].pasportExpiryDateMonth,
                pasportExpiryDateYear: tmpResponse.model.travellerViewModels[tIndex].pasportExpiryDateYear,
                pasportId: tmpResponse.model.travellerViewModels[tIndex].pasportId,
                pasportNoExpiry: tmpResponse.model.travellerViewModels[tIndex].pasportNoExpiry,
                personType: tmpResponse.model.travellerViewModels[tIndex].personType,
                travelInsurance: tmpResponse.model.travellerViewModels[tIndex].travelInsurance,
                checkedBaggae: tmpResponse.model.travellerViewModels[tIndex].checkedBaggae,
                dateOfBirth: tmpResponse.model.travellerViewModels[tIndex].dateOfBirth,
                firstName: tmpResponse.model.travellerViewModels[tIndex].firstName,
                gender: tmpResponse.model.travellerViewModels[tIndex].gender,
            });
        }

        this.paymentViewModel.billingAddress = tmpResponse.model.paymentViewModel.billingAddress;
        this.paymentViewModel.cardNumber = tmpResponse.model.paymentViewModel.cardNumber;
        this.paymentViewModel.city = tmpResponse.model.paymentViewModel.city;
        this.paymentViewModel.countryId = tmpResponse.model.paymentViewModel.countryId;
        this.paymentViewModel.creditCardType = tmpResponse.model.paymentViewModel.creditCardType;
        this.paymentViewModel.cvvCode = tmpResponse.model.paymentViewModel.cvvCode;
        this.paymentViewModel.expiryDateInMonth = tmpResponse.model.paymentViewModel.expiryDateInMonth;
        this.paymentViewModel.expiryDateInYear = tmpResponse.model.paymentViewModel.expiryDateInYear;
        this.paymentViewModel.id = tmpResponse.model.paymentViewModel.id;
        this.paymentViewModel.nameOnTheCard = tmpResponse.model.paymentViewModel.nameOnTheCard;
        this.paymentViewModel.zipCode = tmpResponse.model.paymentViewModel.zipCode;

        this.confirmationInfoViewModel.emailAddress = tmpResponse.model.confirmationInfoViewModel.emailAddress;
        this.confirmationInfoViewModel.id = tmpResponse.model.confirmationInfoViewModel.id;
        this.confirmationInfoViewModel.isAcceptedRule = tmpResponse.model.confirmationInfoViewModel.isAcceptedRule;
        this.confirmationInfoViewModel.isSendEmail = tmpResponse.model.confirmationInfoViewModel.isSendEmail;
        this.confirmationInfoViewModel.phoneNumber = tmpResponse.model.confirmationInfoViewModel.phoneNumber;

        this.bookingModel.id = tmpResponse.model.id;
        this.bookingModel.code = tmpResponse.model.code;

        this.bookingModel.confirmationInfoViewModel = this.confirmationInfoViewModel;
        this.bookingModel.flightViewModel = this.flightViewModel;
        this.bookingModel.paymentViewModel = this.paymentViewModel;
        this.bookingModel.travellerViewModels = this.travellerViewModels;

        return this.bookingModel;
    }
    mappingExpBookingResponse(response: string) {
        let tmpResponse = JSON.parse(response);

        this.expflightViewModel.departTime = tmpResponse.model.flightViewModel.departTime;
        this.expflightViewModel.id = tmpResponse.model.flightViewModel.id;
        this.expflightViewModel.return = tmpResponse.model.flightViewModel.return;
        this.expflightViewModel.returnAirlineName = tmpResponse.model.flightViewModel.returnAirlineName;
        this.expflightViewModel.returnAirlinePicture = tmpResponse.model.flightViewModel.returnAirlinePicture;
        this.expflightViewModel.returnAirlinePlane = tmpResponse.model.flightViewModel.returnAirlinePlane;
        this.expflightViewModel.returnAirport = tmpResponse.model.flightViewModel.returnAirport;
        this.expflightViewModel.returnTime = tmpResponse.model.flightViewModel.returnTime;
        this.expflightViewModel.roundTrip = tmpResponse.model.flightViewModel.roundTrip;
        this.expflightViewModel.totalMoney = tmpResponse.model.flightViewModel.totalMoney;
        this.expflightViewModel.totalTime = tmpResponse.model.flightViewModel.totalTime;
        this.expflightViewModel.updatedDate = tmpResponse.model.flightViewModel.updatedDate;
        this.expflightViewModel.classType = tmpResponse.model.flightViewModel.classType;
        this.expflightViewModel.createdDate = tmpResponse.model.flightViewModel.createdDate;
        this.expflightViewModel.depart = tmpResponse.model.flightViewModel.depart;
        this.expflightViewModel.departAirlineName = tmpResponse.model.flightViewModel.departAirlineName;
        this.expflightViewModel.departAirlinePicture = tmpResponse.model.flightViewModel.departAirlinePicture;
        this.expflightViewModel.departAirlinePlane = tmpResponse.model.flightViewModel.departAirlinePlane;
        this.expflightViewModel.departAirport = tmpResponse.model.flightViewModel.departAirport;

        //Push traveller data to model
        // this.exptravellerViewModels = new Array(tmpResponse.model.travellerViewModels.length).fill(Object.create(null));
        this.exptravellerViewModels = [];
        for (let tIndex = 0; tIndex < tmpResponse.model.travellerViewModels.length; tIndex++) {
            this.exptravellerViewModels.push({
                id: tmpResponse.model.travellerViewModels[tIndex].id,
                lastName: tmpResponse.model.travellerViewModels[tIndex].lastName,
                nationality: tmpResponse.model.travellerViewModels[tIndex].nationality,
                pasportExpiryDateMonth: tmpResponse.model.travellerViewModels[tIndex].pasportExpiryDateMonth,
                pasportExpiryDateYear: tmpResponse.model.travellerViewModels[tIndex].pasportExpiryDateYear,
                pasportId: tmpResponse.model.travellerViewModels[tIndex].pasportId,
                pasportNoExpiry: tmpResponse.model.travellerViewModels[tIndex].pasportNoExpiry,
                personType: tmpResponse.model.travellerViewModels[tIndex].personType,
                travelInsurance: tmpResponse.model.travellerViewModels[tIndex].travelInsurance,
                checkedBaggae: tmpResponse.model.travellerViewModels[tIndex].checkedBaggae,
                dateOfBirth: tmpResponse.model.travellerViewModels[tIndex].dateOfBirth,
                firstName: tmpResponse.model.travellerViewModels[tIndex].firstName,
                gender: tmpResponse.model.travellerViewModels[tIndex].gender,
            });
        }
        this.exppaymentViewModel.billingAddress = tmpResponse.model.paymentViewModel.billingAddress;
        this.exppaymentViewModel.cardNumber = tmpResponse.model.paymentViewModel.cardNumber;
        this.exppaymentViewModel.city = tmpResponse.model.paymentViewModel.city;
        this.exppaymentViewModel.countryId = tmpResponse.model.paymentViewModel.countryId;
        this.exppaymentViewModel.creditCardType = tmpResponse.model.paymentViewModel.creditCardType;
        this.exppaymentViewModel.cvvCode = tmpResponse.model.paymentViewModel.cvvCode;
        this.exppaymentViewModel.expiryDateInMonth = tmpResponse.model.paymentViewModel.expiryDateInMonth;
        this.exppaymentViewModel.expiryDateInYear = tmpResponse.model.paymentViewModel.expiryDateInYear;
        this.exppaymentViewModel.id = tmpResponse.model.paymentViewModel.id;
        this.exppaymentViewModel.nameOnTheCard = tmpResponse.model.paymentViewModel.nameOnTheCard;
        this.exppaymentViewModel.zipCode = tmpResponse.model.paymentViewModel.zipCode;

        this.expconfirmationInfoViewModel.emailAddress = tmpResponse.model.confirmationInfoViewModel.emailAddress;
        this.expconfirmationInfoViewModel.id = tmpResponse.model.confirmationInfoViewModel.id;
        this.expconfirmationInfoViewModel.isAcceptedRule = tmpResponse.model.confirmationInfoViewModel.isAcceptedRule;
        this.expconfirmationInfoViewModel.isSendEmail = tmpResponse.model.confirmationInfoViewModel.isSendEmail;
        this.expconfirmationInfoViewModel.phoneNumber = tmpResponse.model.confirmationInfoViewModel.phoneNumber;

        this.expBookingModel.id = tmpResponse.model.id;
        this.expBookingModel.code = tmpResponse.model.code;

        this.expBookingModel.confirmationInfoViewModel = this.expconfirmationInfoViewModel;
        this.expBookingModel.flightViewModel = this.expflightViewModel;
        this.expBookingModel.paymentViewModel = this.exppaymentViewModel;
        this.expBookingModel.travellerViewModels = this.exptravellerViewModels;

        return this.expBookingModel;
    }
    isDataDisplayedInResponse(expectedResponse: string, actualResponse: string) {
        let actResponse = this.mappingBookingResponse(actualResponse);
        let expResponse = this.mappingExpBookingResponse(expectedResponse);

        let condition = true;
        let isIdAndCode = this.isCodeAndIdDisplayed(expectedResponse, actualResponse);

        if (!isIdAndCode) {
            console.log("Checking failed on BOOKING ID and CODE");
            return false;
        }

        // Check flight"
        let actFlight = actResponse.flightViewModel, expFlight = expResponse.flightViewModel;
        if (!this.isDataDisplayedInJsonObject(expFlight, actFlight)) {
            console.log("Checking failed on FLIGHT MODEL");
            return false;
        }

        // Check TravellerViewModels
        let actTraveller = actResponse.travellerViewModels, expTraveller = expResponse.travellerViewModels;
        let tmpExpectedTravellerNode, tmpActualTravellerNode;

        if (expTraveller.length != actTraveller.length) {
            console.log("Traveller expected " + expTraveller.length + " object(s) but response return " + actTraveller.length + " object(s)");
            return false;
        }

        else {
            for (let i = 0; i < expTraveller.length; i++) {
                tmpExpectedTravellerNode = expTraveller[i];
                tmpActualTravellerNode = actTraveller[i];
                if (!this.isDataDisplayedInJsonObject(tmpExpectedTravellerNode, tmpActualTravellerNode)) {
                    console.log("Checking failed on TRAVELLER MODEL");
                    return false;
                }
            }
        }

        // Check PamentViewModels
        let actPayment = actResponse.paymentViewModel, expPayment = expResponse.paymentViewModel;
        if (!this.isDataDisplayedInJsonObject(expPayment, actPayment)) {
            console.log("Checking failed on PAYMENT MODEL");
            return false;
        }

        // Check confirmationInfoViewModel
        let actConfirm = actResponse.confirmationInfoViewModel, expConfirm = expResponse.confirmationInfoViewModel;
        if (!this.isDataDisplayedInJsonObject(expConfirm, actConfirm)) {
            console.log("Checking failed on CONFIRMATION MODEL");
            return false;
        }
        return condition;
    }
    isCodeAndIdDisplayed(expectedResponse: string, actualResponse: string) {
        let actResponse = this.mappingBookingResponse(actualResponse);
        let expResponse = this.mappingExpBookingResponse(expectedResponse);
        let condition = true;
        if (actResponse.id != expResponse.id || actResponse.code != expResponse.code) {
            return false
        }
        return condition;
    }
}