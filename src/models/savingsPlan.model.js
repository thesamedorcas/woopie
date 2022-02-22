const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const freq = ['daily', 'weekly', 'monthly'];

const savingsPlanSchema = mongoose.Schema(
  {
    isAutosave: {
      type: Boolean,
      default: false,
      required: true,
    },
    user: {
      type: mongoose.ObjectId,
      private: true,
      required: true,
    },
    frequency: {
      type: String,
      enum: freq,
      lowercase: true,
    },
    start_date: {
      type: Date,
      default: Date.now,
    },
    maturity_date: {
      type: Date,
      required: true,
      default: 'user',
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
savingsPlanSchema.plugin(toJSON);
savingsPlanSchema.plugin(paginate);

/**
 * @typedef savingsPlan
 */
const savingsPlan = mongoose.model('Savings', savingsPlanSchema);

module.exports = savingsPlan;
