const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());

const port = 8080;

    //Listando Usuarios no mongoDB
    app.get('/users', async (red,res)=>{
        try {
            const users = await UserModel.find({});
            res.status(200).json(users);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    });

    //Buscando User por ID
    app.get('/users/:id', async (req,res)=>{
        try {
            const id = req.params.id;

            const user = await UserModel.findById(id);
            res.status(200).json(user);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    });


    // Criando usuario no mongoDB
    app.post('/users', async (req,res)=>{
    
        try{
            const user =  await UserModel.create(req.body);
            res.status(201).json(user);
        }
        catch(error){
            res.status(500).send(error.message);
        }
    });


//iniciando o servidor
app.listen(port, ()=>{
    console.log(`Rodando com Express na porta: ${port}`);
});