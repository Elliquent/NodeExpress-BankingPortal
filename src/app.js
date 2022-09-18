/*
 * In app.js require the built-in library fs and store a reference to 
    it in a const called fs. Next, require the built-in library path and 
    store a reference to it in a const called path.
 */
const fs = require('fs');
//  In app.js, require the express framework and store a reference to it 
//  in a const called express.
//  Next, call the express function and store it in a const called app.
//
const express = require('express');
//
// const chalk = require('chalk');  ||OR||  import chalk from 'chalk';
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require("path");

/*  
 * This calls the express function and stores it in a const called 
    app. This step is part or the step requiring the express framework
    mentioned above
*/
const PORT = process.env.PORT || 3000;
const app = express();

/*
 * This code below looks for an html file to display if it doesn't find one,
    it uses the hard coded response in the code below:

    app.get('/', (req, res)=>{
    res.send('Hello from Elliquent');
 */
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
/*  above: Still in app.js, use the set function of your 
    newly created app to configure the directory 
    where our views can be found. 
    Hint: path.join() & __dirname
*/
app.set('views', './src/views');
app.set('view engine', 'ejs');
/*
    above: Using the same set function, set the view engine to ejs.
*/
app.get('/', (req, res) => {
    res.render('index', {title: 'Elliquent Banking Portal'});
//  res.send('Hello from Elliquent');
});
//
/*
    above: In app.js create a get route that points at the root URL path '/'. 
    Render the index view and pass an object with a single key value pair, 
    title: 'Index'.
*/

/* CREATE A SERVER 
    In app.js use the listen function to create a server that listens on port 3000 and 
    then prints the message PS Project Running on port 3000! to the console after the 
    server is created.
*/
app.listen(PORT, () =>{
    debug('Plurasight Project running on port 3000');
//  console.log(`listening on port ${chalk.green('3000')}`);
});

//app.set();

/* Configure the Static Directory
    All of our CSS/JS for the client-side is found 
    in the public directory. We need to point express 
    to public.

    Next, create the index view file called index.ejs in the
    src/views directory
*/

/*
    In app.js create a get route that points at the root 
    URL path '/'. Render the index view and pass an object 
    with a single key value pair, title: 'Index'.

    Hint: render is a function on the response object.
*/

/*
    In app.js use the listen function to create a server 
    that listens on port 3000 and then prints the message 
    PS Project Running on port 3000! to the console after the 
    server is created

module.exports = app.listen(3000, () => {
    console.log('PS project running on port 3000');
  });

  */