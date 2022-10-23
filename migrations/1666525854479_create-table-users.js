/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
      notNull: true,
    },
    username: {
      type: "VARCHAR(50)",
      unique: true,
      notNull: true,
    },
    email: {
      type: "VARCHAR(255)",
      notNull: true,
    },
    password: {
      type: "VARCHAR(255)",
      notNull: true,
    },
    token: {
      type: "VARCHAR(255)",
    },
    last_login: {
      type: "timestamp",
    },
    created_at: {
      type: "timestamp",
      default: pgm.func("current_timestamp"),
    },
    updated_at: {
      type: "timestamp",
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("users");
};
