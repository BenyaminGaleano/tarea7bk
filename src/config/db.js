const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '18.217.14.101',
    user: 'awa_user',
    password: 'Abc12345',
    database: 'awa'
}); // creando conexión a base de datos de Julio

conn.connect(
    function(error) {
        if(error) {
            console.log('No fue posible conectar a la base de datos');
        } else {
            console.log('Conectado a base de datos');
        }
    }
);

module.exports = conn; 