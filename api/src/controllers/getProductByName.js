const {Product} = require("../db")

async function getProductByName (name) {
    let product = await Product.findOne({ 
        where: {name}
    })
    return product
}

const getProduct = async (req, res) =>{
    const {name} = req.query
    try {
        if(name){
        let product = await getProductByName(name)
        if(product) return res.json(product)
    }
    let products = await Product.findAll()
    res.json(products)        
    } catch (error) {
     res.status(404).send("No se pudieron obtener los productos")    
    }}


module.exports = {getProduct}