const { Router } = require('express');
const {Product} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/CreateProduct", async (req, res) => {
    const {name, image, price, description, categories, stock} = req.body
    try {
        await Product.create({
            name,
            image,
            price,
            description,
            categories,
            stock
        })
        res.send(`Producto ${name} creado exitosamente`)
    } catch (error) {
        res.send("No se pudo crear el producto")
    }
})

router.put("/ProductDetail/:idProduct", async (req, res) => {
    const {idProduct} = req.params
    const product = req.body

    try {
        let prod = await Product.update(product, ({
            where: {
                id: idProduct
            }
        }))
        res.send(`Producto actualizado`)
    } catch (error) {
        res.status(404).send("No se pudo actualizar el producto")
    }
})

module.exports = router;
