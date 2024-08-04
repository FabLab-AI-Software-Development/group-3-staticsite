const express = require("express")
const router = express.Router()
const {createCompany, getCompany, getCompanies, updateCompany, deleteCompany}  = require("../controllers/companies")

router.post("/create",createCompany)
router.get("/",getCompanies)
router.get("/:id",getCompany)
router.post("/:id",updateCompany)
router.delete("/:id",deleteCompany)

module.exports = router