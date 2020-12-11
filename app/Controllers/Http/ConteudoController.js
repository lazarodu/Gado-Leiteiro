'use strict'

/* @typedef {import('@adonisjs/framework/src/Request')} Request */
/* @typedef {import('@adonisjs/framework/src/Response')} Response */
/* @typedef {import('@adonisjs/framework/src/View')} View */
const Conteudo = use ('App/Models/Conteudo')

/* Resourceful controller for interacting with conteudos
 */
class ConteudoController {
  /*
   * Show a list of all conteudos.
   * GET conteudos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const conts = await Conteudo.all()
    return conts
  }

  /*
   * Display a single conteudo.
   * GET conteudos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const conts = await Conteudo.findOrFail(params.id)
    return conts
  }

}

module.exports = ConteudoController