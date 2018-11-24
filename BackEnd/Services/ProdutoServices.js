let ProdutoServices = function (model) {

    const sequelize = require('sequelize');
    let _ = require('lodash');

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
            attributes: ['descricao', 'usoprod', 'id_prod']
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