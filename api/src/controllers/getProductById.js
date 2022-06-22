const {Product} = require("../db")

const getProductById = async (req, res) => {
    const {idProduct} = req.params
    try {
        let prod = await Product.findByPk(idProduct)
        if(prod) {
            return res.json(prod)
        } else res.status(404).send("Producto no encontrado")
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {getProductById}