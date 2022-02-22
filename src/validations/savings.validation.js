const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createPlan = {
  body: Joi.object().keys({
    isAutosave: Joi.boolean().required(), // must be stirng "true"/"false"
    frequency: Joi.string().valid('daily', 'weekly', 'monthly'),
    start_date: Joi.date().min('now').required(),
    maturity_date: Joi.date().greater(Joi.ref('start_date')).required(),
    amount: Joi.number().min(1000),
  }),
};

const getPlans = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPlan = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updatePlan = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deletePlan = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPlan,
  getPlans,
  getPlan,
  updatePlan,
  deletePlan,
};
