// Importamos la librería node-telegram-bot-api 
const TelegramBot = require('node-telegram-bot-api');

// Creamos una constante que guarda el Token de nuestro Bot de Telegram que previamente hemos creado desde el bot @BotFather
const token = '5157710415:AAFF7mqTrNzrH-a6JrOWCQQ5NN40JXs9zlM';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });
console.log('bot is polling uwu')

// ⚠️ Después de este comentario es donde ponemos la lógica de nuestro bot donde podemos crear los comandos y eventos para darle funcionalidades a nuestro bot

// Implementación de la primera funcionalidad: Cuando mandamos el mensaje "Hola" reconoce tú nombre y genera un input tipo "Hola Daniel"

bot.onText(/^\hola/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name);
});
//console.log(msg.chat.id)