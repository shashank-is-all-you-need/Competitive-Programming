const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();



app.use(bodyParser.json());

const configurations = {
	"port":8080
}

let travellers = [
	{
		"title":"Shashank",
		"id":1
	},
	{
		"title":"Suhas",
		"id":2
	},
	{
		"title":"Praveen",
		"id":3
	},
	{
		"title":"Bulli Teja",
		"id":4
	},
]

app.get('/api/getTravellers',(req, res)=>{
	res.status(200).send({"data":travellers})
})

app.get('/api/getTraveller/:id',(req, res)=>{
	const traveller = travellers.find(traveller => traveller.id == req.params.id);
	if (!traveller) {
		res.status(404).send("No traveller with that id found")
	} else {
		res.status(200).send({"travellerDetails":traveller})
	}
})

app.post('/api/addTraveller',(req, res) => {
	const {error} = validateTraveller(req.body);
	if (error) {
		res.status(400).send({"msg":"Unable to add traveller", "error":error.details[0].message})
	} else {
		const traveller = {
			"title":req.body.title,
			"id": travellers.length + 1
		}
		travellers.push(traveller);
		console.log("total travelers", travellers);
		res.status(200).send({"msg":"Traveller added succesfully"})
	}
})

app.put('/api/updateTraveller/:id',(req, res) => {
	const traveller = travellers.find(traveller => traveller.id == req.params.id);
	if (!traveller) {
		res.status(404).send("No traveller with that id found");
	} else {
		const {error} = validateTraveller(req.body);
		if (error) {
		res.status(400).send({"msg":"Unable to update traveller", "error":error.details[0].message})
	} else {
		traveller.title = req.body.title;
		console.log("total travelers", travellers);
		res.status(200).send({"msg":"Traveller added succesfully"})
	}
	}
})

app.delete('/api/deleteTraveller/:id',(req, res) => {
	const travellerIndex = travellers.findIndex(traveller => traveller.id == req.params.id);
	if (travellerIndex < 0) {
		res.status(404).send("No traveller with that id found");
	} else {
		travellers.splice(travellerIndex, 1);
		console.log("total travelers", travellers);
		res.status(200).send("Traveller Deleted");
	}
})

function validateTraveller(traveller) {
	const schema = Joi.object({
		title: Joi.string().min(3).required(),
		// id:Joi.number()
	})
	return schema.validate(traveller);
}

app.listen(configurations.port, function(err, res) {
	if (!err) {
		console.log("server started at ",configurations.port);
	} else {
		console.log("error in starting the server");
	}
})