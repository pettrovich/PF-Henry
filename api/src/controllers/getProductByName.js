const {Product} = require("../db")
const {Op} = require('sequelize')

async function getProductByName (name) {
    let products = await Product.findAll({ 
        where: {
            disabled: false,
            name:{
                [Op.substring]:`${name}`
            }
        },
    })
    return products
}

const getProduct = async (req, res) =>{
    const {name} = req.query
    try {
        if(name){
        let product = await getProductByName(name)
        if(product) return res.json(product)
    }
    let products = await Product.findAll({
        where: {
            disabled: false
        }
    })
    res.json(products)        
    } catch (error) {
     res.status(404).send("No se pudieron obtener los productos")    
    }}


module.exports = {getProduct}