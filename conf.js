'use strict';

const path = require('path');
const os = require('os');
const _ = require('@dry/underscore');

var user_config = require('./config.js');

module.exports = _.extend({
  SCOPES: ['https://www.googleapis.com/auth/calendar'],

  CRED_PATH: path.join(os.homedir(), '.gcal/client_secret.json'),

  TOKEN_PATH: path.join(os.homedir(), '.gcal/calendar_api_token.json'),

  CALENDAR_ID: 'primary',

  LIST_ORDER: 'startTime',

  // about format: momentjs.com/docs/#/displaying/format
  LIST_FORMAT_DATETIME: 'YYYY-MM-DD HH:mm',

  LIST_FORMAT_DATE: 'YYYY-MM-DD [(All)]',

  // available properties developers.google.com/google-apps/calendar/v3/reference/events
  BULK_RESULT: ['id', 'summary' , 'htmlLink'],

  EVENT_DURATION: 60
}, user_config);
