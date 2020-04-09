const pool = require("../../config/db");

//POST Item query params
const postQText = "INSERT INTO item(item_name, item_price) VALUES(?, ?)";
const postValue = (data) => {
    let item = [
        data.item_name,
        data.item_price
    ];
    return item;
};

//Get Item query params
const getQText = `SELECT item_id, item_name, item_price from item`;
const getValues = [];

//Get Item by ID query params
const getQByIdText = `SELECT item_id, item_name, item_price from item WHERE item_id = ?`;
const getQByIdValues = (id) => { return id };

//Edit Item query params
const updateQText = `UPDATE item SET item_name=?, item_price=? WHERE item_id = ?`
const updateValues = (data) => {
    let updatedtem= [
        data.item_name,
        data.item_price,
        data.item_id
    ];
    return updatedtem;
};

//Delete Project by ID query params
const deleteQByIdText = `DELETE FROM item WHERE item_id = ?`;
const deleteQByIdValues = (id) => { return id };

module.exports = {

  createItem: (data, callback) => {
    pool.query(postQText, postValue(data), (err, results, fields) => {
        if (err) return callback(err);
        return callback(null, results);
    });
  },

  getItems: callback => {
    pool.query(getQText, getValues, (err, results, fields) => {
        if (err) return callback(err);
        return callback(null, results)
    })
  },

  getItemById: (id, callback) => {
      pool.query(getQByIdText, getQByIdValues(id), (err, results, fields) => {
          if (err) return callback(err);
          return callback(null, results[0]);
      })
  },

  editItem: (data, callback) => {
      pool.query(updateQText, updateValues(data), (err, results, fields) => {
          if (err) return callback(err);
          return callback(null, results[0]);
      });
  },

  deleteItem: (id, callback) => {
      pool.query(deleteQByIdText, deleteQByIdValues(id), (err, results, fields) => {
          if (err) return callback(err);
          const receivedResponse = results.affectedRows
          return callback(null, receivedResponse);
      });
  }

}