let models = function (Conector, DataTypes) {
    const Cabecalho = require('./tabelas/Cabecalho');
    const Item = require('./tabelas/Item');
    const Producao = require('./tabelas/Producao');
    const Produto = require('./tabelas/Produto');
    const Qualidade = require('./tabelas/Qualidade')

    this.cabecalho = new Cabecalho(Conector, DataTypes);
    this.item = new Item(Conector, DataTypes);
    this.producao = new Producao(Conector, DataTypes);
    this.produto = new Produto(Conector, DataTypes);
    this.qualidade = new Qualidade(Conector, DataTypes);
}
module.exports = models;