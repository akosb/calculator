var express = require('express')
var app = express()
var fs = require('fs')


app.use('/', express.static('calc'))
app.get('/secret', function (req, res) {
  var secret = fs.readFileSync('calc/secret.html', 'utf-8')
  res.send(secret)
  res.end()
})

app.listen(3000, function () {
  console.log('server listening on port 3000!')
})