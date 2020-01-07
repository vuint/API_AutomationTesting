import { ExpectedFlightViewModel } from "./expflighViewModel"
import { ExpectedTravellerViewModels } from "./exptravellerViewModels"
import { ExpectedPaymentViewModel } from "./exppaymentViewModel"
import { ExpectedConfirmationInfoViewModel } from "./expconfirmationInfoViewModel"

export class ExpectedBookingModel {
    id: string
    code: string
    flightViewModel: ExpectedFlightViewModel
    travellerViewModels: ExpectedTravellerViewModels[]
    paymentViewModel: ExpectedPaymentViewModel
    confirmationInfoViewModel: ExpectedConfirmationInfoViewModel
}