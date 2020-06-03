'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        name: 'title'
      },
      strategy: 'dbIncrement'
    })
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  category () {
    return this.belongsTo('App/Models/Category')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Product
