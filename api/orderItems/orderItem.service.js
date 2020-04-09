const pool = require("../../config/db");

//POST OrderItem query params
const postQText = "INSERT INTO order_items(order_id, item_id, quantity) VALUES(?, ?, ?)";
const postValue = (data) => {
    let orderItem = [
        data.order_id,
        data.item_id,
        data.quantity
    ];
    return orderItem;
};

//Get OrderItem query params
const getQText = `SELECT order_item_id, order_id, item_id, quantity from order_items`;
const getValues = [];

//Get OrderItem by ID query params
const getQByIdText = `SELECT order_item_id, order_id, item_id, quantity from order_items WHERE order_item_id = ?`;
const getQByIdValues = (id) => { return id };

//Edit OrderItem query params
const updateQText = `UPDATE order_items SET order_id=?, item_id=?, quantity=? WHERE order_item_id = ?`
const updateValues = (data) => {
    let updatedOrderItem= [
        data.order_id,
        data.item_id,
        data.quantity,
        data.order_item_id
    ];
    return updatedOrderItem;
};

//Delete OrderItem by ID query params
const deleteQByIdText = `DELETE FROM order_items WHERE order_item_id = ?`;
const deleteQByIdValues = (id) => { return id };

module.exports = {

  createOrderItem: (data, callback) => {
    pool.query(postQText, postValue(data), (err, results, fields) => {
        if (err) return callback(err);
        return callback(null, results);
    });
  },

  getOrderItems: callback => {
    pool.query(getQText, getValues, (err, results, fields) => {
        if (err) return callback(err);
        return callback(null, results)
    })
  },

  getOrderItemById: (id, callback) => {
      pool.query(getQByIdText, getQByIdValues(id), (err, results, fields) => {
          if (err) return callback(err);
          return callback(null, results[0]);
      })
  },

  editOrderItem: (data, callback) => {
      pool.query(updateQText, updateValues(data), (err, results, fields) => {
          if (err) return callback(err);
          return callback(null, results[0]);
      });
  },

  deleteOrderItem: (id, callback) => {
      pool.query(deleteQByIdText, deleteQByIdValues(id), (err, results, fields) => {
          if (err) return callback(err);
          const receivedResponse = results.affectedRows
          return callback(null, receivedResponse);
      });
  }

}
