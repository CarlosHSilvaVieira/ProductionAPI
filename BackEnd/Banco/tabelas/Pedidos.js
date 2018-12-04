module.exports = function (sequelize, Datatypes) {

    var pedidos = sequelize.define('Pedidos',
        {
            id_pedido: {
                type: Datatypes.INTEGER,
                primaryKey: true
            },
            gtd_neg: Datatypes.DOUBLE,
            data_lancamento: Datatypes.DATE
        }, { freezeTableName: true });
    return pedidos;
}