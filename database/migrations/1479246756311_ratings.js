'use strict'

const Schema = use('Schema')

class RatingsTableSchema extends Schema {

  up () {
    this.create('ratings', (table) => {
      table.increments()
      table.string('name', 70).notNullable()
      table.integer('rate').notNullable()
      table.integer('cv_id').unsigned().references('id').inTable('cvs')
      table.timestamps()
    })
  }

  down () {
    this.drop('ratings')
  }

}

module.exports = RatingsTableSchema
