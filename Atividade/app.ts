//Importa o módulo express
import express, { Request, Response } from "express";

// Cria uma instância do express
const app = express();

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