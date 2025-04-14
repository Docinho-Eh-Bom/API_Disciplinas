import express from 'express';
import disciplinasRepository from './repository.js';

const disciplinas = disciplinasRepository();
const app = express();
const port = 3000;

app.use(express.json());

app.get("/disciplinas", (req, res)=>{
    const { nome } = req.query;
    const list = disciplinas.list(nome);
    res.set("X-Total-Count", list.length);
    res.json(list);
 })

 app.get("/disciplinas/:id", (req, res)=>{
    const { id } = req.params;
    const disciplina = disciplinas.findById(id);
    if (!disciplina) {
       return res.status(404).json({message: "Disciplina nao encontrada!"});
    }
    res.json(disciplina);
 })
 
 app.post("/disciplinas", (req, res)=>{
    const { nome, cargaHoraria } = req.body;
    const disciplina = disciplinas.create({nome, cargaHoraria});
    res.status(201).json(disciplina);
    //res.set("Content-Type", "application/json");
 })
 

 app.delete("/disciplinas/:id", (req, res)=>{
    const { id } = req.params;
    const result = disciplinas.remove(id);
    if (!result) {
       return res.status(404).json({message: "Disciplina nao encontrada!"});
    }
    res.status(204).send();
 })
 
 
 app.put("/disciplinas/:id", (req, res)=>{
    const { nome, cargaHoraria, obrigatoria } = req.body;
    const { id } = req.params;
    const disciplina = disciplinas.update(id, {nome, cargaHoraria, obrigatoria});
    if (!disciplina) {
       return res.status(404).json({message: "Disciplina nao encontrada!"});
    }
    res.json(disciplina);
 })
 

//Testing the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}...`);
 }); 