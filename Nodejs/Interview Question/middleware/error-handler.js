module.exports = errorHandler;
function errorHandler(err, req, res, next) {

	// Custom Application errors which are thrown
	if(typeof(err) === 'string') {
        return res.status(400).json({ message: err });
	}

	// All Mongoose related validation errors
	if(err.name === 'ValidationError') {
		return res.status(400).json({ message: err.message });
	}

	// jwt authentication error
	if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ message: 'Invalid Token' });
    }

    // default to 500 server error
    return res.status(500).json({ message: err.message });
}