import bcrypt from 'bcryptjs';

const Data = {
    users: [
        {
            name: 'Admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
                {
            name: 'User',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-1-1',
            price: 35.99,
            discountPercent: 20,
            brand: 'HotTopic',
            rating: 5,
            numReviews: 12,
            countInStock: 15,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Girls blouse',
            category: 'Skirts',
            image: '/images/product-2-1',
            price: 23.99,
            discountPercent: 0,
            brand: 'HotTopic',
            rating: 4,
            numReviews: 12,
            countInStock: 7,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Menz Shirt',
            category: 'Skirts',
            image: '/images/product-3-1',
            price: 39.99,
            discountPercent: 15,
            brand: 'HotTopic',
            rating: 4.5,
            numReviews: 12,
            countInStock: 0,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-4-1',
            price: 51.99,
            discountPercent: 0,
            brand: 'HotTopic',
            rating: 3,
            numReviews: 12,
            countInStock: 3,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-5-1',
            price: 25.99,
            discountPercent: 0,
            brand: 'HotTopic',
            rating: 4,
            numReviews: 12,
            countInStock: 1,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Menz Shirt',
            category: 'Skirts',
            image: '/images/product-6-1',
            price: 19.99,
            discountPercent: 15,
            brand: 'HotTopic',
            rating: 5,
            numReviews: 12,
            countInStock: 5,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-7-1',
            price: 22.99,
            discountPercent: 0,
            brand: 'HotTopic',
            rating: 4.5,
            numReviews: 12,
            countInStock: 12,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-8-1',
            price: 89.99,
            discountPercent: 25,
            brand: 'HotTopic',
            rating: 3.5,
            numReviews: 12,
            countInStock: 2,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-9-1',
            price: 28.99,
            discountPercent: 0,
            brand: 'HotTopic',
            rating: 3.5,
            numReviews: 12,
            countInStock: 22,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-10-1',
            price: 37.99,
            discountPercent: 10,
            brand: 'HotTopic',
            rating: 3.5,
            numReviews: 12,
            countInStock: 150,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-11-1',
            price: 45.99,
            discountPercent: 0,
            brand: 'HotTopic',
            rating: 3.5,
            numReviews: 12,
            countInStock: 2000,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-12-1',
            price: 55.99,
            discountPercent: 5,
            brand: 'HotTopic',
            rating: 3.5,
            numReviews: 12,
            countInStock: 19,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-13-1',
            price: 109.99,
            discountPercent: 25,
            brand: 'HotTopic',
            rating: 3.5,
            numReviews: 12,
            countInStock: 4,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-14-1',
            price: 17.99,
            discountPercent: 0,
            brand: 'HotTopic',
            rating: 3.5,
            numReviews: 12,
            countInStock: 15,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-14-1',
            price: 17.99,
            discountPercent: 0,
            brand: 'HotTopic',
            rating: 3.5,
            numReviews: 12,
            countInStock: 15,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        },
        {
            name: 'Some clothing',
            category: 'Skirts',
            image: '/images/product-14-1',
            price: 17.99,
            discountPercent: 0,
            brand: 'HotTopic',
            rating: 3.5,
            numReviews: 12,
            countInStock: 15,
            description: 'Your usual emo skirt, nothing new, nothing changed since the 2000\'s.'
        }
    ]
}

export default Data;