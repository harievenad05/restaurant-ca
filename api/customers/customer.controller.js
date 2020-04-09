const {
    createCustomer,
    getCustomers,
    getCustomerById,
    editCustomer,
    deleteCustomer
  } = require('./customer.service');

  module.exports = {

    createCus: (req, res) => {
      const body = req.body;
      createCustomer(body, (err, results) => {
          if (err) {
              console.log(err);
              return res.status(500).json({
                  success: 0,
                  message: 'Database connection error'
              })
          };
          return res.status(200).json({
              success: 1,
              message: "Customer created successfully"
          })
      })
    },

    getCus: (req, res) => {
      const id = req.params.id;
      getCustomerById(id, (err, results) => {
          if (err) {
              console.log(err);
              return res.status(500).json({
                  success: 0,
                  message: 'Database connection error'
              })
          };
          if (!results) {
              return res.status(403).json({
                  success: 0,
                  message: 'record not found'
              })
          };
          return res.status(200).json({
              success: 1,
              data: results
          });

      });
    },

    getAllCus: (req, res) => {
      getCustomers((err, results) => {
          if (err) {
              console.log(err);
              return res.status(500).json({
                  success: 0,
                  message: 'Some error occured'
              })
          };
          return res.status(200).json({
              success: 1,
              data: results
          });
      })
    },

    editCus: (req, res) => {
      const body = req.body;
      editCustomer(body, (err, results) => {
          if (err) {
              console.log(err);
              return res.status(500).json({
                  success: 0,
                  message: 'Some error occured'
              })
          };
          return res.status(200).json({
              success: 1,
              message: "customer updated successfully"
          });
      });
    },

    deleteCus: (req, res) => {
      const id = req.params.id;
      deleteCustomer(id, (err, results) => {
          if (err) {
              console.log(err);
              return res.status(500).json({
                  success: 0,
                  message: "Some error occured"
              });
          }
          if (results == 0) {
              return res.status(400).json({
                  success: 0,
                  message: "Record Not Found"
              });
          }
          return res.status(200).json({
              success: 1,
              message: "customer deleted successfully"
          });
      });
    }

  }