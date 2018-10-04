const { parsePassword, comparePassword } = require('./password');
const { addUserToContactList, sendMessageToContacts } = require('./users');

module.exports.parsePassword = parsePassword;
module.exports.comparePassword = comparePassword;
module.exports.addUserToContactList = addUserToContactList;
module.exports.sendMessageToContacts = sendMessageToContacts;