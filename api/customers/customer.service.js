const pool = require("../../config/db");


//POST Customer query params
const postQText = "INSERT INTO customers(customer_name) VALUES(?)";
const postValue = (data) => {
    let customers = [
        data.customer_name
    ];
    return customers;
};

//Get Customers query params
const getQText = `SELECT customer_id, customer_name from customers`;
const getValues = [];

//Get Customer by ID query params
const getQByIdText = `SELECT customer_id, customer_name from customers WHERE customer_id = ?`;
const getQByIdValues = (id) => { return id };

//Edit Customer query params
const updateQText = `UPDATE customers SET customer_name=? WHERE customer_id = ?`
const updateValues = (data) => {
    let updatedCustomer = [
        data.customer_name,
        data.customer_id
    ];
    return updatedCustomer;
};

//Delete Project by ID query params
const deleteQByIdText = `DELETE FROM customers WHERE customer_id = ?`;
const deleteQByIdValues = (id) => { return id };


module.exports = {
  createCustomer: (data, callback) => {
    pool.query(postQText, postValue(data), (err, results, fields) => {
        if (err) return callback(err);
        return callback(null, results);
    });
},
  getCustomers: callback => {
    pool.query(getQText, getValues, (err, results, fields) => {
        if (err) return callback(err);
        return callback(null, results)
    })
  },

  getCustomerById: (id, callback) => {
    pool.query(getQByIdText, getQByIdValues(id), (err, results, fields) => {
        if (err) return callback(err);
        return callback(null, results[0]);
    })
  },

    editCustomer: (data, callback) => {
    pool.query(updateQText, updateValues(data), (err, results, fields) => {
        if (err) return callback(err);
        return callback(null, results[0]);
    });
  },
  deleteCustomer: (id, callback) => {
      pool.query(deleteQByIdText, deleteQByIdValues(id), (err, results, fields) => {
          if (err) return callback(err);
          const receivedResponse = results.affectedRows
          return callback(null, receivedResponse);
      });
  }
}