let ProducaoServices = function (model) {

    const sequelize = require('sequelize');
    let _ = require('lodash');

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
}
module.exports = ProducaoServices;