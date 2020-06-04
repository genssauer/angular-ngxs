'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('passwords', 'ForgotPasswordController.store').validator('ForgotPassword')
Route.put('passwords', 'ForgotPasswordController.update').validator('ResetPassword')

Route.get('files/:id', 'FileController.show')

Route.group(() => {
  Route.post('files', 'FileController.store')
  
  Route.post('categories', 'CategoryController.store').validator('Category')
  Route.patch('categories/:id', 'CategoryController.update').validator('Category')
  Route.delete('categories/:id', 'CategoryController.destroy')

  Route.post('products', 'ProductController.store').validator('Product')
  Route.patch('products/:id', 'ProductController.update').validator('Product')
  Route.delete('products/:id', 'ProductController.destroy')

  Route.resource('users', 'UserController').apiOnly().validator(new Map([
    [
      ['users.store'],
      ['User']
    ]
  ]))
}).middleware(['auth'])

Route.get('categories', 'CategoryController.index')
Route.get('categories/:id', 'CategoryController.show')

Route.get('products', 'ProductController.index')
Route.get('products/:id', 'ProductController.show')