'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const UserModel = use('App/Models/User')

class UserSeeder {
  async run () {
    await UserModel.create({
      username: 'MJV',
      email: 'test@mjv.com.br',
      password: '123456'
    })
  }
}

module.exports = UserSeeder
