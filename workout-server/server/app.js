require("dotenv").config();
const express = require('express');
const db = require('./db');

const app = express();
app.use(require('./middleware/headers'));
const controllers = require('./controllers');
let user = require('./controllers/usercontroller');

app.use('./user', user)
app.use('./log', controllers.logcontroller);

db.authenticate()
.then(() => db.sync())
.then(() =>{
    app.listen(process.env.PORT, () => console.log(`[Server:] App is listing on port ${process.env.PORT}`));
})

.catch ((err) => {
    console.log('[Server:] Server Crashed');
    console.error(err);
})