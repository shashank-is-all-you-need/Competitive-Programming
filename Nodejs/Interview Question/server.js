// npm imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Custom Imports
const ErrorHandler = require('./middleware/error-handler');
const UserController = require('./controllers/user-controller.js');
const dbFile = require('./db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use("/api",UserController);

//Error Handling middleware code is written here
app.use(ErrorHandler);



let CONFIGURATIONS = {
	port:8080
}

app.listen(CONFIGURATIONS.port, (err) =>{
	if (!err) {
		console.log("server started at port",CONFIGURATIONS.port);
	} else {
		console.log("failed to start the server");
	}
})