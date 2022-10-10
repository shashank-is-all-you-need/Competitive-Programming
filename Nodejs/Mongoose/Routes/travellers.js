const express = require('express');
const router = express.Router();

const TravellerModel = require('../Models/travellersModel');

router.get('/getTravellers',(req,res) => {
	TravellerModel.findOne({}, (error, data) => { 
		if(error) {
			res.status(400).send({"msg":"error retrieving details","error":error});
		} else {
			res.status(200).send({"msg":"Data sent","data":data});
		}
	})
});

router.get('/getTraveller',(req, res) => {
	TravellerModel.findOne(
		{_id:req.body._id},
		function(error,data) {
			if(error) {
			res.status(400).send({"msg":"error Getting traveller details","error":error});
		} else {
			res.status(200).send({"msg":"traveller data sent","data":data});
		}
	})
})

router.post('/addTraveller',(req,res) => {
	console.log("req.body",req.body);
	let objectToInsert = req.body;
	TravellerModel.create(objectToInsert, (error, data) => { 
		if(error) {
			res.status(400).send({"msg":"error addding traveller details","error":error});
		} else {
			res.status(200).send({"msg":"traveller data addded","data":data});
		}
	})
});

router.put('/updateTraveller',(req, res) => {
	TravellerModel.updateOne(
		{_id:req.body._id},
		req.body,function(error,data) {
			if(error) {
			res.status(400).send({"msg":"error updating traveller details","error":error});
		} else {
			res.status(200).send({"msg":"traveller data updated","data":data});
		}
	})
})

router.delete('/deleteTraveller',(req, res) => {
	TravellerModel.deleteOne(
		{_id:req.body._id},
		function(error,data) {
			if(error) {
			res.status(400).send({"msg":"error deleting traveller details","error":error});
		} else {
			res.status(200).send({"msg":"traveller data deleted","data":data});
		}
	})
})

module.exports = router;