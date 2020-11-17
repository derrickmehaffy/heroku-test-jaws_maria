const { parseUri } = require('mysql-parse')

const config = parseUri(process.env.JAWSDB_MARIA_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
      },
      options: {},
    },
  },
});
