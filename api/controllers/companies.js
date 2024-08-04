const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCompany = async (req, res) => {
  try {
    const { name, industry } = req.body;

    await prisma.company.create({
      data: { name, industry },
    });
    return res.status(200).json({
      message: "Company has been added.",
    });
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
}

const getCompanies = async (req, res) => {  
  try {
    const companies = await prisma.company.findMany({});
    return res.status(200).json(companies);
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
}

const getCompany = async (req, res) => {
  try {
    const company = await prisma.company.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    return res.status(200).json(company);
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
}

const updateCompany = async (req, res) => {
    try {
      const { name, industry } = req.body;
      await prisma.company.update({
        where: {
          id: Number(req.params.id),
        },
        data: { name, industry },
      });
      return res.status(200).json({
        message: "Company has been updated.",
      });
    } catch (error) {
      return res.status(500).json(error.message || "There was a server error.");
    }
}

const deleteCompany = async (req, res) => { 
  try {
    await prisma.company.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    return res.status(200).json({
      message: "Company has been deleted.",
    });
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
}

module.exports = {  createCompany, deleteCompany, getCompanies, getCompany, updateCompany };

