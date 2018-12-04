var PedidosServices = function(model){

var sequelize = require('sequelize');
   var _ = require('lodash');

this.getAllPedidos = function(){
        return model.pedidos.findAll({
            attributes: ['id_pedido','qtd_neg',  'data_lancamento']            
        });
    }

}
module.exports = PedidosServices;