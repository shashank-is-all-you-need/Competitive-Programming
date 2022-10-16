const express = require('express');
const router = express.Router();

const userService = require('../services/user-service')

router.post('/addTraveller',addTravellerCallBack);
// to record ip address
// https://nodejs.org/dist/latest/docs/api/http.html#http_request_connection

function addTravellerCallBack(req, res, next) {
	console.log("req.body",req.body);
	userService.addTraveller(req.body)
        .then((data) => res.json({"data":data}))
        .catch(err => next(err));
}


module.exports = router;