'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Forum = use ('App/Models/Forum')

/**
 * Resourceful controller for interacting with forums
 */
class ForumController {
  /**
   * Show a list of all forums.
   * GET forums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const forums = await Forum.all()
    return forums 
  }
 
  /**
   * Create/save a new forum.
   * POST forums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const {conteudo, resposta} = request.only(["conteudo", "resposta"])
    const forums = await Forum.create({conteudo, resposta, id_user:auth.user.id})
    return forums
  }

  /**
   * Display a single forum.
   * GET forums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const forums = await Forum.findOrFail(params.id)
    return forums 
  }

  /**
   * Render a form to update an existing forum.
   * GET forums/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update forum details.
   * PUT or PATCH forums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const forums = await Forum.findOrFail(params.id)
    const{conteudo, resposta} = request.only (["conteudo", "resposta"])
    forums.conteudo = conteudo
    forums.resposta = resposta
    await forums.save()
    return forums 
  }

  /**
   * Delete a forum with id.
   * DELETE forums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const forums = await Forum.findOrFail(params.id)
    await forums.delete()
    return forums
  }
}

module.exports = ForumController