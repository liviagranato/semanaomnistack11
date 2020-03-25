const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Métodos HTTP:
 * 
 * GET: buscar/listar uma informação do back
 * POST: criar uma informação no back
 * PUT: alterar uma informação no back
 * DELETE: deletar uma informação no back
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
 * BANCOS
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where
 */



app.listen(3333);
