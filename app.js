const pino = require('pino')
const logger = pino({
  transport: {
    target: 'pino-pretty'
  },
})
const service = require('./service')
const readDB = require('./readdb')


service.sendEmail();
service.sendSMS();

readDB.dbClose();
