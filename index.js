const express = require('express');
const app = express();
// if it doesnt work use 
// const app = new express();

// uninstall path dep if this doesnt work 
const path = require('path');

// const cors = require('cors');
// maybe take this out if need be 

app.use(express.static('client'));
// app.use(cors()); maybe add this 
// app.use(express.json()); maybe switch to this 

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/index.html'))
});

// app.get("/", (req, res) => res.send("this is the page"));


const port = 3001; 

app.listen(port, () => {
    console.log(`\n Express departing now from http://localhost:${port} \n`)
})