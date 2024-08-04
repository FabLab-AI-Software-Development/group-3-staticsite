const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createQuestion = async (req, res) => {  
  try {
    const { request, response, employeeId } = req.body;

    await prisma.question.create({
      data: { request, response, employeeId },
    });
    return res.status(200).json({
      message: "Question has been added.",
    });
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
}

const getQuestions = async (req, res) => {  
  try {
    const questions = await prisma.question.findMany({});
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
}

const getQuestion = async (req, res) => {  
  try {
    const question = await prisma.question.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    return res.status(200).json(question);
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
}   

const deleteQuestion = async (req, res) => {  
  try {
    await prisma.question.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    return res.status(200).json({
      message: "Question has been deleted.",
    });
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
} 

const updateQuestion = async (req, res) => {  
  try {
    const { request, response, employeeId } = req.body;
    await prisma.question.update({
      where: {
        id: Number(req.params.id),
      },
      data: { request, response, employeeId },
    });
    return res.status(200).json({
      message: "Question has been updated.",
    });
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
} 

module.exports = { createQuestion, deleteQuestion, getQuestions, getQuestion, updateQuestion };