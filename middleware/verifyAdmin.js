const collection = require('../Utils/collections.js')
const { usercollection } = collection()

module.exports.verifyAdmin = async (req, res, next) => {
    const email = req.decoded;
    console.log(email);
    const user = await usercollection.findOne({ email })
    if (user.isAdmin === "admin") {
        next()
    } else {
        return res.status(403).send({ message: 'Forbidden' })
    }
}