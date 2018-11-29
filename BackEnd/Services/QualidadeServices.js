var QualidadeServices = function (model) {

    var sequelize = require('sequelize');
    var _ = require('lodash');

    this.getAllQualidade = function () {
        return model.qualidade.findAll({
            attributes: ['id_qualidade','vlr_qualidade'],
        });
    }
}
module.exports = QualidadeServices;