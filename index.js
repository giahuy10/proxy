var app = require('express')();
var http = require('http').createServer(app);
var bodyParser = require('body-parser')
var cors = require('cors')

const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: false }))
 app.use(cors())

// parse application/json
app.use(bodyParser.json())
app.post('/login', function(req, res){
  console.log(req.body)
  axios.post('http://10.131.4.88/api/login', req.body)
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    console.log(error);
  });
});


http.listen(3300, function(){
  console.log('listening on *:3300');
});