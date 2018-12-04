var ItemServices = function (model) {

    var sequelize = require('sequelize');
    var _ = require('lodash');

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
    this.getProducaoItemByMes = function (ano, mes) {    
       
       model.item.findAll({
            attributes: ['qtd_neg', 'id_produto', 'origem', 'data_lancamento'],
            where: {
                data_lancamento: {
                    [sequelize.Op.and]: [
                        sequelize.where(sequelize.fn('YEAR', sequelize.col('data_lancamento')), ano),
                        sequelize.where(sequelize.fn('MONTH', sequelize.col('data_lancamento')), mes),
                     ]
                }
            , origem:'P'}
        }); 
    }

    this.getEstoqueMP = function(){
        return model.item.findAll({
            attributes: ['qtd_neg', 'ent_sai'], 
            where:{id_produto:1}
        });
    }

    /*Lista de produtos produzidos no mes 
    {tipoProduto: ""String"", nome: ""string"", mes: ""Int"", qnt: ""Double""}
*/
}
module.exports = ItemServices;