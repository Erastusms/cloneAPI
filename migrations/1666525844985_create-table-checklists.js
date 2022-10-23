/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable("checklists", {
      id: {
        type: "VARCHAR(50)",
        primaryKey: true,
        notNull: true,
      },
      name: {
        type: "VARCHAR(50)",
        unique: true,
        notNull: true,
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
    pgm.dropTable("checklists");
  };
