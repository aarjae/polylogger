const fs = require('fs');
const LineByLineReader = require('line-by-line');

const addUserToContactList = function (contact, cb) {
    fs.appendFile('contacts.txt', `${contact}\n`, (err) => {
        if(err){
            cb(err);
        }

         cb(null);
    })
};


const sendMessageToContacts = function(sendFunction){
    // Checking to see if contacts file exists
    fs.stat('contacts.txt', (err, stats) => {
        if(err || !stats.isFile()) return;

        const lr = new LineByLineReader('contacts.txt');

        lr.on('line', function (userContact) {
            sendFunction(userContact);
        });

        lr.on('error', function (err) {
            throw new Error(err);
        });
    })
};

module.exports.addUserToContactList = addUserToContactList;
module.exports.sendMessageToContacts = sendMessageToContacts;