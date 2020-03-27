/**
 * Rota / recurso ex: app.get('/users')
 */

 /**
  * Metodos HTTP:
  * 
  * get: buscar/listar uma informação no back-end
  * post: criar uma informação no back-end
  * put: alterar uma informação no back-end
  * delete: deletar uma informação no back-end
  */

  /**
   * Tipo de Parametros:
   * 
   * Query params: Parametros nomeados enviados na rota após o simbolo de "?" (filtros, paginação)
   * Route params: Paramentos utilizados para identificar recursos
   * request body: Corpo da requisição, utilizado para cirar ou alterar recursos.
   */

   /**
    * Banco de dados:
    * 
    * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server.
    * NoSQL: MongoBD, CouchDB, etc.
    */

    /**
     * Driver: Select * From users
     * Query Builder(utiliza JavaScrip): table('users).select('*').where() => usa o Knex
     */

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

