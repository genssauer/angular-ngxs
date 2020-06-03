'use strict'

const Category = use('App/Models/Category')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categories
 */
class CategoryController {
  /**
   * Show a list of all categories.
   * GET categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({
    request,
    response,
    view
  }) {
    const {
      page
    } = request.get()

    const categories = await Category.query().with('user').with('category').paginate(page)

    return categories
  }

  /**
   * Create/save a new category.
   * POST categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({
    request,
    response,
    auth
  }) {
    const data = request.only(['category_id', 'title', 'description', 'status'])

    const category = await Category.create({
      ...data,
      user_id: auth.user.id
    })

    await category.load('category')

    return category
  }

  /**
   * Display a single category.
   * GET categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({
    params,
    request,
    response,
    view
  }) {
    const category = await Category.findOrFail(params.id)

    await category.load('user')
    await category.load('categories')
    await category.load('products')

    return category
  }

  /**
   * Update category details.
   * PUT or PATCH categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({
    params,
    request,
    response
  }) {
    const category = await Category.findOrFail(params.id)
    const data = request.only(['category_id', 'title', 'description', 'status'])

    category.merge(data)

    await category.save()
    await category.load('category')

    return category
  }

  /**
   * Delete a category with id.
   * DELETE categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({
    params,
    request,
    response
  }) {
    const category = await Category.findOrFail(params.id)

    await category.delete()

    return category
  }
}

module.exports = CategoryController
