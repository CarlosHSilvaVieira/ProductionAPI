var ProducaoServices = function (model) {

    var sequelize = require('sequelize');
    var _ = require('lodash');

    this.getProducaoByUsuario = function (usuario) {
        return model.producao.findAll({
            attributes: ['qtd_neg'],
            where: {
                id_usuario: usuario
            }
        });
    }
    this.getProducaoByAno = function (ano) {
        return model.producao.findAll({
            attributes: ['qtd_neg'],
            where: {
                data_producao: sequelize.where(sequelize.fn('YEAR', sequelize.col('data_producao')), ano)
            }
        });
    }
    this.getProducaoByTurno = function (turno) {
        return model.producao.findAll({
            attributes: ['qtd_neg'],
            where: {
                turno: turno
            }
        });
    }
    this.getProducaoByMes = function (ano, mes) {
        return model.producao.findAll({
            attributes: ['qtd_neg'],
            where: {
                data_producao: {
                    [sequelize.Op.and]: [
                        sequelize.where(sequelize.fn('YEAR', sequelize.col('data_producao')), ano),
                        sequelize.where(sequelize.fn('MONTH', sequelize.col('data_producao')), mes),
                    ]
                }
            }
        });
    }

    /*Lista de produtos produzidos no mes 
    {tipoProduto: ""String"", nome: ""string"", mes: ""Int"", qnt: ""Double""}
*/
}
module.exports = ProducaoServices;