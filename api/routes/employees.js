const express = require("express")
const router = express.Router()
const {createEmployee}  = require("../controllers/employees")

router.post("/hire",createEmployee)

module.exports = router