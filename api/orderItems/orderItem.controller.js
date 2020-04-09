const {
  createOrderItem,
  getOrderItems,
  getOrderItemById,
  editOrderItem,
  deleteOrderItem
} = require('./orderItem.service');

module.exports = {
  createOrderItm: (req, res) => {
    const body = req.body;
    createOrderItem(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: 'Database connection error'
            })
        };
        return res.status(200).json({
            success: 1,
            message: "Ordered Item created successfully"
        })
    })
  },

  getOrderItmbyId: (req, res) => {
    const id = req.params.id;
    getOrderItemById(id, (err, results) => {
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

  getAllOrderItm: (req, res) => {
    getOrderItems((err, results) => {
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

  editOrderItm: (req, res) => {
    const body = req.body;
    editOrderItem(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: 'Some error occured'
            })
        };
        return res.status(200).json({
            success: 1,
            message: "Ordered Item updated successfully"
        });
    });
  },

  deleteOrderItm: (req, res) => {
    const id = req.params.id;
    deleteOrderItem(id, (err, results) => {
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
            message: "Ordered Item deleted successfully"
        });
    });
  }
}