module.exports = function (sequelize, Datatypes) {

    const producao = sequelize.define('Producao',
        {
            id_usuario: Datatypes.INTEGER,
            qtd_neg: Datatypes.DOUBLE,
            qtd_mp: Datatypes.DOUBLE,
            data_producao: Datatypes.DATE,
            turno: Datatypes.STRING(10),
            nunota: Datatypes.INTEGER,
            id_producao: {
                type: Datatypes.INTEGER,
                primaryKey: true
            }
        }, { freezeTableName: true });
    return producao;
}