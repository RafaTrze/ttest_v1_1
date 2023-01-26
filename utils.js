
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

const getEmail = async () => {
    let email = (`Subject: Happy Birthday! \nHappy birthday, dear`)
    return email
};

const getSMS = async () => {
    const sms = (`Happy Birthday! \nHappy birthday, dear`)
    return sms
}
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

module.exports = {
    getToday,
    getEmail,
    getSMS,
    getIsItSkipYear
};