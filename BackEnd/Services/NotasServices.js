let NotasServices = function (model) {

    const sequelize = require('sequelize');
    let _ = require('lodash');

    this.getAllNotas = function () {
        return model.cabecalho.findAll({
            attributes: ['nunota', 'cod_user', 'tipmov', 'vlr_nota']
        });
    }
    this.getAllNotasByUsuario = function (idUsuario) {
        return model.cabecalho.findAll({
            attributes: ['nunota', 'cod_user', 'tipmov', 'vlr_nota'],
            where: {
                cod_user: idUsuario
            }
        });
    }
    this.getAllValoresNotas = function () {
        return model.cabecalho.findAll({
            attributes: ['nunota', 'vlr_nota'],
        });
    }
    this.getNotasByTipoMovimentacao = function (tipoMovi) {
        return model.cabecalho.findAll({
            attributes: ['nunota', 'cod_user', 'vlr_nota'],
            where: {
                tipmov: tipoMovi
            }
        });
    }
}
module.exports = NotasServices;