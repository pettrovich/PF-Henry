const {Product} = require("../db")

const updateProduct = async (req, res) => {
    const {idProduct} = req.params
    const product = req.body

    try {
        let prod = await Product.update(product, ({
            where: {
                id: idProduct
            }
        }))
        if(product.disabled === true){
            res.send(`Producto Deshabilitado`)
        }else{
            res.send(`Producto actualizado`)
        }
    } catch (error) {
        res.status(404).send("No se pudo actualizar el producto")
    }
}

module.exports = {updateProduct}