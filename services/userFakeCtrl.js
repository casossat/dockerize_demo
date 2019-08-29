const db = require('../models');

module.exports = {
  async findAllUserFake(req, res, next) {
    let status = 500;
    let dataSend = {};
    try {
      let data = await db.model.findAll({})

      console.log(data)

      if (data.length > 0) {
        status = 200;
      } else {
        status = 401;
      }

      dataSend = data;
    } catch (error) {
      console.log(error)
      dataSend = {};
    }

    res.status(status).send(dataSend);
  }
};