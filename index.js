const express = require('express');
const cors = require('cors');
const app = express()
const foodRoutes = require('./routes/api/v1/foods.route.js');
const orderRoutes = require('./routes/api/v1/order.route.js')
const userRoutes = require('./routes/api/v1/user.routes.js')
const reviewRoutes = require('./routes/api/v1/review.route.js')
const port = process.env.PORT || 5000;


//middleware 
app.use(express.json())
app.use(cors())

//Routes middleware
app.use('/api/v1/foods', foodRoutes)
app.use('/api/v1/order', orderRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/review', reviewRoutes)


//default route for check server
app.get('/', (req, res) => {
    res.send('Food hub is ready')
})

app.listen(port, () => {
    console.log('listening port', port)
})