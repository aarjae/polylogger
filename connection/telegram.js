const Telebot = require('telebot');

// Initialising telegram bot
const connectTelegramBot = function (botToken) {
    const bot = new Telebot({
        token: botToken,
        polling: {
            interval: 1000,
            timeout: 0,
            limit: 100,
            retryTimeout: 5000,
        }
    });


    return bot;
};

module.exports = connectTelegramBot;