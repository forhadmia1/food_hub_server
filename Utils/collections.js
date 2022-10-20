const dbConnect = require("./dbConnect.js");

function collection() {
    const client = dbConnect()
    const Foodcollection = client.db("Food_Hub").collection("Foods");
    const Ordercollection = client.db("Food_Hub").collection("Orders");
    const usercollection = client.db("Food_Hub").collection("user");
    const reviewcollection = client.db("Food_Hub").collection("review");

    return { Foodcollection, Ordercollection, usercollection, reviewcollection }
}

module.exports = collection;