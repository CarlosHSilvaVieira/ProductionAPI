module.exports = function (sequelize, Datatypes) {

    const item = sequelize.define('Item',
        {
            id_item: {
                type: Datatypes.INTEGER,
                primaryKey: true
            },
            qtd_neg: Datatypes.DOUBLE,
            ent_sai: Datatypes.INTEGER(1),
            data_lancamento: Datatypes.DATE,
            origem: Datatypes.STRING(5),
            nunota: Datatypes.INTEGER,
            cod_produto: Datatypes.INTEGER,
            id_producao: Datatypes.INTEGER
        },{ freezeTableName: true });
    return item;
}