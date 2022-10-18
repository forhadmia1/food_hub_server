const collection = require("../Utils/collections");
const { ObjectId } = require('mongodb')

const { Ordercollection } = collection()

module.exports.postAOrder = async (req, res) => {
    const item = req.body;
    const result = await Ordercollection.insertOne(item)
    if (result.insertedId) {
        res.send(item)
    }
}

module.exports.getAllOrder = async (req, res) => {
    const data = Ordercollection.find({})
    const result = await data.toArray()
    res.send(result)
}

module.exports.deleteOrderById = async (req, res) => {
    const id = req.params.id;
    const query = { _id: ObjectId(id) }
    const result = await Ordercollection.deleteOne(query)
    if (result.acknowledged) {
        res.send(id)
    }
}
