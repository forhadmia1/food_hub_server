const collection = require("../Utils/collections");
const { ObjectId } = require('mongodb')
const stripe = require("stripe")('sk_test_51L31xRIBSJhlneIDcq70HhTd7F5glCgiLU5LdYRSpJnTPk0YNMyfdDWBLjNS9BcKIsnAwguEwmUMA85Y626Bpeoa00Lu6iHFjT');
const { Ordercollection } = collection()

module.exports.postAOrder = async (req, res) => {
    const item = req.body;
    const result = await Ordercollection.insertOne(item)
    if (result.insertedId) {
        res.status(200).send({ message: 'successFully Placed Order' })
    }
}

// module.exports.getAllOrder = async (req, res) => {
//     const data = Ordercollection.find({})
//     const result = await data.toArray()
//     res.send(result)
// }

// module.exports.deleteOrderById = async (req, res) => {
//     const id = req.params.id;
//     const query = { _id: ObjectId(id) }
//     const result = await Ordercollection.deleteOne(query)
//     if (result.acknowledged) {
//         res.send(id)
//     }
// }

module.exports.payment = async (req, res) => {
    const { totalAmount } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: totalAmount,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
};
