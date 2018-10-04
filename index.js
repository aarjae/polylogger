const { connectTelegram } = require('./connection');
const { parsePassword, comparePassword, addUserToContactList, sendMessageToContacts } = require('./_utils');


const init = function (options) {
    console.info('Connecting to telegram bot...');

    const connection = connectTelegram(options.botToken);

    connection.start();

    // Starter CLI commands to start bot
    (function echo() {
        if(!connection) throw new Error('Provide a valid connection argument');

        // Echoing back string to bot, just to show it works
        connection.on(['/echo'], msg => msg.reply.text('Logging bot is working'));

        // Authentication flow
        connection.on(['/auth'], msg => {
            console.log(msg);

            // Checking to see if user added password. Using the length of text to find out.
            if(msg.text.length <= '/auth'.length){
                msg.reply.text('Send /auth command with password. Eg /auth 63728193546');
                return;
            }

            let proposedPassword = parsePassword(msg.text);

            if(!comparePassword(proposedPassword, options.password)){
                msg.reply.text('Wrong password');
                return;
            }

            // Adding user to contact list
            addUserToContactList(msg.chat.id, err => {
                if(err){
                    msg.reply.text('Oops an error occurred. Contact admin for more details');
                    throw new Error(err);
                }

                msg.reply.text(`Hi, ${msg.from.first_name}, you have been added successfully. Logs shall be sent to you going forward`);
            });
        });

    })();


    // Public API
    const publicAPI = {
        logInfo: (message) => {
            let infoMessage = `*INFO*\n${message}`;
            let sendFunction = function(userContact){
                connection.sendMessage(userContact, infoMessage, { parseMode: 'markdown'});
            };

            // Sending log to contact list one by one
            sendMessageToContacts(sendFunction)
        },

        logError: (message) => {
            let errormessage = `*ERROR*\n${message}`;
            let sendFunction = function(userContact){
                connection.sendMessage(userContact, errormessage, { parseMode: 'markdown'});
            };

            // Sending log to contact list one by one
            sendMessageToContacts(sendFunction)
        }
    };

    return publicAPI;
};


module.exports = init;
