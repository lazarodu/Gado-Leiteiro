'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConteudoSchema extends Schema {
  up () {
    this.create('conteudos', (table) => {
      table.increments()
      table.string('titulo', 45).notNullable().unique()
      table.string('texto', 200).notNullable().unique()
      table
      .integer("id_user")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('conteudos')
  }
}

module.exports = ConteudoSchema
