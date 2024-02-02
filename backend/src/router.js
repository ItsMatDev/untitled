const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const { authorize } = require("./middlewares/auth");

router.post("/users/login", userControllers.login);
router.get("/users/me", authorize, userControllers.getCurrentUser);

const productControllers = require("./controllers/productControllers");

router.get("/products", productControllers.browse);
router.post("/products", productControllers.add);
router.put("/products/:id", productControllers.update);
router.delete("/products/:id", productControllers.deleteOne);

module.exports = router;
