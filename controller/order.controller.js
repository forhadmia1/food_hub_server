const collection = require("../Utils/collections");
const { ObjectId } = require('mongodb')

const { Cartcollection } = collection()

module.exports.postAOrder = async (req, res) => {
    const item = req.body;
    const result = await Cartcollection.insertOne(item)
    if (result.insertedId) {
        res.send(item)
    }
}

module.exports.getAllOrder = async (req, res) => {
    const data = Cartcollection.find({})
    const result = await data.toArray()
    res.send(result)
}

module.exports.deleteOrderById = async (req, res) => {
    const id = req.params.id;
    const query = { _id: ObjectId(id) }
    const result = await Cartcollection.deleteOne(query)
    if (result.acknowledged) {
        res.send(id)
    }
}

module.exports.update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const query = { _id: ObjectId(id) }
    const updatedoc = {
        $set: { data }
    }

    const result = await Cartcollection.updateOne(query, updatedoc)
    if (result.acknowledged) {
        res.send('update successfully')
    }
}