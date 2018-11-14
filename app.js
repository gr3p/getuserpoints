const profile = require('./profile');
const color = require('colour');

var argumentUser = process.argv.slice(2);

profile.getUsers(argumentUser);