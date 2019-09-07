const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Set default template engine
app.set('view engine', 'ejs');

//Include our error controller
const errorController = require('./controllers/error');

//Include custom routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//To parse incoming body, without it you will get undefined value.
app.use(bodyParser.urlencoded({ extended: false }));
//To set our public files such as css and js
app.use(express.static(path.join(__dirname, 'public')));

//We tell our app to custom routes that we had included
app.use(adminData.routes);
app.use(shopRoutes);
//Default route when page is not found
app.use(errorController.get404);

app.listen(3000);
