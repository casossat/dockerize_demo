var db = {}

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sabios_apps', 'django', 'django', {
  "host": "localhost",
  "dialect": "postgres",
  "define": {
    timestamps: false
  }
})

sequelize.authenticate()
  .then(() => {
    console.log("Conectado")
  })
  .catch(err => {
    console.log("No conectado")
  })

db.sequelize = sequelize
db.Sequelize = Sequelize
db.model = sequelize['import']('./userFake');

module.exports = db