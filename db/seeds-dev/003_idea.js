const simpleFixtures = require('simple-fixtures');
const faker = require('faker/locale/en');

const fields = {
  title: faker.lorem.sentence,
  description: faker.lorem.sentence(2),
  budget: faker.random.number({ min: 0, max: 2000 }), 
  isReadyForComments: faker.random.number({ min: 0, max: 2 }) >= 1,
  peopleNeeded: faker.random.number({ min: 1, max: 10 }),
  creationDate: new Date(),
  lastModified: new Date(),
  categoryId: faker.random.number({ min: 0, max: 20 }),
};

exports.seed = knex =>
  knex.batchInsert(
    'idea',
    simpleFixtures.generateFixtures(fields, 50),
  );
