const express = require('express');
const app = express();
const PORT = 3000;

const loggerMiddleware = require('./middlewares/logger.js');
const errorHandler = require('./middlewares/errorHandler.js');
const categoriasRouter = require('./routers/categorias.js');
const produtosRouter = require('./routers/produtos.js');

app.use(express.json());
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.json({ mensagem: '😌 Seja Bem-vindo a API  Mexican!' });
});

app.use('/api/categorias', categoriasRouter);
app.use('/api/produtos', produtosRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server rodando em http://localhost:${PORT}`);
});