const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || '172.30.222.163',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'express_rest_api',
    password: env.DB_PASSWORD || 'express',
    database: env.DB_NAME || 'express_rest_api',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;