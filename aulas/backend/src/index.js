const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

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



app.listen(3333);