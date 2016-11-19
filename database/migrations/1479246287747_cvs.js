'use strict'

const Schema = use('Schema')

class CvsTableSchema extends Schema {

  up () {
    this.create('cvs', (table) => {
      table.increments()
      table.string('name', 70).notNullable()
      table.integer('age').notNullable()
      table.text('education')
      table.text('about')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('cvs')
  }

}

module.exports = CvsTableSchema
