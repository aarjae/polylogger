const fs = require('fs');
const LineByLineReader = require('line-by-line');


// Calculating path to contacts file
const contactFilePath = __dirname.replace('/_utils', '/contacts.txt');

const addUserToContactList = function (contact, cb) {
    fs.appendFile(contactFilePath, `${contact}\n`, (err) => {
        if(err){
            cb(err);
        }

         cb(null);
    })
};


const sendMessageToContacts = function(sendFunction, cb){
    const lr = new LineByLineReader(contactFilePath);

    lr.on('line', function (userContact) {
       sendFunction(userContact);
    });

    lr.on('error', function (err) {
        throw new Error(err);
    });
};

module.exports.addUserToContactList = addUserToContactList;
module.exports.sendMessageToContacts = sendMessageToContacts;