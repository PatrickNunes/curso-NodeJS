const fs = require('fs');
const path = require('path');

// Criar Pasta
// fs.mkdir(path.join(__dirname,'test'),(error) =>{
//     if(error){
//         return console.log('Erro',error);
//     }

//     console.log("Pasta criada com sucesso");
// });

// Criar arquivo
fs.writeFile(path.join(__dirname,'/test','teste.txt'),
            "hello Node!", 
            (error) =>{

        if(error){
            return console.log('Erro:', error);
        }

        console.log('Arquivo criado com sucesso');

        // Adcionar a um arquivo
        fs.appendFile(path.join(__dirname,'/test','teste.txt'),
                                "Hello World!",
                                (error)=>{
                                    if(error){
                                        return console.log('Erro:',error);
                                    }

                                    console.log('Conteudo adcionado com sucesso!');
                                });

        // Ler arquivos
        fs.readFile(path.join(__dirname,'/test','teste.txt'), 'utf8',(error,data)=>{
            
                        if(error){
                            return console.log('Erro:',error);
                        }
                        console.log('Conteudo: ',data); 
                    });
});


