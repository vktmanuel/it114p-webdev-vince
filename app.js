const express = require('express');
const bodyParser = require('body-parser');
const pathUtil = require('./util/path')
const app = express();

app.set('view engine', 'ejs');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(pathUtil.public));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).render('404', {
        pageTitle: '404 - Page Not Found',
        path: ''
    });
});

app.listen(3000);