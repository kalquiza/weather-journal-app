projectData = [];

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 3000;
const server = app.listen(port, listening);
function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

// GET Route
app.get('/all', (req, res) => {
    res.send(projectData);
})

// POST Route
app.post('/', (req, res) => {
    newEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        feelings: req.body.feelings
      }
    
      projectData.push(newEntry)
    }
)