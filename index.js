require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const messages = require('./phrases.json');

const token = process.env.TELEGRAM_TOKEN

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

function sendMessage() {
  bot
    .sendMessage(process.env.TELEGRAM_GROUP_ID, messages[Math.floor(Math.random() * messages.length)])
    .then(() => console.log('enviou'));
}

sendMessage();