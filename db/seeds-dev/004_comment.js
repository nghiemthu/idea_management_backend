const simpleFixtures = require('simple-fixtures');
const faker = require('faker/locale/en');

const fields = {
  ideaId: faker.random.number({ min: 0, max: 20 }),
  timestamp: new Date(),
  memberId: faker.random.number({ min: 0, max: 20 }), 
  commentLine: faker.lorem.sentence,
};

exports.seed = knex =>
  knex.batchInsert(
    'comment',
    simpleFixtures.generateFixtures(fields, 50),
  );
