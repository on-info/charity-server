const libraryItem = require('./libraryItem');
const isValidQuery = require('./isValidLibraryQuery');

const addItem = item => {
  const itemToAdd = new libraryItem(item);
  return itemToAdd.save();
};

const getItems = searchQuery => {
  const { categoryTag, type } = searchQuery;
  if (categoryTag && isValidQuery(categoryTag) && type && isValidQuery(type)) {
    return libraryItem.find({
      categoryTag,
      type,
      approved: true,
    });
  }
  return Promise.reject(new Error('Invalid queries'));
};

const getPendingItems = () => libraryItem.find({ approved: false });

module.exports = {
  addItem,
  getItems,
  getPendingItems,
};
