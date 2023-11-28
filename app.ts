// Importa o módulo express
import express, { Request, Response } from "express";

import bodyParser from "body-parser";

// Cria uma instância do express
const app = express();

app.use(bodyParser.json());

// Configura uma rota básica
app.get("/", (req: Request, res: Response) => {
    res.send(`
    <h1>Bem-vindo ao meu web server!</h1>
    `);
});

let users = [
    { id: 1, name: "John Doe", age: 25, email: "john.doe@example.com"},
    { id: 2, name: "Jane Doe", age: 27, email: "jane.doe@example.com"},
];

// Nova rota para obter informações dos usuários
app.get("/users", (req: Request, res: Response) => {
    res.json(users);
});

app.post("/users", (req: Request, res: Response) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
    };

    users.push(newUser);
    res.status(201).json(newUser);
});


// Inicia o servidor na porta 3000
const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});