const config = require("../../config")
const utils = require("../utils/utils")

const functions = {}


functions.help = () => {
    return utils.readHelpTemplate()
}


async function getDataByEndpoint(endpointName) {
    const api = config.api
    const url = api.API_URL + api.ENDPOINTS[endpointName]
    return await utils.fetch(url)
}


function generateResponseByData(data) {
    let txt = ""

    data.forEach(tour => {
        txt += `${utils.dateToStringFormat(new Date(tour.show_date))} - ${tour.place}\n`
        txt += `- Scenary: ${tour.scenary}\n- Tour/Fest: ${tour.tour_show}\n\n`
    })

    return txt + "-Freedom"
}


functions.getActualTourDates = async () => {
    const data = await getDataByEndpoint("get_actual_tour_dt")
    return "Freedom Tour Dates:\n\n" + generateResponseByData(data)
}


functions.getCurrentMonthTourDates = async () => {
    const data = await getDataByEndpoint("get_current_month_tour_dt")
    const date = new Date()
    const actualMonth = date.toLocaleString('en-US', { month: "long", year: "numeric" })

    return `Freedom Tour Dates - ${actualMonth}:\n\n${generateResponseByData(data)}`
}


module.exports = functions