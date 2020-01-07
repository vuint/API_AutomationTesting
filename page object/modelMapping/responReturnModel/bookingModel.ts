import { FlightViewModel } from "./flighViewModel"
import { TravellerViewModels } from "./travellerViewModels"
import { PaymentViewModel } from "./paymentViewModel"
import { ConfirmationInfoViewModel } from "./confirmationInfoViewModel"

export class BookingModel {
    id: string
    code: string
    flightViewModel: FlightViewModel
    travellerViewModels: TravellerViewModels[]
    paymentViewModel: PaymentViewModel
    confirmationInfoViewModel: ConfirmationInfoViewModel
}