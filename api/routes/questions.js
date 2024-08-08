const express = require("express")
const router = express.Router()
const {createQuestion, getQuestion, getQuestions, getQuestionsByEmployee, updateQuestion, deleteQuestion}  = require("../controllers/questions")

router.post("/",createQuestion)
router.get("/",getQuestions)
router.get("/:id",getQuestion)
router.get("/employee/:id",getQuestionsByEmployee)
router.delete("/:id",deleteQuestion)
router.post("/:id",updateQuestion)

module.exports = router