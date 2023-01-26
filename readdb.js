const sqlite3 = require('sqlite3').verbose();
const pino = require('pino')
const logger = pino({
  transport: {
    target: 'pino-pretty'
  },
})

// open database

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
  return logger.error(err.message);
  }
  else {
    logger.info('connected');
  }
});


// create table
// let sql = `Create TABLE friendsdb(last_name, first_name, date_of_birth, email)`;
// db.run(sql);


// insert data
// sql = `INSERT INTO friendsdb(last_name, first_name, date_of_birth, email) VALUES (?, ?, ?, ?)`;
/* db.run(sql, [], (err) => {
    if (err) {
        return logger.error(err,message);
    }
    else {
        logger.info('data added.');
    }
});
*/



const getFriendsDB = async () => {
  const sql = `SELECT * FROM friendsdb`
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

// close database
const dbClose = () => {
  db.close((err) => {
    if (err) {
      return logger.error(err.message)
    }
    else {
      logger.info('closed')
    }
  })
}

module.exports = {
  getFriendsDB,
  dbClose
}

