const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config();
// Replace with your bot token from BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Handle '/start' command and send the initial question
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
  
    bot.sendMessage(chatId, "Welcome to Skylark Infotech\nPlease select your interested software:", {
      reply_markup: {
        keyboard: [
          ['1. Colour Prediction / 3K / 5D / TRX / Casino'],
          ['2. Betting Application'],
          ['3. MLM Software'],
          ['4. Token Development'],
          ['5. E-Commerce'],
          ['6. We will Plan a Call'],
          ['7. If Want to take Appointment']
        ],
        one_time_keyboard: true
      }
    });
  });
  
  // Handle user responses to the main question
  bot.on('message', (msg) => {
    console.log("msg", msg);
    const chatId = msg.chat.id;
    const text = msg.text;
  
    switch (text) {
      case '1. Colour Prediction / 3K / 5D / TRX / Casino':
        bot.sendMessage(chatId, 'You have selected Colour Prediction / 3K / 5D / TRX / Casino.');
        break;
      
      case '2. Betting Application':
        bot.sendMessage(chatId, 'Select a Betting Application:', {
          reply_markup: {
            keyboard: [
              ['Cricket', 'Football'],
              ['Tennis', 'International Casino/ Domastic'],
              ['Back to Main Menu']
            ],
            one_time_keyboard: true
          }
        });
        break;
  
      case 'Cricket':
      case 'Football':
      case 'Tennis':
      case 'International Casino/ Domastic':
        bot.sendMessage(chatId, `You have selected ${text}.`);
        break;
  
      case '3. MLM Software':
        bot.sendMessage(chatId, 'Select an MLM Software plan:', {
          reply_markup: {
            keyboard: [
              ['Binary Plan (INR/Crypto)', 'Matrix Plan (INR/Crypto)'],
              ['Level Plan (INR/Crypto)', 'Repurchase Plan (INR)'],
              ['Investment Plan (INR/Crypto)', 'Back to Main Menu']
            ],
            one_time_keyboard: true
          }
        });
        break;
  
      case 'Binary Plan (INR/Crypto)':
      case 'Matrix Plan (INR/Crypto)':
      case 'Level Plan (INR/Crypto)':
      case 'Repurchase Plan (INR)':
      case 'Investment Plan (INR/Crypto)':
        bot.sendMessage(chatId, `You have selected ${text}.`);
        break;
  
      case '4. Token Development':
        bot.sendMessage(chatId, 'You have selected Token Development.');
        break;
  
      case '5. E-Commerce':
        bot.sendMessage(chatId, 'You have selected E-Commerce.');
        break;
  
      case '6. We will Plan a Call':
        bot.sendMessage(chatId, 'Please select your preferred method for a call:', {
          reply_markup: {
            keyboard: [
              ['Whatsapp: 8744098111', 'Phone No: 9560740511', 'Telegram: 9560740511'],
              ['Back to Main Menu']
            ],
            one_time_keyboard: true
          }
        });
        break;
  
      case '7. If Want to take Appointment':
        bot.sendMessage(chatId, 'Please select an appointment type:', {
          reply_markup: {
            keyboard: [
              ['Online Appointment', 'Offline Appointment'],
              ['Back to Main Menu']
            ],
            one_time_keyboard: true
          }
        });
        break;
  
      case 'Online Appointment':
      case 'Offline Appointment':
        bot.sendMessage(chatId, `You have selected ${text} for an appointment.`);
        break;
  
      case 'Back to Main Menu':
        // Send the main menu again
        bot.sendMessage(chatId, "Welcome to Skylark Infotech\nPlease select your interested software:", {
          reply_markup: {
            keyboard: [
              ['1. Colour Prediction / 3K / 5D / TRX / Casino'],
              ['2. Betting Application'],
              ['3. MLM Software'],
              ['4. Token Development'],
              ['5. E-Commerce'],
              ['6. We will Plan a Call'],
              ['7. If Want to take Appointment']
            ],
            one_time_keyboard: true
          }
        });
        break;
  
      default:
        bot.sendMessage(chatId, 'Please select a valid option from the menu.');
    }
  });