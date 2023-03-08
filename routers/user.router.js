// const express = require("express");
// const { getUser } = require("../controllers/user.controller");
// const router = express.Router();


// router.post("/post-user", getUser)

// module.exports = router;
const express = require("express");
const { getUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/post-user", getUser)

module.exports = router

