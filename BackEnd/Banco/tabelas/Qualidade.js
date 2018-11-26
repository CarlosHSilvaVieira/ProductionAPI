module.exports = function (sequelize, Datatypes) {

    var qualidade = sequelize.define('Qualidade',
        {
            id_qualidade: {
                type: Datatypes.INTEGER,
                primaryKey: true
            },
            vlr_qualidade: Datatypes.FLOAT
        }, { freezeTableName: true });
    return qualidade;
}
