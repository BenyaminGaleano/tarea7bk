const joi = require('joi');
const db = require('../config/db');

module.exports = function (app) {
    app.get('/notas', function(req, res){
        db.query('SELECT * FROM nota', function(error, data, fields){
            if(error){
                res.status(500).json({
                    status: -1,
                    comment: "Ha ocurrido un error al consultar"
                });
            } else {
                res.json({
                    status: 0,
                    comment: "Consulta existosa",
                    data
                });
            }
        });
    });

    app.post('/nota', function(req, res){
        let scheme = joi.object({
            "nombre": joi.string().required(),
            "nota_parcial1": joi.number().required(),
            "nota_parcial2": joi.number().required(),
            "nota_final": joi.number().required()    
        });
        let valid = scheme.validate(req.body);
        if(valid.error){
            res.status(500).json({
                status: -1,
                comment: "el esquema no es válido"
            });
            return;
        } 
        let query = `INSERT INTO nota (nombre, nota_parcial1, nota_parcial2, nota_final) VALUES ('${req.body.nombre}', ${req.body.nota_parcial1}, ${req.body.nota_parcial2}, ${req.body.nota_final})`;
        db.query(query, function(error, data, fields){
            if(error){
                res.status(500).json({
                    status: -1,
                    comment: "Ha ocurrido un error al insertar"
                });
            } else {
                res.json({
                    status: 0,
                    comment: "Insertado correctamente"
                });
            }
        });
    });
};