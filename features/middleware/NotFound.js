// function that represent both the request and the response

const NotFound = (req, res)=>{
    return res.status(404).send('Not found');
}

module.exports = NotFound;