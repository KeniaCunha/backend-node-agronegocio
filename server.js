const express = require ('express');
const porta = 3000;
const bodyParser = require ('body-parser');
const cors = require('cors');
const indexRouter = require('./router');


const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', indexRouter);

// tratamento de erros: aqui é onde captura e processa erros que ocorrem 

app.use('/', (req, res) => {

    res.send('Hello World')

});


// aceita três argumentos: port, host e uma função de retorno de chamada que é acionada quando o servidor começa a escutar.
app.listen(porta,() => console.log(`Servidor está rodando na porta ${porta}`));