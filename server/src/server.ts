import express from 'express'
import cors from 'cors'
import { ROUTES } from './routes';


// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar uma informação uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação

// app.get('/users', (request, response) => { // Do something when user acess this
//     return response.send("Hello World");
// })

const app = express();

app.use(cors());
app.use(express.json());
app.use(ROUTES);

app.listen(3333, () => {
    console.log('HTTP server running.');
});