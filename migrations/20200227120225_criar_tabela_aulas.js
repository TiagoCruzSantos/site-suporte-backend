
exports.up = function(knex) {
  return knex.schema.createTable('aulas', (table) => {
    table.increments("id").primary()
    table.specificType("nome", "varchar").notNullable()
    table.specificType("data", "tstzrange").notNullable()
    table.integer("prof_id").references("usuarios.id").notNullable()
    table.integer("cst_id").references("usuarios.id").notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("aulas")
};
