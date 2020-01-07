import { isNullOrUndefined } from "util";

var axios = require('axios');

export class BasePage {
    timeout = 90 * 1000;
    async httpAPIGet(theUrl, autUsername, autPassword) {
        let response;
        var basicAuth = 'Basic ' + autUsername + ':' + autPassword;
        try {
            console.log("Start send GET request!");
            response = await axios.get(theUrl, {
                withCredentials: true,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                auth: {
                    username: autUsername,
                    password: autPassword
                },
                responseType: "application/json",
            })
        }
        catch (error) {
            await error;
            response = error.response;
            return response;
        }

        finally {
            await response;
            return response;
        }
    };
    async httpAPIPost(theUrl, autUsername, autPassword, bodyJson) {
        let response;
        var basicAuth = 'Basic ' + autUsername + ':' + autPassword;
        try {
            console.log("Start send POST request!");
            response = await axios.post(theUrl, bodyJson, {
                withCredentials: true,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                auth: {
                    username: autUsername,
                    password: autPassword
                },
                responseType: "application/json",
            })
        }
        catch (error) {
            await error;
            response = error.response;
            return response;
        }
        finally {
            await response;
            return response;
        }
    };
    async httpAPIPut(theUrl, autUsername, autPassword, bodyJson) {
        let response;
        var basicAuth = 'Basic ' + autUsername + ':' + autPassword;
        try {
            console.log("Start send PUT request!");
            response = await axios.put(theUrl, bodyJson, {
                withCredentials: true,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                auth: {
                    username: autUsername,
                    password: autPassword
                },
                responseType: "application/json",
            })
        }
        catch (error) {
            await error;
            response = error.response;
            return response;
        }
        finally {
            await response;
            return response;
        }
    };
    replaceAllText(originalValue: string, replaceValue: string, symbol: string) {
        let result = originalValue.split(symbol).join(replaceValue);
        return result;
    }

    isDataDisplayedInJsonObject(expectedJson: any, responseJson: any) {
        let checkCondition = true;
        for (let key of Object.keys(expectedJson)) {
            if (!isNullOrUndefined(expectedJson[key]) || expectedJson[key] != null || expectedJson[key] != undefined) {
                if (expectedJson[key] != responseJson[key]) {
                    console.log("CHECKING FAILED ==> Expected value : " + expectedJson[key]);
                    console.log("CHECKING FAILED ==> Actual value: " + responseJson[key]);
                    return false;
                }
            }
        }
        return checkCondition;
    }
}