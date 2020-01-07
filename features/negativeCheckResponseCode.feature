Feature: [SB] - API TESTING
    Scenario Outline: [API_TESTING] - SEARCH FLIGHT WITH INVALID PARAMETERS
        # # Input: Search with invalid parameter type
        # # Output: 400 Bad request
        # TC: Search with airlines parameter is not array
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
            "airlines": "<Airlines>"
            }
            """
        Then I get "400" as status code and "Bad Request" as message in response retun

        # # Input: Search with flight id that id is not exist
        # # Output: 404 Not found
        # TC: Search with flight id not existing
        And I send "get" request to "<Url>/<FlightNotExist>" url with parameters as following info
            """
            """
        Then I get "404" as status code and "Not Found" as message in response retun

        Examples: Search FLIGHTS information
            | Url                                                    | ClassType      | Airlines        | DepartFrom | ArriveTo | DepartAirPort     | DepartAirPlane | FlightNotExist                       |
            | https://hailuaairline-api.azurewebsites.net/api/flight | Business Class | Air New Zealand | Shanghai   | Beijing  | Beijing BJ, China | A321-211       | 758ed2d0-2600-11ea-978f-2e728ce88125 |


