const { Product } = require('../../../db')
const { Op } = require('sequelize')

const filterPriceRange = async (req, res) => {
    let filterPrice = req.params.filterPrice

    try {

        switch (filterPrice) {
            case "-10mil":
                let productFiltered1 = await Product.findAll({
                    where: {
                        price: {
                            [Op.lt]: 10000
                        }
                    }
                })
                return res.send(productFiltered1)

            case '+10mil':
                let Productfiltered2 = await Product.findAll({
                    where: {
                        price: {
                            [Op.between]: [10000.01, 50000]
                        }
                    }
                })
                return res.send(Productfiltered2)

            case '+50mil': 
            let productFiltered3 = await Product.findAll({
                        where: {
                            price: {
                                [Op.gt]: 50000
                            }
                        }
                    })
                    return res.send(productFiltered3)
            default:
                    let allProducts = await Product.findAll()
                    return res.send(allProducts)
        }

    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    filterPriceRange
}