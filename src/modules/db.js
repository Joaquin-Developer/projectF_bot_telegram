const MongoClient = require("mongodb").MongoClient
const config = require("../../config")

const DB_NAME = config.bot.DB_NAME
const URL = `mongodb://localhost:27017/${DB_NAME}`
const COLLECTION = config.bot.DB_COLLECTION

const dbFunctions = {}


dbFunctions.find = (findObject) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(URL, (err, client) => {
            const db = client.db(DB_NAME)
            const collection = db.collection(COLLECTION)

            collection.find(findObject).toArray((err, docs) => {
                console.log(docs)
                if (err)
                    reject(err)
                else
                    resolve(docs)
                client.close()
            })
        })

    })
}


dbFunctions.insertOne = async (insertObject) => {
    let client;
    try {
        client = await MongoClient.connect(URL);
        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION);
        const result = await collection.insertOne(insertObject);
        return result.insertedId;
    } catch (err) {
        console.log(`Error al insertar el documento: ${err}`);
        throw err;
    } finally {
        if (client) {
            client.close();
        }
    }


}


module.exports = dbFunctions