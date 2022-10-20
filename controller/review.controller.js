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