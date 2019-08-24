const express = require('express');
const bodyParser = require('body-parser');
const pathUtil = require('./util/path')
const app = express();

app.set('view engine', 'ejs');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(pathUtil.public));

app.use(adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);