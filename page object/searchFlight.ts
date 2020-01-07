import { BasePage } from '../helper/base';
import { FlightViewModel } from './modelMapping/responReturnModel/flighViewModel';
import { ExpectedFlightViewModel } from './modelMapping/expectedModel/expflighViewModel';
import { isNullOrUndefined } from 'util';
export class SearchFlightPageObject extends BasePage {
    constructor() {
        super();
    }
    flightViewModel = new FlightViewModel();
    expflightViewModel = new ExpectedFlightViewModel();
    listFlightViewModel = Array(new FlightViewModel());
    listExpectedFlightViewModel = Array(new FlightViewModel());
    mappingSearchFlightResponse(response: string) {
        let tmpResponse = JSON.parse(response);
        this.flightViewModel.departTime = tmpResponse.model.departTime;
        this.flightViewModel.id = tmpResponse.model.id;
        this.flightViewModel.return = tmpResponse.model.return;
        this.flightViewModel.returnAirlineName = tmpResponse.model.returnAirlineName;
        this.flightViewModel.returnAirlinePicture = tmpResponse.model.returnAirlinePicture;
        this.flightViewModel.returnAirlinePlane = tmpResponse.model.returnAirlinePlane;
        this.flightViewModel.returnAirport = tmpResponse.model.returnAirport;
        this.flightViewModel.returnTime = tmpResponse.model.returnTime;
        this.flightViewModel.roundTrip = tmpResponse.model.roundTrip;
        this.flightViewModel.totalMoney = tmpResponse.model.totalMoney;
        this.flightViewModel.totalTime = tmpResponse.model.totalTime;
        this.flightViewModel.updatedDate = tmpResponse.model.updatedDate;
        this.flightViewModel.classType = tmpResponse.model.classType;
        this.flightViewModel.createdDate = tmpResponse.model.createdDate;
        this.flightViewModel.depart = tmpResponse.model.depart;
        this.flightViewModel.departAirlineName = tmpResponse.model.departAirlineName;
        this.flightViewModel.departAirlinePicture = tmpResponse.model.departAirlinePicture;
        this.flightViewModel.departAirlinePlane = tmpResponse.model.departAirlinePlane;
        this.flightViewModel.departAirport = tmpResponse.model.departAirport;
        return this.flightViewModel;
    }

    mappingExpectedSearchFlight(response: string) {
        let tmpResponse = JSON.parse(response);
        this.expflightViewModel.departTime = tmpResponse.model.departTime;
        this.expflightViewModel.id = tmpResponse.model.id;
        this.expflightViewModel.return = tmpResponse.model.return;
        this.expflightViewModel.returnAirlineName = tmpResponse.model.returnAirlineName;
        this.expflightViewModel.returnAirlinePicture = tmpResponse.model.returnAirlinePicture;
        this.expflightViewModel.returnAirlinePlane = tmpResponse.model.returnAirlinePlane;
        this.expflightViewModel.returnAirport = tmpResponse.model.returnAirport;
        this.expflightViewModel.returnTime = tmpResponse.model.returnTime;
        this.expflightViewModel.roundTrip = tmpResponse.model.roundTrip;
        this.expflightViewModel.totalMoney = tmpResponse.model.totalMoney;
        this.expflightViewModel.totalTime = tmpResponse.model.totalTime;
        this.expflightViewModel.updatedDate = tmpResponse.model.updatedDate;
        this.expflightViewModel.classType = tmpResponse.model.classType;
        this.expflightViewModel.createdDate = tmpResponse.model.createdDate;
        this.expflightViewModel.depart = tmpResponse.model.depart;
        this.expflightViewModel.departAirlineName = tmpResponse.model.departAirlineName;
        this.expflightViewModel.departAirlinePicture = tmpResponse.model.departAirlinePicture;
        this.expflightViewModel.departAirlinePlane = tmpResponse.model.departAirlinePlane;
        this.expflightViewModel.departAirport = tmpResponse.model.departAirport;
        return this.expflightViewModel;
    }

    mappingListSearchFlightResponse(response: string) {
        let tmpResponse = JSON.parse(response);
        this.listFlightViewModel = [];
        for (let tIndex = 0; tIndex < tmpResponse.model.length; tIndex++) {
            this.listFlightViewModel.push({
                id: tmpResponse.model[tIndex].id,
                departTime: tmpResponse.model[tIndex].departTime,
                return: tmpResponse.model[tIndex].return,
                returnAirlineName: tmpResponse.model[tIndex].returnAirlineName,
                returnAirlinePicture: tmpResponse.model[tIndex].returnAirlinePicture,
                returnAirlinePlane: tmpResponse.model[tIndex].returnAirlinePlane,
                returnAirport: tmpResponse.model[tIndex].returnAirport,
                returnTime: tmpResponse.model[tIndex].returnTime,
                roundTrip: tmpResponse.model[tIndex].roundTrip,
                totalMoney: tmpResponse.model[tIndex].totalMoney,
                totalTime: tmpResponse.model[tIndex].totalTime,
                updatedDate: tmpResponse.model[tIndex].updatedDate,
                classType: tmpResponse.model[tIndex].classType,
                createdDate: tmpResponse.model[tIndex].createdDate,
                depart: tmpResponse.model[tIndex].depart,
                departAirlineName: tmpResponse.model[tIndex].departAirlineName,
                departAirlinePicture: tmpResponse.model[tIndex].departAirlinePicture,
                departAirlinePlane: tmpResponse.model[tIndex].departAirlinePlane,
                departAirport: tmpResponse.model[tIndex].departAirport,
            });
        }
        return this.listFlightViewModel;
    }

    mappingExpectedListSearchFlightResponse(response: string) {
        let tmpResponse = JSON.parse(response);
        this.listExpectedFlightViewModel = [];
        for (let tIndex = 0; tIndex < tmpResponse.model.length; tIndex++) {
            this.listExpectedFlightViewModel.push({
                id: tmpResponse.model[tIndex].id,
                departTime: tmpResponse.model[tIndex].departTime,
                return: tmpResponse.model[tIndex].return,
                returnAirlineName: tmpResponse.model[tIndex].returnAirlineName,
                returnAirlinePicture: tmpResponse.model[tIndex].returnAirlinePicture,
                returnAirlinePlane: tmpResponse.model[tIndex].returnAirlinePlane,
                returnAirport: tmpResponse.model[tIndex].returnAirport,
                returnTime: tmpResponse.model[tIndex].returnTime,
                roundTrip: tmpResponse.model[tIndex].roundTrip,
                totalMoney: tmpResponse.model[tIndex].totalMoney,
                totalTime: tmpResponse.model[tIndex].totalTime,
                updatedDate: tmpResponse.model[tIndex].updatedDate,
                classType: tmpResponse.model[tIndex].classType,
                createdDate: tmpResponse.model[tIndex].createdDate,
                depart: tmpResponse.model[tIndex].depart,
                departAirlineName: tmpResponse.model[tIndex].departAirlineName,
                departAirlinePicture: tmpResponse.model[tIndex].departAirlinePicture,
                departAirlinePlane: tmpResponse.model[tIndex].departAirlinePlane,
                departAirport: tmpResponse.model[tIndex].departAirport,
            });
        }
        return this.listExpectedFlightViewModel;
    }

    isSearchFlightDataDisplayedInResponse(expectedResponse: string, actualResponse: string) {
        let actResponse = this.mappingSearchFlightResponse(actualResponse);
        let expResponse = this.mappingExpectedSearchFlight(expectedResponse);
        let conditionCheck = true;
        // console.log("Expected flight: " + JSON.stringify(expResponse));
        // console.log("Actual flight: " + JSON.stringify(actResponse));
        let actFlight = actResponse, expFlight = expResponse;
        if (!this.isDataDisplayedInJsonObject(expFlight, actFlight)) {
            console.log("Checking failed on FLIGHT MODEL");
            return false;
        }
        return conditionCheck;
    }

    isListSearchFlightDataDisplayedInResponse(expectedResponse: string, actualResponse: string) {
        let actListSearchFlight = this.mappingListSearchFlightResponse(actualResponse);
        let expListSearchFlightResponse = this.mappingExpectedListSearchFlightResponse(expectedResponse);
        expectedResponse = JSON.parse(expectedResponse);
        actualResponse = JSON.parse(actualResponse);
        let conditionCheck = true;
        let tmpExpectedNode, tmpActualNode;

        if (expectedResponse.length != actualResponse.length) {
            console.log("Flight expected " + expectedResponse.length + " object(s) but response return " + actualResponse.length + " object(s)");
            return false;
        }

        else {
            for (let i = 0; i < expectedResponse.length; i++) {
                tmpExpectedNode = expListSearchFlightResponse[i];
                tmpActualNode = actListSearchFlight[i];
                if (!this.isDataDisplayedInJsonObject(tmpExpectedNode, tmpActualNode)) {
                    console.log("Checking failed on FLIGHT MODEL");
                    return false;
                }
            }
        }
        return conditionCheck;
    }
}