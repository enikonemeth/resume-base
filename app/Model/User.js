'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  cvs () {
    return this.hasMany('App/Model/Cv')
  }

}

module.exports = User
