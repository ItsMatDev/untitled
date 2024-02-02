const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res) => {
  try {
    // Fetch all items from the database
    const products = await tables.products.readAll();

    // Respond with the items in JSON format
    res.json(products);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};

const add = async (req, res, next) => {
  const product = req.body;
  try {
    const insertId = await tables.products.create(product);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const data = req.body;
  try {
    // Fetch all items from the database
    const products = await tables.products.modifyOneProduct(data, productId);

    // Respond with the items in JSON format
    res.json(products);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};

const deleteOne = async (req, res) => {
  const productId = parseInt(req.params.id, 10);
  try {
    // Fetch all items from the database
    const products = await tables.products.deleteOneProduct(productId);

    // Respond with the items in JSON format
    res.json(products);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};

module.exports = {
  browse,
  add,
  deleteOne,
  update,
};
