'use strict'

const Lucid = use('Lucid')

class Cv extends Lucid {
  category () {
    return this.belongsTo('App/Model/Category')
  }

  user () {
    return this.belongsTo('App/Model/User')
  }

  ratings () {
    return this.hasMany('App/Model/Rating')
  }
}

module.exports = Cv