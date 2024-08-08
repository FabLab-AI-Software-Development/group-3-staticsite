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

  const getEmployees = async (req, res) => {
    try {
      const employees = await prisma.employee.findMany({});
      return res.status(200).json(employees);
    } catch (error) {
      return res.status(500).json(error.message || "There was a server error.");
    }
  };

  const getEmployee = async (req, res) => {
    try {
      const employee = await prisma.employee.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });
      return res.status(200).json(employee);
    } catch (error) {
      return res.status(500).json(error.message || "There was a server error.");
    }
  }

  const getEmployeesByCompany = async (req, res) => { 
    try {
      const employees = await prisma.employee.findMany({
        where: {
          companyId: Number(req.params.id),
        },
      });
      return res.status(200).json(employees);
    } catch (error) {
      return res.status(500).json(error.message || "There was a server error.");
    } 
  }

  const deleteEmployee = async (req, res) => {
    try {
      await prisma.employee.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      return res.status(200).json({
        message: "Employee has been deleted.",
      });
    } catch (error) {
      return res.status(500).json(error.message || "There was a server error.");
    }
  };

  const updateEmployee = async (req, res) => {
    try {
      const { name, role, companyId } = req.body;
      await prisma.employee.update({
        where: {
          id: Number(req.params.id),
        },
        data: { name, role, companyId },
      });
      return res.status(200).json({
        message: "Employee has been updated.",
      });
    } catch (error) {
      return res.status(500).json(error.message || "There was a server error.");
    }
  };

  module.exports = { createEmployee, deleteEmployee, getEmployees, getEmployeesByCompany, getEmployee, updateEmployee };