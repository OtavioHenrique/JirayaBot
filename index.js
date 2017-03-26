const TelegramBot = require('node-telegram-bot-api')
const watson = require('watson-developer-cloud')
const tokenTelegram = '373446033:AAHLA1PbhkWGAKo0Y_IZoL4JtOUyd2Mq-4I'
const bot = new TelegramBot(tokenTelegram, {polling: true})

bot.on('message', (msg) => {
  let chatId = msg.chat.id
  let userCommand = msg.text
  
  let conversation = watson.conversation({
    username: '546209fe-1bec-4870-9886-b60f1163efb2',
    password: '2Kxc7dYsjfHr',
    version: 'v1',
    version_date: '2017-02-03'
  });

  conversation.message({
    workspace_id: 'e520bfbf-4847-4a37-9895-cb6af107e33e',
    input: {'text': userCommand}
  }, (err, response) => {
    if (err) {
      console.log('ERROR:', err);
    } else {
      console.log(userCommand)
      console.log(msg.from.username)
      console.log(response.output.text[0])
      console.log('============================================================================================================================');
      bot.sendMessage(chatId, response.output.text[0])
    }
  });
})
