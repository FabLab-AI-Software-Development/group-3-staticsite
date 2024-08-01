const express = require("express")
const router = express.Router()
const {createEmployee, deleteEmployee, getEmployees, updateEmployee, getEmployee}  = require("../controllers/employees")

router.post("/hire",createEmployee)
router.get("/",getEmployees)
router.get("/:id",getEmployee)
router.delete("/:id",deleteEmployee)
router.post("/:id",updateEmployee)

module.exports = router