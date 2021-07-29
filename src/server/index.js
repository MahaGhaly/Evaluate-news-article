const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');

const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(express.static('dist'));

console.log(__dirname)

//api constants:
let input = [];
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/new', async function(req, res) {
    input = req.body.url;
    const fullURL = `${baseUrl}key=${apiKey}&url=${input}&lang=en`
    const response = await fetch(fullURL)
    const data = await response.json()
    console.log(data);
    res.send(data);
})
