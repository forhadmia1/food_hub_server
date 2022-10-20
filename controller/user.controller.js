const collection = require('../Utils/collections');
const { usercollection } = collection()
const jwt = require('jsonwebtoken');

module.exports.addUser = async (req, res) => {
    const user = req.body;
    const filter = { email: user.email };
    const options = { upsert: true };
    const updateDoc = {
        $set: {
            ...user
        },
    };
    const result = await usercollection.updateOne(filter, updateDoc, options)
    console.log(result);
    if (result.modifiedCount > 0 || result.upsertedCount > 0 || result.matchedCount > 0) {
        const token = jwt.sign(user.email, process.env.SECRET);
        res.status(200).send({ token: token })
    }
}

module.exports.getUser = async (req, res) => {
    const email = req.query.email;
    console.log(email);
    const filter = { email }
    const result = await usercollection.findOne(filter)
    if (result.isAdmin) {
        res.send({ isAdmin: true })
    } else {
        res.send({
            isAdmin: false
        })
    }
}