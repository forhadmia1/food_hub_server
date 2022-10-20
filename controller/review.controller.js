const { ObjectID } = require("bson");
const collection = require("../Utils/collections");
const { reviewcollection } = collection()

module.exports.addReview = async (req, res) => {
    const data = req.body;
    try {
        const result = await reviewcollection.insertOne(data)
        res.status(200).send({ message: 'Successfully add review' })
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' })
    }
}

module.exports.getAllReview = async (req, res) => {
    const cursor = await reviewcollection.find({})
    const result = await cursor.toArray()
    res.send(result)
}

module.exports.approvedReview = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: ObjectID(id) };
    const updateDoc = {
        $set: {
            approved: true
        },
    };
    const result = await reviewcollection.updateOne(filter, updateDoc)
    if (result.modifiedCount > 0) {
        res.status(200).send({ message: "Successfully approved review" })
    }
}


module.exports.deleteReview = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: ObjectID(id) };
    const result = await reviewcollection.deleteOne(filter)
    if (result.deletedCount > 0) {
        res.status(200).send({ message: "Successfully delete review" })
    }
}