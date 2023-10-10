//conexão com o banco de dados
var mysql = require('mysql');

var conectarBD = mysql.createConnection({
    host: 'agronegocio-bd.mysql.database.azure.com',
    user: 'agronegocio',
    password: 'Etapa5Puc',
    database: 'agronegociobd'
});

conectarBD.connect(function(err){
    if (err) throw err;
    console.log(('Banco de dados conectado com sucesso!'));
});


module.exports = conectarBD;


