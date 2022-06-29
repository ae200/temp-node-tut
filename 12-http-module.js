const http = require('http')

const server = http.createServer( (req, res) => {
 if(req.url === '/' ) {
 res.end('Welcome to our home page')
 }
 if(req.url === '/about') {
  res.end('Here is our short history')
 }
 res.end(`
 <h1>Oops!</h1
 <p>We can't seem to fine the page you are looking for</p>
 <a href="/"></a>
 `)
})

server.listen(4500, () => {
 console.log('Server up and runing')
})