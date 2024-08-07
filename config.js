module.exports = {
    inProduction: true,
    api: {
        API_URL: "http://localhost:5016/api/v3",
        ENDPOINTS: {
            "get_actual_show_dt": "/show_dates",
            "get_current_month_show_dt": "/show_dates_current_month",
            "tours_by_location": "/tour_dates_by_location"
        }
    },
    geolocation_api: {
        API_URL: "https://nominatim.openstreetmap.org/reverse"
    },
    bot: {
        TELEGRAM_TOKEN: process.env["TELEGRAM_BOT_PROJECT_F_TOKEN"] || "PONER_TOKEN_ACA",
        DB_NAME: process.env["TELEGRAM_BOT_DB_NAME"] || "telegram_bot",
        DB_COLLECTION: process.env["TELEGRAM_BOT_DB_COLLECTION"] || "nombre",
        DB_USER: "root",
        DB_PASSWORD: "",
        DB_HOST: process.env["TELEGRAM_BOT_DB_HOST"] || "localhost"
    },
    ERR_MESSAGES: {
        CONSTANT_ERR_COMMAND: "Incorrect usage mode.\nType /help for more information."
    }
}
