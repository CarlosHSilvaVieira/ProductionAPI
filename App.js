const Conector = require('./BackEnd/Banco/Conector');
const Sequelize = require('sequelize');
const Model = require('./BackEnd/Banco/Models');
const AppRouter = require('./BackEnd/Rotas/AppRouter');

let model = new Model(Conector, Sequelize.DataTypes);
let appRouter = new AppRouter(model);