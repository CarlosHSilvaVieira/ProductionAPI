module.exports = function (sequelize, Datatypes) {

    var producao = sequelize.define('Producao',
        {
            id_usuario: Datatypes.INTEGER,
            qtd_neg: Datatypes.DOUBLE,
            qtd_mp: Datatypes.DOUBLE,
            data_producao: Datatypes.DATE,
            turno: Datatypes.STRING(10),
            mes: Datatypes.STRING(10),
            
            id_producao: {
                type: Datatypes.INTEGER,
                primaryKey: true
            },
            id_qualidade: Datatypes.INTEGER
        }, { freezeTableName: true });
    return producao;
}