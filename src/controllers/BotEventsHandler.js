/**
 * Modulo para controlar los eventos del bot
 * Estos eventos son comandos recibidos por el usuario
 */

const functions = require("../modules/generic.modules")


class BotEventsHandler {
    static help(ctx) {
        ctx.reply(functions.help())
    }

    static hearsHandle(ctx) {
        const username = ctx.message.from.first_name
        ctx.reply(`Holis ${username}!\nPara saber como usarme escribí /help`)
    }

    static async tour(ctx) {
        const param = ctx.message.text.split(" ")[1]

        if (!param) {
            return ctx.reply(await functions.getActualTourDates())
        }

        if (param.toLowerCase() === "month" || param === "-m") {
            return ctx.reply(await functions.getCurrentMonthTourDates())
        }

    }
}

module.exports = BotEventsHandler
