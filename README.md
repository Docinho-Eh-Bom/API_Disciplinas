# API de Gestão de Disciplinas
`Node.js` • `Express` • `RESTful`

API desenvolvida para o gerenciamento de disciplinas , implementando os princípios REST com operações CRUD.

## ✨ Funcionalidades

| Método | Endpoint                | Descrição                         |
|--------|-------------------------|-----------------------------------|
| POST   | `/disciplinas`          | Cadastra nova disciplina          |
| GET    | `/disciplinas`          | Lista todas as disciplinas        |
| GET    | `/disciplinas/:id`      | Obtém detalhes de uma disciplina  |
| PUT    | `/disciplinas/:id`      | Atualiza todos os campos          |
| DELETE | `/disciplinas/:id`      | Remove uma disciplina             |


## Modelo de Dados

### 🔹 Requisição (POST/PUT)
```json
{
  "nome": "Engenharia de Software",
  "cargaHoraria": 60,
  "obrigatoria": true
}
```

## 🔹 Resposta da API
```json
{
  "id": "a1b2c3d4-e5f6-7890",
  "nome": "Engenharia de Software",
  "cargaHoraria": 60,
  "obrigatoria": true,
}
```
