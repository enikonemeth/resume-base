'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
  cvs () {
    return this.hasMany('App/Model/Cv')
  }
}

module.exports = Category
