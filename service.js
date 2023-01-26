
const utils = require('./utils');
const readCSV = require('./readcsv');
const readDB = require('./readdb')

const sendEmail = async () => {
    const promiseArray = await Promise.all([readCSV.getFriendsCSV(), utils.getToday(), utils.getIsItSkipYear(), utils.getEmail(), readDB.getFriendsDB()]) // Promise.all to take advantage from concurency
    // const friends = promiseArray[0];
    const today = promiseArray[1];
    const isItSkipYear = promiseArray[2];
    const email = promiseArray[3];
    const friends = promiseArray[4];
    const feb29 = 'yyyy/02/29' 
    // console.log(friends);
    console.log(`It is: ${today}`)
    // console.log(isItSkipYear)

    if (isItSkipYear) {
        friends.forEach((element) => {
            if (element.date_of_birth.substring(5) === today.substring(5)) {
                console.log(`${email} ${element.first_name}!`)
            }
            else {
                // NO ACTION
                // uncomment for testing:
                // console.log(`It's skip year but it's not your birthday ${element.first_name}!`)
            }
        })
    }
    else {
        if (today.substring(5) === '02/28') {
            friends.forEach((element) => {
                if (element.date_of_birth.substring(5) === today.substring(5) || element.date_of_birth.substring(5) === feb29.substring(5)) {
                    console.log(`${email} ${element.first_name}!`)
                }
                else {
                    // NO ACTION
                    // uncomment for testing:
                    // console.log(`It isn't skip year and it's not your birthday ${element.first_name}!`)
                }
            })  
        }
        else {
            friends.forEach((element) => {
                if (element.date_of_birth.substring(5) === today.substring(5)) {
                    console.log(`${email} ${element.first_name}!`)
                }
                else {
                    // NO ACTION
                    // uncomment for testing:
                    // console.log(`It isn't skip year, it isn't 02/28 and it's not your birthday ${element.first_name}!`)
                }
            })
        }
    }       
};

const sendSMS = async () => {
    const promiseArray = await Promise.all([readCSV.getFriendsCSV(), utils.getToday(), utils.getIsItSkipYear(), utils.getSMS(), readDB.getFriendsDB()]) // Promise.all to take advantage from concurency
    const friends = promiseArray[0];
    const today = promiseArray[1];
    const isItSkipYear = promiseArray[2];
    const sms = promiseArray[3];
    // const friends = promiseArray[4];
    const feb29 = 'yyyy/02/29' 
    // console.log(friends);
    console.log(`It is: ${today}`)
    // console.log(isItSkipYear)

    if (isItSkipYear) {
        friends.forEach((element) => {
            if (element.date_of_birth.substring(5) === today.substring(5)) {
                console.log(`${sms} ${element.first_name}!`)
            }
            else {
                // NO ACTION
                // uncomment for testing:
                // console.log(`It's skip year but it's not your birthday ${element.first_name}!`)
            }
        })
    }
    else {
        if (today.substring(5) === '02/28') {
            friends.forEach((element) => {
                if (element.date_of_birth.substring(5) === today.substring(5) || element.date_of_birth.substring(5) === feb29.substring(5)) {
                    console.log(`${sms} ${element.first_name}!`)
                }
                else {
                    // NO ACTION
                    // uncomment for testing:
                    // console.log(`It isn't skip year and it's not your birthday ${element.first_name}!`)
                }
            })  
        }
        else {
            friends.forEach((element) => {
                if (element.date_of_birth.substring(5) === today.substring(5)) {
                    console.log(`${sms} ${element.first_name}!`)
                }
                else {
                    // NO ACTION
                    // uncomment for testing:
                    // console.log(`It isn't skip year, it isn't 02/28 and it's not your birthday ${element.first_name}!`)
                }
            })
        }
    }       
};

module.exports = {
    sendEmail,
    sendSMS
};