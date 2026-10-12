import express from "express";
const app = express();
// falta instalar el plugins para jsdoc
// ya que no viene instalado por defecto.
// buscar en internet la dependencia e instalarlo
// usando el comando npm install <nombre-plugin>
/**
 * @module api
 */

/**
 * Index Route
 * @name index
 * @path {GET} /
 * @description Get a simple greeting message from the API.
 */
app.get("/", (req, res) => res.send("Hello from the API!"));


/**
 *  Index Route
 * @name users
 * @path {POST} /users
 * @description Post a simple greeting message from the API
 */
app.post('/users', (req, res) => res.send('Hello World!'));

/**
 * Index Route
 * @name products
 * @path {DELETE} /products
 * @description Delete a simple message from the API
 */
app.delete('/products', (req, res) => res.send('Hello World!'));

/**
 * Index Route
 * @name signin
 * @path {PUT} /signin
 * @description Put a simple greeting message from the API.
 */
app.put('/signin', (req, res) => res.send('Hello World!'));
