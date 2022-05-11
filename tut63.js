const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo Selectors and more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(145, 255, 0);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          .btn{
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              font-weight: bold;
              background: rgb(0, 174, 255);
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          a{
              text-decoration: none;
              color: crimson;
          }
          a:hover{
              color: rgb(222, 135, 210);
              background-color:darkcyan;
          }
          a:visited{
  
          background-color: rgb(169, 169, 169);
          }
          a:active{
              background-color: darkslategrey;
          }
          .btn:hover{
              color: rgb(222, 135, 210) ;
              background-color:  crimson;;
              border: 2px solid black;
          }
          
  
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
      <h3>This is my heading</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, atque. A autem expedita magni tempora, ab fugit ullam non aperiam beatae cupiditate provident quasi esse molestias suscipit fugiat vel dolorem. Perspiciatis obcaecati incidunt libero.</p>
      <a href="http://google.com" target="_blank" class="btn">Read more</a>
      <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});