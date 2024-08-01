const express = require("express")
const router = express.Router()
const {query}  = require("../controllers/openai")

router.post("/query",query.postQuery)

module.exports = router