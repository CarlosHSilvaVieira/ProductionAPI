module.exports = function (sequelize, Datatypes) {

    const cabecalho = sequelize.define('Cabecalho',
        {
            nunota: {
                type: Datatypes.INTEGER,
                primaryKey: true
            },
            cod_user: Datatypes.INTEGER,
            tipmov: Datatypes.STRING(1),
            vlr_nota: Datatypes.DOUBLE
        }, { freezeTableName: true });
    return cabecalho;
}