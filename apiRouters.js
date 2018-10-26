var express = require('express');
var router = express.Router();

router.route("/").get(function (req, res) {
  console.log("This is called");
})

router.route("/log2").get(function (req, res) {
  console.log("Request called:"+req);
  res.send("Done");
})
module.exports = router;
