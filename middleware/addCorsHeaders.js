const addCorsHeaders = (req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if(req.method === "OPTIONS"){
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return(res.status(200).json)
  }
  next();
}

module.exports = addCorsHeaders;