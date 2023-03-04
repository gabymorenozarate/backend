productsArray = [{
id: 1,
title: 'Producto ejemplo',
description: 'Este es un producto',
thumbnail: 'imagen1',
price: 3600,
code: '0001',
stock: 100,
}]

class ProductManager {
    constructor(){
        this.products = productsArray
    }
addProduct(newProduct){

// validar code
const product = this.products.find(prod => prod.code === newProduct.code)
if (product){
    return 'Existe el producto con este code'

}

// id autoincremental
if (this.products.length===0 ) {
    this.products.push( {id: 1, ... newProduct} )

}else { 
    this.products.push( {id: this.products[this.product.length-1].id +1  , ... newProduct} )
}

}

getProducts(){
        return this.products

}
getProductById(id){
const product = this.products.find(prod => prod.id === id)
if (!product) {
return 'not found'
}

return product

}
}
//module.exports = {

 //  ProductManager
//}

const productos = new ProductManager()


//console.log(productos.getProducts())
//console.log(productos.addProduct({
//productos.addProduct({
   // title: 'Producto 2',
   // description: 'Este es un producto 2',
   // thumbnail: 'imagen2'
   // price: 4600,
   // code: '0001',
   // stock: 100
//}))
productos.addProduct({
    title: 'Producto ejemplo 2',
description: 'Este es un producto2',
thumbnail: 'imagen2',
price: 3600,
code: '0002',
stock: 100
})
console.log('todos', productos.getProducts())
console.log('por id', productos.getProductsById())