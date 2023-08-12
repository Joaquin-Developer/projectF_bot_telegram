const config = require("../config")
const { Telegraf } = require('telegraf')
const botEvents = require("./controllers/BotEventsHandler")
global.ERR_MESSAGES = config.ERR_MESSAGES

const bot = new Telegraf(config.bot.TELEGRAM_TOKEN)

bot.help(botEvents.help)
bot.command("tour", botEvents.tour)
bot.hears(/.*/, botEvents.hearsHandle)

console.log("Iniciando bot...")
bot.launch()