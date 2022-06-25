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
const {filterShipping} = require('../controllers/filterShipping')
const {filterBrand} = require('../controllers/filterBrand');
const {filterStockProduct} = require('../controllers/filterStockProducts')
const {filterDisabled} = require('../controllers/filterDisabled')
const {filterEyS} = require('../controllers/filterEyS')
const {filterPriceRange} = require('../controllers/filterPriceRange')
const {filterDiscount} = require('../controllers/filterDiscount')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/users", usersRoute);

router.post("/CreateProduct", createProduct)

router.get("/ProductDetail/:idProduct", getProductById)

router.put("/ProductDetail/:idProduct", updateProduct)

router.get('/order/:priceOrder', priceOrder)

router.get('/filterCategory/:filterCategory', filterCategories)

router.get("/Catalog", getProduct)

router.post('/user', userPost)

router.get("/Admin/Catalog", adminProducts)

router.get('/filterShipping/:filterShipping', filterShipping)

router.get('/filterBrand/:filterBrand', filterBrand)

router.get('/filterStock/:filterStock', filterStockProduct)

router.get('/filterDisabled/:filterDisabled', filterDisabled)

router.get('/filterEyS/:filterEyS', filterEyS)

router.get('/filterPriceRange/:filterPrice', filterPriceRange)

router.get('/filterDiscount/:discount', filterDiscount)



module.exports = router;