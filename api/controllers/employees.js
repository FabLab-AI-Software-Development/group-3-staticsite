const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createEmployee = async (req, res) => {
    try {
      const { name, role, companyId } = req.body;

      await prisma.employee.create({
        data: {name, role, companyId},
      });
      return res.status(200).json({
        message: "Employee has been added.",
      });
    } catch (error) {
      return res.status(500).json(error.message || "There was a server error.");
    }
  };

  module.exports = { createEmployee };