const mongoose = require("mongoose");
const typeUserMap = {};

module.exports = {
  typeUserMap,
  run() {
    (async function connect() {
      try {
        await mongoose.connect("mongodb://localhost:27017/HTVcorpDB", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  },
};
