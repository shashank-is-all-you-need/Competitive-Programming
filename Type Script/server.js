const express = require('express');
const app = express();

const path = require('path')
const pathIs = path.join(__dirname, 'public')
console.log("path is",pathIs);
app.use('/public', express.static(pathIs))


app.listen(8080,()=>{
	console.log("app started",8080);
})