require('dotenv').config();
const {Bot, GrammyError, HttpError, Api } = require('grammy');

const bot = new Bot(process.env.BOT_API_KEY);




bot.command('start', async(ctx) => {
  await ctx.reply('Бу! Испугался? Не бойся. Я друг. Я тебя не обижу. Иди сюда, иди ко мне, сядь рядом со мной. Посмотри мне в глаза. Ты видишь меня? Я тоже тебя вижу. Давай смотреть друг на друга до тех пор, пока ты не скинешь смешной мем. Ты не хочешь? Почему? Что-то не так?');
})

bot.on("message", ctx => {
  const targetChatId = '-1001889469272'; // ID чата, куда пересылать
  const fromChatId = ctx.message.chat.id; // ID чата, откуда сообщение
  const messageId = ctx.message.message_id; // ID сообщения

  // Пересылаем сообщение
  bot.api.forwardMessage(targetChatId, fromChatId, messageId)
    .then(() => {
      // После успешной пересылки отправляем ответ "Спасибо"
      return bot.api.sendMessage(fromChatId, 'Спасибо за мем лох!');
    })
    .then(() => console.log('Сообщение успешно переслано и ответ отправлен'))
    .catch(err => console.error('Ошибка при пересылке или отправке сообщения:', err));
});
bot.start();