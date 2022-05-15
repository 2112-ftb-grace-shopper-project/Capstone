const client = require('./client');


module.exports = {
  client,
  ...require("./users"),
  ...require("./seedData.json"),
  ...require("./animals")
};
