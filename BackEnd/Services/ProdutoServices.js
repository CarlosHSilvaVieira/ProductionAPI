var ProdutoServices = function (model) {

    var sequelize = require('sequelize');
    var _ = require('lodash');

    this.getDescricaoProduto = function (idProduto) {
        return model.produto.findAll({
            attributes: ['descricao'],
            where: {
                id_prod: idProduto
            }
        });
    }
    this.getAllProdutos = function () {
        return model.produto.findAll({
            attributes: ['descricao', 'usoprod', 'id_produto']
        });
    }
    this.getProdutoById = function (idProduto) {
        return model.produto.findAll({
            attributes: ['descricao', 'usoprod'],
            where: {
                id_prod: idProduto
            }
        });
    }
}
module.exports = ProdutoServices;