var models = require('../models'),
    retailersController;

retailersController = {

  index: function(req, res, next) {
    models.Retailer.fetchAll().then(function(retailers) {
      res.status(200).json({ success: true, retailers: retailers });
    });
  }
}

module.exports = {
  index: retailersController.index
}
