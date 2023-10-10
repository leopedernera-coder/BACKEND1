import express from 'express'
import productRouter from './routers/products.js'
import cartRouter from './routers/cart.js'
const app = express()
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
//endpoints
app.get('/', (req, res) => {
    res.send('Hola humano, utiliza "api/products" para ver todos los productos o "/products/id" para ver un producto especifico')
})

app.listen(port, () => {
    console.log('Servidor port', port)
})