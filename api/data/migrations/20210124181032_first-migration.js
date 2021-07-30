
exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
      users.string('role', 20).notNullable()
    })
    .createTable('classes', (clas) => {
      clas.increments('class_id')
      clas.string('class_name', 200).notNullable()
      clas.string('class_type', 200).notNullable()
      clas.string('start_time', 200).notNullable()
      clas.integer('duration', 3).notNullable()
      clas.string('intensity_level', 50).notNullable()
      clas.string('class_location', 200).notNullable()
      clas.integer('registered', 3).defaultTo(0)
      clas.integer('max_size', 3).defaultTo(0)
      clas.integer('instructor_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('user_classes', (inst_class) => {
      inst_class.increments('inst_class_id')
      inst_class.integer('class_id')
        .unsigned()
        .notNullable()
        .references('class_id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      inst_class.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('user_classes')
  await knex.schema.dropTableIfExists('classes')
  await knex.schema.dropTableIfExists('users')
}
