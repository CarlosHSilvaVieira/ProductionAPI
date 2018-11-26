require('dotenv').config()
var Conector = require('./BackEnd/Banco/Conector');
var Sequelize = require('sequelize');
var Model = require('./BackEnd/Banco/Models');
var AppRouter = require('./BackEnd/Rotas/AppRouter');

var model = new Model(Conector, Sequelize.DataTypes);
var appRouter = new AppRouter(model);