const EXPRESS = require('express');
const APP = EXPRESS();

APP.set('view engine', 'ejs');

APP.get('/', (req, res) => {
    res.render('index', { name: 'Sadio Mane', age: 28 } );
});
APP.get('/about', (req, res) => {
    res.render('about', { things: ['Football','Coding','Golf'] });
});
APP.get('/blog', (req, res) => {
    res.render('blog');
});

APP.listen(8000);