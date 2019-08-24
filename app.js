const express = require('express');
const bodyParser = require('body-parser');
const pathUtil = require('./util/path')
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(pathUtil.public));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).sendFile(pathUtil.views + '404.html');
});

app.listen(3000);