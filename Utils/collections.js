const dbConnect = require("./dbConnect.js");

function collection() {
    const client = dbConnect()
    const Foodcollection = client.db("Food_Hub").collection("Foods");
    const Cartcollection = client.db("Food_Hub").collection("Carts");
    return { Foodcollection, Cartcollection }
}

module.exports = collection;