const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { savingsService } = require('../services');

const createPlan = catchAsync(async (req, res) => {
  const { id } = req.user;
  const plan = await savingsService.createPlan({ ...req.body, user: id });
  //console.log(plan);
  res.status(httpStatus.CREATED).send(plan);
});

module.exports = {
  createPlan,
};
