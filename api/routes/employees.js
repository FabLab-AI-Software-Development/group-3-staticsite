const express = require("express")
const router = express.Router()
const {createEmployee, deleteEmployee, getEmployees, updateEmployee, getEmployee, getEmployeesByCompany}  = require("../controllers/employees")

router.post("/",createEmployee)
router.get("/",getEmployees)
router.get("/:id",getEmployee)
router.get("/company/:id",getEmployeesByCompany)
router.delete("/:id",deleteEmployee)
router.post("/:id",updateEmployee)

module.exports = router