const Conector = require('./BackEnd/Banco/Conector');
const Sequelize = require('sequelize');
const Model = require('./BackEnd/Banco/Models');
const AppRouter = require('./BackEnd/Rotas/AppRouter');

const model = new Model(Conector, Sequelize.DataTypes);
const appRouter = new AppRouter(model);