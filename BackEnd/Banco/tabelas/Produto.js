module.exports = function (sequelize, Datatypes) {

    const produto = sequelize.define('Produto',
        {
            id_prod: {
                type: Datatypes.INTEGER,
                primaryKey: true
            },
            descricao: Datatypes.STRING(25),
            usoprod: Datatypes.STRING(3)
        }, { freezeTableName: true });
    return produto;
}