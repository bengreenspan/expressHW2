
const { client, syncAndSeed } = require('./db');
const express = require("express");
const morgan = require('morgan');
const app = express();
const path = require('path');


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
          <header><img src="/logo.png"/>Sandwiches</header>
          ${sandwiches.map(sandwiches => `
            <div class='news-item'>
              <p>
              <ul>
              <li>
               <a href='/sandwiches/${sandwiches.name}'> <span class="news-position">${sandwiches.name} </span></a>
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
        </div>
         <ul>
         ${
          ingreds.map( ingred => `
          <li>
          ${ ingred.name }
          </li>
          `).join('')
        }

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




