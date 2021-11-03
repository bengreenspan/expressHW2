const express = require("express");
const morgan = require('morgan');
const app = express();
const postBank = require('./postBank');
const path = require('path');



app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
const posts = postBank.list();
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
      ${posts.map(post => `
        <div class='news-item'>
          <p>
           <a href='/${post.id}'> <span class="news-position">${post.title} </span></a>
          </p>
        </div>`
      ).join('')}
    </div>
  </body>
</html>`
);
});

app.get('/:id', (req, res)=> {
    const id = req.params.id;
    const post = postBank.find(id);
    res.send(
        `<!DOCTYPE html>
      <html>
      <head>
        <title>Ingredients</title>
        <link rel="stylesheet" href="/style.css" />
        <nav>
  <a href='/'>Sandwiches</a>
  </nav>
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png"/>${post.title}</header>
             
         
          <p>
              ${ post.content }
              <img src="/${post.pic}.png" class="sand">
              <ul> 
              Ingredients: ${ post.Ingredients } 
              </ul>
              </p>
            </div>
        </div>
      </body>
    </html>`
    );
});

const PORT = 1234;

app.listen(PORT, () => {
  console.log(`App listening in port ${1234}`);
});