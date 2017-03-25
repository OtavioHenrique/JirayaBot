let TelegramBot = require('node-telegram-bot-api')
let token = '373446033:AAHLA1PbhkWGAKo0Y_IZoL4JtOUyd2Mq-4I'
let bot = new TelegramBot(token, {polling: true})

bot.on('message', (msg) => {
  let chatId = msg.chat.id
  let userCommand = msg.text

  bot.sendMessage(chatId, 'É isso aí')
})
