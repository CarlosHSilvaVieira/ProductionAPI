var NotasServices = function (model) {

    var sequelize = require('sequelize');
    var _ = require('lodash');

    this.getAllNotas = function () {
        return model.cabecalho.findAll({
            attributes: ['nunota', 'id_usuario', 'tipmov', 'vlr_nota']
        });
    }
    this.getAllNotasByUsuario = function (idUsuario) {
        return model.cabecalho.findAll({
            attributes: ['nunota', 'id_usuario', 'tipmov', 'vlr_nota'],
            where: {
                id_usuario: idUsuario
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
            attributes: ['nunota', 'id_usuario', 'vlr_nota'],
            where: {
                tipmov: tipoMovi
            }
        });
    }
}
module.exports = NotasServices;