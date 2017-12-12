const config = {
  db: {
    // Common config for all db environments
    debug: true, // Toggle db debugging
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      user: 'postgres',
      password: '',
      database: 'postgres://iumbojeihyvvrr:51ec8c86ec8fa6c8827e1c30982c263fbfd684e5dd27b37ab926214d7c9aa024@ec2-54-243-39-245.compute-1.amazonaws.com:5432/d8680iv0mr6sdb',
      ssl: false,
    },
    pool: {
      min: 1,
      max: 1,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations',
    },
  },
};

export default {
  ...config,
  db: {
    // Developer's local machine
    development: {
      ...config.db,

      seeds: {
        directory: 'seeds-dev',
      },
    },

    // Production environment
    production: {
      ...config.db,

      seeds: {
        directory: 'seeds-dev',
      },
    },
  },
};
