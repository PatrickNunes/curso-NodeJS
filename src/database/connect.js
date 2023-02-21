const mongoose = require('mongoose');

const connectDataBase = async () =>{
    mongoose.set('strictQuery', true);
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.sjlum5t.mongodb.net/database?retryWrites=true&w=majority`,
    (error)=>{

        if (error){
           return console.log('ocorreu um erro ao se conectar com o banco de dados: ',error);
        }

        return console.log('Conexão com o banco de dados realizada com sucesso!');

    });
};

module.exports = connectDataBase;