
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const dotenv = require('dotenv').config();
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = process.env.PORT|| 5000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
// connection a la base de donnée
connectDB();


// session use
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
    }),
    //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
    // Date.now() - 30 * 24 * 60 * 60 * 1000
  })); 


// passort authentification
app.use(passport.initialize()); 
app.use(passport.session());


// static file
app.use(express.static('public'));

// ejs configuration
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


// route 
app.use('/', require('./server/routes/auth') );
app.use('/', require('./server/routes/index') );
app.use('/', require('./server/routes/dashbord') );
 
app.get('*', (req, res)=>{
    res.status(404).render('404');
})

app.listen(port, ()=>{
    console.log(`Ecoute sur le port ${port}; bonjour`);
});
