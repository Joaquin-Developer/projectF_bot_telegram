const fs = require("fs")
const path = require('path');
const axios = require("axios")
const { AxiosFetchError } = require("../exceptions/exceptions")

const utils = {}


utils.TypeRequest = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT"
}


utils.readFile = (filePath) => {
    const _path = path.join(__dirname, "..", "..", filePath)
    return fs.readFileSync(_path, "utf-8")
}

utils.readHelpTemplate = () => {
    const templatePath = "templates/messages.txt"
    return utils.readFile(templatePath)
}


utils.fetch = async (url, typeRequest = utils.TypeRequest.GET, body = null) => {
    let response

    if (typeRequest === utils.TypeRequest.GET)
        response = await axios.get(url)
    if (typeRequest === utils.TypeRequest.POST)
        response = await axios.post(url, body)
    if (typeRequest === utils.TypeRequest.PUT)
        response = await axios.put(url, body)

    try {
        return await response.data
    } catch (error) {
        console.error(error)
        throw new AxiosFetchError(`Error al realizar fetch a API: ${error}`)
    }
}


utils.dateToStringFormat = (date, onlyMMDD = false) => {
    /**
     * Devuelve una fecha en forma String
     * Formato: YYYY/MM/DD
     * Si es true la flag onlyMMDD:
     *  Formato: MM/DD
     */
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const formattedDate = `${month}/${day}`

    return onlyMMDD ? formattedDate : `${date.getFullYear()}/` + formattedDate
}


module.exports = utils