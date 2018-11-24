let ItemServices = function (model) {

    const sequelize = require('sequelize');
    let _ = require('lodash');

    this.getQtdItemNegociado = function (idItem) {
        return model.item.findAll({
            attributes: ['qtd_neg', 'id_item'],
            where: {
                id_item: idItem
            }
        });
    }
    this.getOrigemItem = function (idItem) {
        return model.item.findAll({
            attributes: ['origem', 'id_item'],
            where: {
                id_item: idItem
            }
        });
    }
    this.getDataLancamentoItem = function (idProduto) {
        return model.item.findAll({
            attributes: ['data_lancamento', 'id_item'],
            where: {
                id_item: idProduto
            }
        });
    }
    this.getAllItens = function () {
        return model.item.findAll({
            attributes: ['id_item', 'qtd_neg', 'ent_sai', 'data_lancamento', 'origem'],
        });
    }
}
module.exports = ItemServices;