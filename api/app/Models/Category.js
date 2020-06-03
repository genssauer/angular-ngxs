'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
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

  categories () {
    return this.hasMany('App/Models/Category')
  }

  products () {
    return this.hasMany('App/Models/Product')
  }
}

module.exports = Category
