module.exports = require(req, res, next){
  res.header('Acess-Control-Allow-Origin', '*')
  res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTION, PUT, PATCHE, DELETE')
  res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}
