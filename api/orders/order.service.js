const pool = require("../../config/db");

//POST Order query params
const postQText = "INSERT INTO orders(order_no, customer_id, pay_method, grand_total) VALUES(?, ?, ?, ?)";
const postValue = (data) => {
    let order = [
        data.order_no,
        data.customer_id,
        data.pay_method,
        data.grand_total
    ];
    return order;
};

//Get Order query params
const getQText = `SELECT order_id, order_no, customer_id, pay_method, grand_total from orders`;
const getValues = [];

//Get Order by ID query params
const getQByIdText = `SELECT order_id, order_no, customer_id, pay_method, grand_total from orders WHERE order_id = ?`;
const getQByIdValues = (id) => { return id };

//Edit Order query params
const updateQText = `UPDATE orders SET order_no=?, customer_id=?, pay_method=?, grand_total=? WHERE order_id = ?`
const updateValues = (data) => {
    let updatedOrder= [
        data.order_no,
        data.customer_id,
        data.pay_method,
        data.grand_total,
        data.item_id
    ];
    return updatedOrder;
};

//Delete Order by ID query params
const deleteQByIdText = `DELETE FROM orders WHERE order_id = ?`;
const deleteQByIdValues = (id) => { return id };

module.exports = {

  createOrder: (data, callback) => {
    pool.query(postQText, postValue(data), (err, results, fields) => {
        if (err) return callback(err);
        return callback(null, results);
    });
  },

  getOrders: callback => {
    pool.query(getQText, getValues, (err, results, fields) => {
        if (err) return callback(err);
        return callback(null, results)
    })
  },

  getOrderById: (id, callback) => {
      pool.query(getQByIdText, getQByIdValues(id), (err, results, fields) => {
          if (err) return callback(err);
          return callback(null, results[0]);
      })
  },

  editOrder: (data, callback) => {
      pool.query(updateQText, updateValues(data), (err, results, fields) => {
          if (err) return callback(err);
          return callback(null, results[0]);
      });
  },

  deleteOrder: (id, callback) => {
      pool.query(deleteQByIdText, deleteQByIdValues(id), (err, results, fields) => {
          if (err) return callback(err);
          const receivedResponse = results.affectedRows
          return callback(null, receivedResponse);
      });
  }

}
