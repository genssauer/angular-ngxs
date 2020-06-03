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
const CategoryModel = use('App/Models/Category')
const File = use('App/Models/File')
const ProductModel = use('App/Models/Product')

class UserSeeder {
  async run () {
    await UserModel.create({
      username: 'MJV',
      email: 'test@mjv.com.br',
      password: '123456'
    })

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

    await File.create({
      file: "1591213672537.jpeg",
      name: "1591213672537.jpg",
      type: "image",
      subtype: "jpeg"
    })

    await File.create({
      file: "1591214021551.jpeg",
      name: "1591214021551.jpg",
      type: "image",
      subtype: "jpeg"
    })

    await File.create({
      file: "1591214082018.jpeg",
      name: "1591214082018.jpg",
      type: "image",
      subtype: "jpeg"
    })

    await ProductModel.create({
      category_id: 2,
      file_id: 1,
      title: 'Smartphone Samsung Galaxy A51, 128GB, 48MP, Tela 6.5´, TV Digital, Preto - SM-A515FZKBZTO',
      description: '<p>Smartphone Samsung Galaxy A51</p>',
      price: 1690,
      status: true
    })

    await ProductModel.create({
      category_id: 1,
      file_id: 2,
      title: 'Memória Adata XPG Spectrix D41 TUF, RGB, 8GB, 3000MHz, DDR4, CL16 - AX4U300038G16-SB41',
      description: '<p>Memória Adata XPG Spectrix</p>',
      price: 390,
      status: true
    })

    await ProductModel.create({
      category_id: 3,
      file_id: 3,
      title: 'Mouse Gamer Redragon 10000DPI Chroma Cobra M711',
      description: '<p>Mouse Gamer Redragon 10000DPI Chroma Cobra M711</p>',
      price: 149,
      status: true
    })
  }
}

module.exports = UserSeeder
