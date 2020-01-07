Feature: [SB] - API TESTING
    Scenario Outline: [API_TESTING] - SEARCH FLIGHT BY CRITERIA AND GET DETAIL OF A FLIGHT BY UID
        When I send "post" request to "<Url>" url with parameters as following info
            """
            {
            "from": "<DepartFrom>",
            "to": "<ArriveTo>",
            "departDate": "2019-12-24",
            "classType": "<ClassType>",
            "roundTrip": 0,
            "priceFrom": 0,
            "priceTo": 350,
            "airlines": [
            "<Airlines>"
            ]
            }
            """
        Then I get "200" as status code and "OK" as message in response retun
        And I get id of a flight in response
        And I get detail of data response as following info
            """
            {
            "message": null,
            "didError": false,
            "errorMessage": null,
            "totalRecord": 1,
            "model": [
            {
            "id": "getFlightId",
            "roundTrip": 0,
            "depart": "<DepartFrom>",
            "departTime": "Tue Dec 24 2019 04:17:16",
            "departAirport": "Beijing BJ, China",
            "return": "<ArriveTo>",
            "returnTime": "Tue Dec 24 2019 15:17:16",
            "returnAirport": null,
            "totalTime": "11 hours",
            "classType": "<ClassType>",
            "departAirlinePicture": "https://fotw.info/images/n/nz$airnz.gif",
            "departAirlineName": "<Airlines>",
            "departAirlinePlane": "A321-211",
            "returnAirlinePicture": null,
            "returnAirlineName": null,
            "returnAirlinePlane": null,
            "totalMoney": 312,
            "createdDate": "2006-10-05T21:14:43.8",
            "updatedDate": "1993-04-23T14:26:01.75",
            "order": []
            }
            ]
            }
            """
        And I send "get" request to "<Url>/getFlightId" url with parameters as following info
            """
            """
        Then I get "200" as status code and "OK" as message in response retun
        And I get detail of searching flight with flight id as following info
            """
            {
            "message": null,
            "didError": false,
            "errorMessage": null,
            "model": {
            "id": "getFlightId",
            "roundTrip": 0,
            "depart": "<DepartFrom>",
            "departTime": "Tue Dec 24 2019 04:17:16",
            "departAirport": "<DepartAirPort>",
            "return": "<ArriveTo>",
            "returnTime": "Tue Dec 24 2019 15:17:16",
            "returnAirport": null,
            "totalTime": "11 hours",
            "classType": "<ClassType>",
            "departAirlinePicture": "https://fotw.info/images/n/nz$airnz.gif",
            "departAirlineName": "<Airlines>",
            "departAirlinePlane": "<DepartAirPlane>",
            "returnAirlinePicture": null,
            "returnAirlineName": null,
            "returnAirlinePlane": null,
            "totalMoney": 312,
            "createdDate": "2006-10-05T21:14:43.8",
            "updatedDate": "1993-04-23T14:26:01.75",
            "order": []
            }
            }
            """
        Examples: Search FLIGHTS information
            | Url                                                    | ClassType      | Airlines        | DepartFrom | ArriveTo | DepartAirPort     | DepartAirPlane |
            | https://hailuaairline-api.azurewebsites.net/api/flight | Business Class | Air New Zealand | Shanghai   | Beijing  | Beijing BJ, China | A321-211       |


    Scenario Outline: [API_TESTING] - CREATE A FLIGHT BOOKING WITH FULLY INFORMATION
        When I send "post" request to "<Url>" url with parameters as following info
            """
            {
            "flightId": "getFlightId",
            "travellerViewModels": [
            {
            "personType": "<PersonType>",
            "firstName": "<FirstName>",
            "lastName": "<LastName>",
            "dateOfBirth": "<DoB>",
            "gender": "0",
            "nationality": "189",
            "pasportId": "<PasportId>",
            "pasportExpiryDateMonth": "<PPMonth>",
            "pasportExpiryDateYear": "<PPYear>",
            "pasportNoExpiry": false,
            "checkedBaggae": 0
            }
            ],
            "paymentViewModel": {
            "creditCardType": "<CardType>",
            "cardNumber": "<CardNumber>",
            "nameOnTheCard": "<FirstName> <LastName>",
            "expiryDateInMonth": "<CardMonth>",
            "expiryDateInYear": "<CardYear>",
            "cvvCode": "<CVVCode>",
            "countryId": "249",
            "billingAddress": "<Address>",
            "city": "<City>",
            "zipCode": "<ZipCode>"
            },
            "confirmationInfoViewModel": {
            "emailAddress": "<Email>",
            "phoneNumber": "<Phone>"
            }
            }
            """
        Then I get "200" as status code and "OK" as message in response retun
        And I get id and code of a booking flight in response
        And I get data of booking flight return in response as following info
            """
            {
            "message": null,
            "didError": false,
            "errorMessage": null,
            "model": {
            "BookingId": "bookingId",
            "Code": "bookingCode"
            }
            }
            """
        And I send "get" request to "<Url>/bookingCode" url with parameters as following info
            """
            """
        Then I get "200" as status code and "OK" as message in response retun
        And I get "flight" id of booking flight in response
        And I get "payment" id of booking flight in response
        And I get "travellers" id of booking flight in response
        And I get "confirmation" id of booking flight in response
        And I get data of booking flight of booking code return in response as following info
            """
            {
            "message": null,
            "didError": false,
            "errorMessage": null,
            "model": {
            "id": "bookingId",
            "code": "bookingCode",
            "flightViewModel": {
            "id": "getFlightId",
            "roundTrip": 0,
            "depart": "<DepartFrom>",
            "departAirport": "<DepartAirPort>",
            "return": "<ArriveTo>",
            "classType": "<ClassType>",
            "departAirlineName": "<Airlines>",
            "departAirlinePlane": "<DepartAirPlane>"
            },
            "travellerViewModels": [
            {
            "id": "getTravellersId",
            "personType": "<PersonType>",
            "firstName": "<FirstName>",
            "lastName": "<LastName>",
            "dateOfBirth": "<DoB>",
            "gender": 0,
            "pasportId": "<PasportId>",
            "pasportExpiryDateMonth": "<PPMonth>",
            "pasportExpiryDateYear": "<PPYear>"
            }
            ],
            "paymentViewModel": {
            "id": "getPaymentId",
            "creditCardType": "<CardType>",
            "cardNumber": "<CardNumber>",
            "nameOnTheCard": "<FirstName> <LastName>",
            "expiryDateInMonth": "<CardMonth>",
            "expiryDateInYear": "<CardYear>",
            "cvvCode": "<CVVCode>",
            "billingAddress": "<Address>",
            "city": "<City>",
            "zipCode": "<ZipCode>"
            },
            "confirmationInfoViewModel": {
            "id": "getConfirmationId",
            "emailAddress": "<Email>",
            "phoneNumber": "<Phone>"
            }
            }
            }
            """
        Examples: Booking FLIGHTS information
            | Url                                                     | ClassType      | Airlines        | DepartFrom | ArriveTo | DepartAirPort     | DepartAirPlane | FirstName   | LastName        | DoB                 | PersonType | PasportId | PPMonth | PPYear | CardType | CardNumber       | CardMonth | CardYear | CVVCode | Email                       | Phone      | Address            | City    | ZipCode |
            | https://hailuaairline-api.azurewebsites.net/api/booking | Business Class | Air New Zealand | Shanghai   | Beijing  | Beijing BJ, China | A321-211       | TestBooking | BookingLastName | 2000-12-22T00:00:00 | adult      | 123456    | 11      | 2099   | Visa     | 4111111111111111 | 11        | 2099     | 123     | test_booking@mailinator.com | 1234567888 | 30 thang 4 Da Nang | Da nang | 59000   |


