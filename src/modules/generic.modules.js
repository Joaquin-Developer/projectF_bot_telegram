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


function generateResponseByData(data, dateFormatOnlyMMDD = false) {
    let txt = ""

    data.forEach(tour => {
        const date = utils.dateToStringFormat(new Date(tour.show_date), dateFormatOnlyMMDD)

        txt += `${date} - ${tour.place}\n`
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

    return `Freedom Tour Dates - ${actualMonth}:\n\n${generateResponseByData(data, true)}`
}


functions.geolocation = async (latitude, longitude) => {
    let url = config.geolocation_api.API_URL
    url += `?format=jsonv2&lat=${latitude}&lon=${longitude}`

    try {
        const data = await utils.fetch(url)
        return {
            city: data.address.city,
            state: data.address.state,
            country: data.address.country
        }

    } catch (error) {
        throw error
    }
}


functions.getToursByLocation = async (data) => {
    const api = config.api
    const url = api.API_URL + api.ENDPOINTS["tours_by_location"]

    const resp = await utils.fetch(url, utils.TypeRequest.POST, data)

    if (data) {
        return "Freedom Tour Dates in your location:\n\n" + generateResponseByData(data)
    }
    return "No tours found near your location."
}


module.exports = functions