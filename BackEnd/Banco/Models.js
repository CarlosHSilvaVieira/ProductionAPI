var models = function (Conector, DataTypes) {
    var Cabecalho = require('./tabelas/Cabecalho');
    var Item = require('./tabelas/Item');
    var Producao = require('./tabelas/Producao');
    var Produto = require('./tabelas/Produto');
    var Qualidade = require('./tabelas/Qualidade')
    var Pedidos = require('./tabelas/Pedidos')

    this.cabecalho = new Cabecalho(Conector, DataTypes);
    this.item = new Item(Conector, DataTypes);
    this.producao = new Producao(Conector, DataTypes);
    this.produto = new Produto(Conector, DataTypes);
    this.qualidade = new Qualidade(Conector, DataTypes);
    this.pedidos = new Pedidos(Conector, DataTypes);
}
module.exports = models;