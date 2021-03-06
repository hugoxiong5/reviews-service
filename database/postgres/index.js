const { Client } = require('pg');

const client = new Client({
    database: 'reviews_service'
});

client.connect()
.then(() => {
    console.log('Connected to ProgreSQL database!');
})
.catch((err) => {
    console.error('Error connecting to database: ', err.stack);
});

module.exports = client;