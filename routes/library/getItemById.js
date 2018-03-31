const { getItemById } = require('../../models/libraryItems/libraryItemAPI');

module.exports = router => {
  router.route('/:_id').get((req, res) => {
    getItemById(req.params._id).then(item => {
      res.json(item);
    });
  });
  return router;
};