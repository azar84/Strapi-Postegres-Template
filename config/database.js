// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", process.env.PGHOST),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", process.env.PGDATABASE),
      user: env("DATABASE_USERNAME", process.env.PGUSER),
      password: env("DATABASE_PASSWORD", process.env.PGPASSWORD),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});
