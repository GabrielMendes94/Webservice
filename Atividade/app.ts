//Importa o módulo express
import express, { Request, Response } from "express";
import bodyParser from "body-parser";

// Cria uma instância do express
const app = express();

app.use(bodyParser.json());

let users = [
    { id: 1, name: "João Silva", age: 29, email: "john.silva@example.com"},
    { id: 2, name: "Maria Silva", age: 31, email: "maria.silva@example.com"},
];

// Inicia o servidor na porta 3000
const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

// Configura uma rota básica
app.get("/", (req: Request, res: Response) => {
    res.send(`
    <h1>Bem-vindo ao meu web service!</h1>
    `);
});

// Nova rota para obter informações de todos dos usuários
app.get("/users", (req: Request, res: Response) => {
    res.json(users);
});

// Rota para obter detalhes de um usuário por ID
app.get('/users/:id', (req, res) => {
    const usuarioId = parseInt(req.params.id);
    const usuario = users.find((user) => user.id === usuarioId);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }
});

// Rota pata criar novo usuário
app.post("/users", (req: Request, res: Response) => {
    const newUser = req.body;
    
    if (newUser && newUser.name) {
        newUser.id = users.length + 1;
        users.push(newUser);

        res.status(201).json({ mensagem: 'Usuário adicionado com sucesso', usuario: newUser });
    } else {
        res.status(400).json({ mensagem: 'Dados inválidos para adicionar usuário' });
    }
    // const newUser = {
    //     id: users.length + 1,
    //     name: req.body.name,
    //     age: req.body.age,
    //     email: req.body.email,
    // };

    // users.push(newUser);
    // res.status(201).json(newUser);
});