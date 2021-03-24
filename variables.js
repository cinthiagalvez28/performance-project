'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const faker = require('faker');

function generateRandomData(taskContext, events, done) {
  // generate data with Faker:
  const randomContent = faker.commerce.productMaterial();
  const randomDueString = faker.date.weekday();

  // add variables to task's context:
  taskContext.vars.randomContent = randomContent;
  taskContext.vars.randomDueString = randomDueString;

  // continue with executing the scenario:
  return done();
}
