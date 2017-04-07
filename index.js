const TelegramBot = require('node-telegram-bot-api')
const watson = require('watson-developer-cloud')
const tokenTelegram = '331513888:AAGDpVq27UOY87j5HAXrfl-RhSRmDyBfoGc'
const bot = new TelegramBot(tokenTelegram, {polling: true})

bot.on('message', (msg) => {
  let chatId = msg.chat.id
  let userCommand = msg.text

  let conversation = watson.conversation({
    username: '66748b75-7040-44c9-b7eb-5a304911a1be',
    password: 'SJhAP1f422M7',
    version: 'v1',
    version_date: '2017-02-03'
  });

  conversation.message({
    workspace_id: '0f9cca51-0382-4ede-9bc0-f1e49d63533f',
    input: {'text': userCommand}
  }, (err, response) => {
    if (err) {
      console.log('ERROR:', err);
    } else {
      console.log(userCommand)
      console.log(msg.from.username)
      console.log(response.output.text[0])
      console.log('============================================================================================================================');
      bot.sendMessage(chatId, response.output.text[0] || 'Essa eu não sei responder')
    }
  });
})
