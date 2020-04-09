const {
  createItem,
  getItems,
  getItemById,
  editItem,
  deleteItem
} = require('./item.service');

module.exports = {

  createItm: (req, res) => {
    const body = req.body;
    createItem(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: 'Database connection error'
            })
        };
        return res.status(200).json({
            success: 1,
            message: "Item created successfully"
        })
    })
  },

  getItmbyId: (req, res) => {
    const id = req.params.id;
    getItemById(id, (err, results) => {
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

  getAllItms: (req, res) => {
    getItems((err, results) => {
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

  editItm: (req, res) => {
    const body = req.body;
    editItem(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: 'Some error occured'
            })
        };
        return res.status(200).json({
            success: 1,
            message: "Item updated successfully"
        });
    });
  },

  deleteItm: (req, res) => {
    const id = req.params.id;
    deleteItem(id, (err, results) => {
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
            message: "Item deleted successfully"
        });
    });
  }

}