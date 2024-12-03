var Product = require('../models/products');

var controller = {

    // Metodo para guardar la informacion de un product en la db
    saveProduct: async function(req, res){
        var product = new Product();
        var parametros = req.body;

        product.userName = parametros.userName;
        product.password = parametros.password;
        product.numero = parametros.numero;
        product.chatId = null;

        product.save().then((productStored) => {
            return res.status(200).send({
                product: productStored,
                message: 'Registro guardado correctamente'
            }); 
        })
        .catch((err) => {
            if(err) 
                return res.status(500).send({message: 'Error al guardar el documento'});
        
            if(!usuarioStored)
                return res.status(404).send({message: 'No se ha podido guardar el documento'});
        });
    },

    // Metodo para obtener la informacion de todos los productos
    getProducts: async function(req, res){
        Product.find()
                .then((products) =>{
                    return res.status(200).send({products}); 
                })
                .catch ((err) => {
                    return res.status(404).send({message: "Los documentos no existen"});
                })
    }
    
};

module.exports = controller;