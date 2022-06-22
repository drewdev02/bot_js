const TelegramBot = require('node-telegram-bot-api');
const token = 'Token';
 bot = new TelegramBot(token, { polling: true });

console.log('bot is polling uwu')


// Implementación de la primera funcionalidad: Cuando mandamos el mensaje "Hola" reconoce tú nombre y genera un input tipo "Hola andrey"

bot.onText(/^\hola/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name);
});
//console.log(msg.chat.id)
