
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', (table) => {
    table.increments('id').primary()
    table.specificType("nome", "varchar").notNullable()
    table.specificType("email", "varchar").notNullable().unique()
    table.specificType("senha", "varchar").notNullable()
    table.specificType("tipo", "varchar").notNullable().defaultTo("SUP")
  }).raw(`alter table \"usuarios\" add constraint \"usuarios_tipo_check\" check (tipo='SUP' or tipo='LAR' or tipo='PROF')`)
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios')
};
