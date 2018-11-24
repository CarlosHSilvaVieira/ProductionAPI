const Sequelize = require('sequelize');

var sequelize = new Sequelize('INSERIR O NOME DO BANCO', 'INSERIR O USUARIO DO BANCO', 'INSERIR A SENHA DO USUARIO',
    {
        host: 'INSERIR A URL DO BANCO',
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