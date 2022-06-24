const {Product} = require("../db")

const createProduct = async (req, res) => {
    const {name, image, price, description, categories, stock, freeShipping, brand} = req.body
    try {
        await Product.create({
            name,
            image,
            price,
            description,
            categories,
            stock,
            freeShipping,
            brand
        })
        res.send(`Producto ${name} creado exitosamente`)
    } catch (error) {
        res.status(404).send("No se pudo crear el producto")
    }
}

module.exports = {createProduct}