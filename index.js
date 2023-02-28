const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('News API running');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
});


app.listen(port, () => {
    console.log(`News portal app listening on port:  ${port}`);
});
