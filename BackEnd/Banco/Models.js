let models = function (Conector, DataTypes) {
    const Cabecalho = require('./tabelas/Cabecalho');
    const Item = require('./tabelas/Item');
    const Producao = require('./tabelas/Producao');
    const Produto = require('./tabelas/Produto');

    this.cabecalho = new Cabecalho(Conector, DataTypes);
    this.item = new Item(Conector, DataTypes);
    this.producao = new Producao(Conector, DataTypes);
    this.produto = new Produto(Conector, DataTypes);
}
module.exports = models;