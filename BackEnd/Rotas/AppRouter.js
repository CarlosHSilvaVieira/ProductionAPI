module.exports = function (model) {

    var _ = require('lodash');
    var express = require('express');
    var app = express();
    var port = process.env.PORT || 3000;
    var router = express.Router();
    var path    = require("path");


    var ProducaoServices = require('../Services/ProducaoServices');
    var producaoServices = new ProducaoServices(model);

    var ProdutoServices = require('../Services/ProdutoServices');
    var produtoServices = new ProdutoServices(model);

    var ItemServices = require('../Services/ItemServices');
    var itemServices = new ItemServices(model);

    var NotasServices = require('../Services/NotasServices');
    var notasServices = new NotasServices(model);

    var QualidadeServices = require('../Services/QualidadeServices');
    var qualidadeServices = new QualidadeServices(model);

    var PedidosServices = require('../Services/PedidosServices');
    var pedidosServices = new PedidosServices(model);

    app.use('/', router);
    app.use(express.static(__dirname + '/View'));
    app.listen(port);

    //////API DE PRODUCAO

    router.get('/', function(req, res, next) {
        res.status(200).send(`Production's API running`)
    });

    router.get('/help', (req, res, next) => {
        res.sendFile(path.join(__dirname+'/Views/help.html'));
     })    ;    

     

    // SOLICITAÇÃO VENDAS
    router.get('/getAllQualidade', function (req, res) {
        qualidadeServices.getAllQualidade().then(function(result) {
            res.json(result);
        }); 
    });

    //SOLICITAÇÃO RH

    router.get('/getAllProducaoPorMesTurno', function (req, res) {
        producaoServices.getQuantidadeProducaoAgrupadoPorTurnoMes().then(function (result) {
    
            let response = [];
            for(let i = 0; i < result.length; i++){
                response[i] = result[i].dataValues;
                response[i].nomeProduto = "Coque-Beneficiado";
            }
                        
            res.json(response);
        });
    });

    router.get('/getAllProducaoPorMes', function (req, res) {
        producaoServices.getQuantidadeProducaoAgrupadoPorMes().then(function (result) {

            let response = [];
            for(let i = 0; i < result.length; i++){
                response[i] = result[i].dataValues;
                response[i].nomeProduto = "Coque-Beneficiado";
            }
                        
            res.json(response);
        });
    });

    //SOLICITAÇÃO Financeiro
    router.get('/getAllMateriaPrima', function (req, res) {
        produtoServices.getAllProduto().then(function (result) {
            let response = [];
            for(let i = 0   ; i < result.length; i++){
                if(result[i].descricao !=='COQUE-BENEFICIADO'){

                    response.push(result[i]);
                }
            }
            res.json(response);
        });
    });


    router.get('/getProducaoByUsuario', function (req, res) {
        producaoServices.getProducaoByUsuario(req.query.usuario).then(function (result) {
            res.json(result);
        });
    });

    router.get('/getPedidosFinanceiro', function (req, res) {
        //pedidosServices.teste();
        var reques = require('request');
        var aux;
        reques('http://sigemv.azurewebsites.net/api/Pedidos', function (error, response, body) {
            res.json(JSON.parse(body));
        });
    });

    /*router.get('/getProducaoByData', function (req, res) {
        producaoServices.getProducaoByData(req.query.data).then(function (result) {
            res.json(result);
        });
    });*/


    /*Lista de produtos produzidos no mes
     {tipoProduto: ""String"", nome: ""string"", mes: ""Int"", qnt: ""Double""}
*/

    router.get('/getProducaoByTurno', function (req, res) {
        producaoServices.getProducaoByTurno(req.query.turno).then(function (result) {
            res.json(result);
        });
    });

    router.get('/getProducaoByAno', function (req, res) {
        producaoServices.getProducaoByAno(req.query.ano).then(function (result) {
            res.json(result);
        });
    });

    router.get('/getProducaoByAnoMes', function (req, res) {
        producaoServices.getProducaoByMes(req.query.ano, req.query.mes).then(function (result) {
            res.json(result);
        });
    });

    //////API PRODUTOS
    router.get('/getDescricaoProduto', function (req, res) {
        produtoServices.getDescricaoProduto(req.query.id_produto).then(function (result) {
            res.json(result);
        });
    });

    router.get('/getAllProduto', function (req, res) {
        produtoServices.getAllProduto().then(function (result) {
            res.json(result);
        });
    });

    router.get('/getProdutoById', function (req, res) {
        produtoServices.getProdutoById(req.query.id_produto).then(function (result) {
            res.json(result);
        });
    });

    ///////API ITENS

    router.get('/getQtdItemNegociado', function (req, res) {
        itemServices.getQtdItemNegociado(req.query.id_item).then(function (result) {
            res.json(result);
        });
    });

    /*router.get('/getFluxoItem', function(req, res) {
        itemServices.getFluxoItem(req.query.id_item).then(function (result) {
            res.json(result);
        });
    });*/

    router.get('/getOrigemItem', function (req, res) {
        itemServices.getOrigemItem(req.query.id_item).then(function (result) {
            res.json(result);
        });
    });

    router.get('/getDataLancamentoItem', function (req, res) {
        itemServices.getDataLancamentoItem(req.query.id_item).then(function (result) {
            res.json(result);
        });
    });

    router.get('/getAllItens', function (req, res) {
        itemServices.getAllItens().then(function (result) {
            res.json(result);
        });
    });

    //Api que apresenta o estoque atual de materia prima
    router.get('/getEstoqueMP', function (req, res) {
        itemServices.getEstoqueMP().then(function (result) {
            let response = [];
            let aux =0;
            for(let i = 0; i < result.length; i++){
                response[i] = result[i].dataValues;
                aux+=(response[i].qtd_neg * response[i].ent_sai) ;
                console.log(aux);
            }
            res.json(aux);
        });
    });


    

     router.get('/getProducaoItemByMes', function (req, res) {
        itemServices.getProducaoItemByMes(req.query.ano, req.query.mes).then(function (result) {
            res.json(result);
        });
    });


///////////API PEDIDOS  

router.get('/getAllPedidos', function (req, res) {
        pedidosServices.getAllPedidos().then(function (result) {
            res.json(result);
        });
    });



    //////API NOTAS

    router.get('/getAllNotas', function (req, res) {
        notasServices.getAllNotas().then(function (result) {
            res.json(result);
        });
    });

    router.get('/getNotasByUsuario', function (req, res) {
        notasServices.getAllNotasByUsuario(req.query.cod_user).then(function (result) {
            res.json(result);
        });
    });

    router.get('/getAllValoresNotas', function (req, res) {
        notasServices.getAllValoresNotas().then(function (result) {
            res.json(result);
        });
    });

    router.get('/getNotasByTipoMovimentacao', function (req, res) {
        notasServices.getNotasByTipoMovimentacao(req.query.tipMov).then(function(result) {
            res.json(result);
        }); 
    });



    ///API PEDIDOS
    router.post('/postPedidos', function (req, res) {
        pedidosServices.postPedidos(req.body.IdPedido,req.body.quantidade, req.body.dataPedido).then(function(result) {
            res.json(result);
        }); 
    });
}