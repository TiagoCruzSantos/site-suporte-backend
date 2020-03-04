
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', (table) => {
    table.increments('id').primary()
    table.specificType("nome", "varchar").notNullable()
    table.specificType("email", "varchar").notNullable().unique()
    table.specificType("senha", "varchar").notNullable()
    table.specificType("tipo", "varchar").notNullable().defaultTo("SUP")
  }).raw(`alter table \"usuarios\" add constraint \"usuarios_tipo_check\" check (tipo='SUP' or tipo='LAR' or tipo='PROF'); insert into \"usuarios\" (nome, email, senha, tipo) values (\'lar\', \'lar\', \'$2b$12$Lsj0OZn28e5yz4zf87EiLuUIMO2KtJIJQR20/3U5h9l8sBSzWYVL2\', \'LAR\')`)
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios')
};
