const { parse } = require('csv-parse');
const fs = require('fs');



const getToday = async () => { 
    let today;
    let newDate = new Date()
    newDate = newDate
        .toISOString()
        .substring(0, 10)
        .split("")
    newDate[4] = '/';
    newDate[7] = '/';
    today = newDate.join("")
    // today = '1997/09/11'// type specific date for testing
    return today
};
const getIsItSkipYear = async () => {
    let year = new Date().getFullYear()
    // year = 2000; // type specific date for testing
    let test = year/4 - Math.floor(year/4)
    if (test === 0) {
        return true
    }

    else {
        return false
    }
};

const getFriendsCSV = async () => {
    const friends = [];
    const parser = fs
      .createReadStream('./people.csv', 'utf8')
      .pipe(
        parse({
            delimiter: ',',
            columns: true,
            trim: true, 
        })
    );
    for await (const row of parser) {
      // Work with each row
      friends.push(row);
    }
    return friends;
};

const getEmail = async () => {
    let email = (`Subject: Happy Birthday! \nHappy birthday, dear`)
    return email
}
const sendEmail = async () => {
    const promiseArray = await Promise.all([getFriendsCSV(), getToday(), getIsItSkipYear(), getEmail()]) // Promise.all to take advantage from concurency
    const friends = promiseArray[0];
    const today = promiseArray[1];
    const isItSkipYear = promiseArray[2];
    const email = promiseArray[3];
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


sendEmail();
