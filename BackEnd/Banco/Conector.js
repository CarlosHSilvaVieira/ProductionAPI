var Sequelize = require('sequelize');

var sequelize = new Sequelize('mydb', 'root', '123456',
    {
        host: 'localhost',
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