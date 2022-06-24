const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {priceOrder} = require('../controllers/priceOrder')
const {filterCategories} = require('../controllers/filterCategories')
const {getProduct} = require("../controllers/getProductByName");
const { createProduct } = require('../controllers/createProduct');
const { updateProduct } = require('../controllers/updateProduct');
const { getProductById } = require('../controllers/getProductById');
const {userPost} = require('../controllers/userPost')
const usersRoute = require ('./users');
const { adminProducts } = require('../controllers/adminProducts');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/users", usersRoute);

router.post("/CreateProduct", createProduct)

router.get("/ProductDetail/:idProduct", getProductById)

router.put("/ProductDetail/:idProduct", updateProduct)

router.get('/order/:priceOrder', priceOrder)

router.get('/filter/:filterCategory', filterCategories)

router.get("/Catalog", getProduct)

router.post('/user', userPost)

router.get("/Admin/Catalog", adminProducts)

module.exports = router;