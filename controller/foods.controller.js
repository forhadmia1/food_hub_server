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
    const data = Foodcollection.find({})
    const result = await data.toArray()
    res.send(result)
}