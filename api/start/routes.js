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

  Route.resource('categories', 'CategoryController').apiOnly().validator(new Map([
    [
      ['categories.store'],
      ['Category']
    ]
  ]))
  Route.resource('products', 'ProductController').apiOnly().validator(new Map([
    [
      ['products.store'],
      ['Product']
    ]
  ]))
  Route.resource('users', 'UserController').apiOnly().validator(new Map([
    [
      ['users.store'],
      ['User']
    ]
  ]))
}).middleware(['auth'])