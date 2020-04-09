const {
  createOrder,
  getOrders,
  getOrderById,
  editOrder,
  deleteOrder
} = require('./order.service');

module.exports = {

  createOrdr: (req, res) => {
    const body = req.body;
    createOrder(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: 'Database connection error'
            })
        };
        return res.status(200).json({
            success: 1,
            message: "Order created successfully"
        })
    })
  },

  getOrdrbyId: (req, res) => {
    const id = req.params.id;
    getOrderById(id, (err, results) => {
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

  getAllOrdr: (req, res) => {
    getOrders((err, results) => {
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

  editOrdr: (req, res) => {
    const body = req.body;
    editOrder(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: 'Some error occured'
            })
        };
        return res.status(200).json({
            success: 1,
            message: "Order updated successfully"
        });
    });
  },

  deleteOrdr: (req, res) => {
    const id = req.params.id;
    deleteOrder(id, (err, results) => {
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
            message: "Order deleted successfully"
        });
    });
  }

}