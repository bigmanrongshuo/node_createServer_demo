const mySql = require('mysql')


function createConnect () {
  return mySql.createConnection({
    host: "127.0.0.1",
    port: '3306',
    user: 'root',
    database: 'my_blog',
    password: '123'
  })
}

module.exports = {
  createConnect,
}