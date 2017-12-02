const simpleFixtures = require('simple-fixtures');
const faker = require('faker/locale/en');

const fields = {
  memberId: faker.random.number({ min: 0, max: 20 }),
  ideaId: faker.random.number({ min: 0, max: 20 }),
};

exports.seed = knex =>
  knex.batchInsert(
    'memberIdea',
    simpleFixtures.generateFixtures(fields, 50),
  );
