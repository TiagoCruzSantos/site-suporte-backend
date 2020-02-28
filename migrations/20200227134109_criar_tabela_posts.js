
exports.up = function(knex) {
  return knex.schema.createTable("posts", table => {
      table.integer("id").primary()
      table.specificType("titulo", "text").notNullable()
      table.text("conteudo")
      table.timestamp('postado_em').defaultTo(knex.fn.now())
      table.integer("postado_por").references("usuarios.id")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("posts")
};
