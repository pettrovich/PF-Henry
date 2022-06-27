const {Product} = require("../../../db")

const createProduct = async (req, res) => {
    const {name, image, price, description, categories, stock, disabled, freeShipping, brand, discount} = req.body
    try {
        await Product.create({
            name,
            image,
            price,
            description,
            categories,
            stock,
            disabled,
            freeShipping,
            brand,
            discount
        })
        res.send(`Producto ${name} creado exitosamente`)
    } catch (error) {
        res.status(404).send("No se pudo crear el producto")
    }
}

module.exports = {createProduct}