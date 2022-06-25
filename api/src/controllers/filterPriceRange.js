const {Product} = require('../db')
const {Op} = require('sequelize')

const filterPriceRange = async (req, res) => {
    let filterPrice = req.params.filterPrice

    try {
        if(filterPrice === '-10mil') {
            let allProducts = await Product.findAll({
                where: {
                    price: {
                        [Op.lt]: 10000
                    }
                }
            })
            res.send(allProducts)
        }
        if(filterPrice === '+10mil') {
            let allProducts = await Product.findAll({
                where: {
                    price: {
                        [Op.between]: [10001, 50000]
                    }
                }
            })
            res.send(allProducts)
        }
        if(filterPrice === '+50mil') {
            let allProducts = await Product.findAll({
                where: {
                    price: {
                        [Op.gt]: 50000
                    }
                }
            })
            res.send(allProducts)
        }
    } catch(e) {
        console.log(e)
    }
}

module.exports = {
    filterPriceRange
}