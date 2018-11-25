module.exports = function (sequelize, Datatypes) {

    const cabecalho = sequelize.define('Cabecalho',
        {
            nunota: {
                type: Datatypes.INTEGER,
                primaryKey: true
            },
            id_usuario: Datatypes.INTEGER,
            tipmov: Datatypes.STRING(1),
            vlr_nota: Datatypes.DOUBLE
        }, { freezeTableName: true });
    return cabecalho;
}