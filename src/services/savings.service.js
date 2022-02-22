const httpStatus = require('http-status');
const { savingsPlan } = require('../models');
const ApiError = require('../utils/ApiError');

const createPlan = async (data) => {
  const plan = await savingsPlan.create(data);
  return plan;
};

module.exports = {
  createPlan,
};
