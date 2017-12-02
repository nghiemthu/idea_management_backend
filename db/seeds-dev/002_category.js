const simpleFixtures = require('simple-fixtures');
const faker = require('faker/locale/en');

const fields = {
  title: faker.lorem.sentence,
  budgetLimit: faker.random.number({ min: 0, max: 2000 }),
  isActive: faker.random.number({ min: 0, max: 2 }) >= 1, 
};

exports.seed = knex =>
  knex.batchInsert(
    'category',
    simpleFixtures.generateFixtures(fields, 50),
	);
