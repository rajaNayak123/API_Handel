import express from 'express';
const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "krishna",
            Image: 'https://i.pinimg.com/564x/0a/ec/46/0aec46fdb6c2a1c688eb6f501b711673.jpg',
            price: 100
        },
        {
            id: 2,
            name: "radhaKrishn",
            Image: 'https://i.pinimg.com/564x/ce/03/60/ce03604fa90e11b616cd455b2c92cab0.jpg',
            price: 100
        },
        {
            id: 3,
            name: "lordRam",
            Image: 'https://i.pinimg.com/564x/02/13/be/0213be876fa3006e856d0f566d8ebc0d.jpg',
            price: 100
        },
        {
            id: 4,
            name: "shiva",
            Image: 'https://i.pinimg.com/564x/fb/26/4b/fb264b049fb429ab47ca9c696d28a17f.jpg',
            price: 100
        },
        {
            id: 5,
            name: "vishnu",
            Image: 'https://i.pinimg.com/736x/66/c0/74/66c074d6322db8f620e4a027852a8c2d.jpg',
            price: 100
        },
        {
            id: 6,
            name: "dwarikaDish",
            Image: 'https://i.pinimg.com/564x/3d/69/e4/3d69e4a44ce795768dd4ea73c1f49ae1.jpg',
            price: 100
        }
    ]

    if (req.query.search) {
        const filterProduct = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProduct)
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 2000)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server listening on port", port)
})