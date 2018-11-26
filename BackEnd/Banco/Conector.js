var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });
sequelize.authenticate().then(function () {
    console.log("Conectado ao banco");
}).catch(function (err) {
    console.log("Erro: " + err);
});
module.exports = sequelize;