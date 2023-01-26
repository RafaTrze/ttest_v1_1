const sqlite3 = require('sqlite3').verbose();

let sql;
// open database
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err);
  }
  else {
    console.log('connected');
  }
});

// create table
// let sql = `Create TABLE friendsdb(last_name, first_name, date_of_birth, email)`;
// db.run(sql);


// insert data
// sql = `INSERT INTO friendsdb(last_name, first_name, date_of_birth, email) VALUES (?, ?, ?, ?)`;
/* db.run(sql, [], (err) => {
    if (err) {
        return console.error(err);
    }
    else {
        console.log('data added.');
    }
});
*/


sql = `SELECT * FROM friendsdb`
const getFriendsDB = async () => {
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(rows)
      }
    })
  })
}

/*
const readFriendsDB = async () => {
  const friends = await getFriendsDB();
  console.log(`it works:`)
  console.log(friends)
}
readFriendsDB();


// close database
db.close((err) => {
  if (err) {
    return console.error(err)
  }
  else {
    console.log('closed')
  }});
*/

module.exports = {
  getFriendsDB
}