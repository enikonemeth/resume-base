'use strict'

const Lucid = use('Lucid')

class Rating extends Lucid {
  cvs () {
    return this.belongsTo('App/Model/Cv')
  }
}

module.exports = Rating
