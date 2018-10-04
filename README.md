# PolyLogger

Send small messages and logs to yourself on telegram with no hassle

## Getting Started
- Create a Telegram bot with [BotFather](https://telegram.me/BotFather) and take note of 
the telegram bot token provided

### Prerequisites
- Node.JS
- NPM

### Installing

git clone https://github.com/mullwar/telebot.git
cd polylogger
npm install


## Usage
Import polylogger module and create a new connection object:

```$xslt
const Logger = require('polylogger');

const loggerBot = Logger({
    botToken: 'j89efj983u893', // This is the token provided by BotFather
    password: 'aStrongPassword' // This is the password you pass to the bot when subscribing for logs
});

// Sending info
loggerBot.sendInfo('Sending simple info from application');

// Sending error
loggerBot.sendError('Sending simple error from application');
```

## Setting up the bot / Bot commands
- Go to your bot on telegram
- Send */echo* to test if it's working. It should send back a message
- Send */auth _yourPassword_* to subscribe to logs. *yourPassword* is the password string you passed to 
polylogger when initializing


## Built With

* [Telebot](https://github.com/mullwar/telebot) - The web framework used


## Contributions
PRs are welcome