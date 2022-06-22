const {product} = require('../db')

const filterCategories = async (req, res) => {
    let filterCategory = req.params.filterCategory
    try {

        let allProducts = await product.findAll()
        const categoriesArr = []
        allProducts.forEach(e => {
            if(e.hasOwnProperty('categories') && e.categories.includes(filterCategory)) categoriesArr.push(e)
        })
        return res.send(categoriesArr)
    } catch(e) {
        console.log(e)
    }
}

module.exports = {
    filterCategories
}