module.exports = function (sequelize, Datatypes) {

    var produto = sequelize.define('Produto',
        {
            id_produto: {
                type: Datatypes.INTEGER,
                primaryKey: true
            },
            descricao: Datatypes.STRING(25),
            usoprod: Datatypes.STRING(3)
        }, { freezeTableName: true });
    return produto;
}