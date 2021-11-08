const html = require('html-template-tag');
const path = require('path');
const express = require("express");
const morgan = require('morgan');
const app = express();

const { client, syncAndSeed } = require('./db');


const setUp = async () => {
  try {
    await client.connect();
    await syncAndSeed();
    console.log('connected to database');
    app.listen(PORT, () => {
      console.log(`App listening in port ${1234}`);
    });
  }
  catch(ex){
    console.log(ex);
  }
};

setUp()

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res, next) => {
  try {
    const response = await client.query('SELECT * From sandwich;');
    const sandwiches = response.rows;
    res.send(
      `<!DOCTYPE html>
      <html>
      <head>
        <title>Sandwiches</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
        <p>
          <header><img src="/logo.png"/>Sandwiches</header>
          ${sandwiches.map(sandwiches => `
            <div class='news-item'>
            
              <ul>
              <li>
              <a href='/sandwiches/${sandwiches.id}'><span class="news-position">${sandwiches.name} </span></a>
               </li>
               </ul>
              </p>
            </div>`
          ).join('')}
        </div>
      </body>
    </html>`

    );
  }
  catch(ex){
    next(ex);
  }
});

app.get('/sandwiches/:id', async(req, res, next) => {
  try {
    let response = await client.query('SELECT * From sandwich where id=$1;', [req.params.id]);
    const sandwiches = response.rows[0];
    response = await client.query('SELECT * From ingred where sandwich_id=$1;', [req.params.id]);
    const ingreds = response.rows;

    res.send(
      `<!DOCTYPE html>
      <html>
      <head>
        <title>Sandwiches</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png"/><a href='/'>Sandwiches</a></header>
          <h2>${ sandwiches.name } </h2>
         <ul>
         ${
          ingreds.map( ingred => `
          <li>
          <a href='/ingredients/${ingred.id}'>
          ${ ingred.name }
          </a>
          </li>
          `).join('')
        }
        </div>
         </ul>
      </body>
    </html>

    `);
  }
  catch(ex){
    next(ex);
  }
});


app.get('/ingredients/:id', async(req, res, next) => {
  try {
    let response = await client.query('SELECT * From ingred where name=$1;', [req.params.name]);
    const sandwiches = response.rows[0];
    response = await client.query('SELECT * From ingred where sandwich_id=$1;', [req.params.id]);
    const ingreds = response.rows;

    res.send(
      `<!DOCTYPE html>
      <html>
      <head>
        <title>Sandwiches</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png"/><a href='/'>Sandwiches</a></header>
          <h2>${ ingreds.name } </h2>
         <ul>
         ${
          ingreds.map( ingred => `
          <li>
          <a href='/ingredients/${ingred.id}'>
          ${ ingred.name }
          </a>
          </li>
          `).join('')
        }
        </div>
         </ul>
      </body>
    </html>

    `);
  }
  catch(ex){
    next(ex);
  }
});

app.get( '*', async(req, res, next) => {
  try {
    res.send(
      `<!DOCTYPE html>
      <html>
      <head>
        <title>Sandwiches</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png"/>Sandwiches</header>
     
     <h1> Page Not Found. </h1>

      <img src="/sad_sandwhich.png"/ width="250" height="200">
      <h3>The page you requested does not exist. Click <a href='/'>here</a> to continue browsing. <h3?
    
        </div>
      
      </body>
    </html>

    `);
  }
  catch(ex){
    next(ex);
  }
});


const PORT = process.env.PORT || 1234

module.exports = app

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}));



