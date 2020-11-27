'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ForumSchema extends Schema {
  up () {
    this.create('forums', (table) => {
      table.increments()
      table.string('conteudo', 250).notNullable().unique()
      table.string('resposta', 250).notNullable().unique()
      table
      .integer("id_user")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('forums')
  }
}

module.exports = ForumSchema
