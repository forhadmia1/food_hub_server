const { ObjectId } = require("mongodb");
const collection = require("../Utils/collections")
const { Foodcollection } = collection()

module.exports.postAFood = async (req, res) => {
    try {
        const data = req.body;
        const result = await Foodcollection.insertOne(data)
        res.status(200).send({ message: "Insert food successfully" })
    } catch (error) {
        res.status(500).send({ message: "Failed to add data" })
    }
}

module.exports.getAllFoods = async (req, res) => {
    const query = req.query;
    if (query.category) {
        const data = Foodcollection.find(query)
        const result = await data.toArray()
        res.send(result)
    } else {
        const data = Foodcollection.find({})
        const result = await data.toArray()
        res.send(result)
    }
}

module.exports.getFoodsByName = async (req, res) => {
    const query = req.query;
    console.log(query);
    if (query.name) {
        Foodcollection.createIndex({ "name": "text" });
        const data = Foodcollection.find({ $text: { $search: query.name } })
        const result = await data.toArray()
        res.send(result)
    }
}

module.exports.deleteFoods = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: ObjectId(id) };
    const result = await Foodcollection.deleteOne(filter)
    if (result.deletedCount > 0) {
        res.status(200).send({ message: "Successfully delete review" })
    }
}