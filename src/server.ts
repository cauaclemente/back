import express,{Request, Response}  from "express";
const cors = require('cors');
import { getState } from "./ibgeService";

const app = express();
app.use(cors());

const PORT = 3333;

app.get('/state', async (req: Request, res: Response) => {
  try {
    const state = await getState();
    res.json(state);
  }catch(err){
    res.status(500).send('Erro ao buscar estados')
  }
})


const server = app.listen({
host: '0.0.0.0',
port: process.env.PORT ? Number(process.env.PORT) : 3333,
}, () => {
console.log("Servidor online");
});