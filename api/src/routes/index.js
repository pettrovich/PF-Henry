const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {priceOrder} = require('../controllers/Product/GET/priceOrder')
const {filterCategories} = require('../controllers/Product/GET/filterCategories')
const {getProduct} = require("../controllers/Product/GET/getProductByName");
const { createProduct } = require('../controllers/Product/POST/createProduct');
const { updateProduct } = require('../controllers/Product/PUT/updateProduct');
const { getProductById } = require('../controllers/Product/GET/getProductById');
const {userPost} = require('../controllers/User/POST/userPost')
const usersRoute = require ('./users');
const { adminProducts } = require('../controllers/Admin/GET/adminProducts');
const {filterShipping} = require('../controllers/Product/GET/filterShipping')
const {filterBrand} = require('../controllers/Product/GET/filterBrand');
const {filterStockProduct} = require('../controllers/Admin/GET/filterStockProducts')
const {filterDisabled} = require('../controllers/Admin/GET/filterDisabled')
const {filterEyS} = require('../controllers/Admin/GET/filterEyS')
const {filterPriceRange} = require('../controllers/Product/GET/filterPriceRange')
const {filterDiscount} = require('../controllers/Admin/GET/filterDiscount');
const {adminProductsCounter} = require('../controllers/Admin/GET/adminProductsCounter')
const {login} = require('../controllers/User/POST/login')
const {getUserById} = require('../controllers/User/GET/getUserById');
const verifyToken = require('../middlewares/verifyToken');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/users", usersRoute);

router.post("/CreateProduct", createProduct)  //verifyToken (Para inicio de sesion)

router.get("/ProductDetail/:idProduct", getProductById)

router.put("/ProductDetail/:idProduct", updateProduct)

router.get('/order/:priceOrder', priceOrder)

router.get('/filterCategory/:filterCategory', filterCategories)

router.get("/Catalog", getProduct)

router.post('/user', userPost)

router.get("/Admin/Catalog", adminProducts)

router.get("/Admin/Counter", adminProductsCounter)

router.get('/filterShipping/:filterShipping', filterShipping)

router.get('/filterBrand/:filterBrand', filterBrand)

router.get('/filterStock/:filterStock', filterStockProduct)

router.get('/filterDisabled/:filterDisabled', filterDisabled)

router.get('/filterEyS/:filterEyS', filterEyS)

router.get('/filterPriceRange/:filterPrice', filterPriceRange)

router.get('/filterDiscount/:discount', filterDiscount)

router.post('/login', login)

router.get('/user', verifyToken , getUserById)



module.exports = router;