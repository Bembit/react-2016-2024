import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/webshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const PORT = process.env.PORT || 1337;

app.get('/', (req, res) => {
    res.send('server up');
});

// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// });

// app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find( item => item.id === req.params.id );
//     if (product) {
//         res.send(product);
//     } else {
//         res.status(404).send({ message: 'Woops! Product not found!' });
//     }
// });

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
    res.status(500).send( { message: err.message } );
});

app.listen(PORT, () => {
    console.log('Running on ' + PORT + '.');
    console.log(`Server running on port ${PORT}.`);
});