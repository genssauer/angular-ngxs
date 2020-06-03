'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const CategoryModel = use('App/Models/Category')

class CategorySeeder {
  async run () {
    await CategoryModel.create({
      title: 'Hardware',
      description: 'Hardware',
      status: true
    })

    await CategoryModel.create({
      title: 'Smartphones',
      description: 'Smartphones',
      status: true
    })

    await CategoryModel.create({
      title: 'Periféricos',
      description: 'Periféricos',
      status: true
    })
  }
}

module.exports = CategorySeeder
