var ProducaoServices = function (model) {

    var sequelize = require('sequelize');
    var _ = require('lodash');

    this.getQuantidadeProducaoAgrupadoPorTurnoMes = function () {
        return model.producao.findAll({
            attributes: [[sequelize.fn('sum',sequelize.col('qtd_neg')), 'quantidade'], 'mes', 'turno'],
            group: ['mes', 'turno'],
        });
    };

    this.getQuantidadeProducaoAgrupadoPorMes = function () {
        return model.producao.findAll({
            attributes: [[sequelize.fn('sum',sequelize.col('qtd_neg')), 'quantidade'], 'mes'],
            group: ['mes'],
        });
    };

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
            attributes: ['qtd_neg', 'data_producao'],
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


/*http://localhost:3000/getProducaoByMesTurno?ano=2018,mes=11*/