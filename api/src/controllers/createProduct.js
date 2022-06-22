const {Product} = require("../db")

const createProduct = async (req, res) => {
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
}

module.exports = {createProduct}