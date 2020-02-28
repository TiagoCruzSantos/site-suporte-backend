
exports.up = function(knex) {
  return knex.schema.createTable('horarios', table => {
    table.integer("sup_id").references("usuarios.id")
    table.integer("dia").notNullable()
    table.integer("hora").notNullable()
    table.specificType("tipo", "varchar").notNullable().defaultTo("SUP")
  }).raw(`alter table \"horarios\" add constraint \"horarios_dia_check check\" check (dia>=0 and dia<=5); alter table \"horarios\" add constraint \"horarios_hora_check check\" check (hora>=0 and hora<=12);`)
};

exports.down = function(knex) {
  return knex.schema.dropTable("horarios")
};
