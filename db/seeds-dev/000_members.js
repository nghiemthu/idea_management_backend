const simpleFixtures = require('simple-fixtures');
const faker = require('faker/locale/en');

const fields = {
  email: faker.internet.email,
  username: faker.internet.userName,
};

exports.seed = knex =>
  knex.batchInsert(
    'members',
    simpleFixtures.generateFixtures(fields, 50),
  );
