require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

const customerRouter = require('./api/customers/customer.router');
const itemRouter = require('./api/items/item.router');
const orderRouter = require('./api/orders/order.router');
const orderItemRouter = require('./api/orderItems/orderItem.router');

// app.use(cors);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.use('/api/customers', customerRouter);
app.use('/api/item', itemRouter);
app.use('/api/order', orderRouter);
app.use('/api/orderitem', orderItemRouter);


app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
