const axios = require('axios');
const readline = require('readline');
const createUser = require("./components/create-user");
const loginUser = require('./components/login-user');

var userLogado = null;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const acaoUsuarioGeral = async () => {
    rl.question('Deseja criar ou logar um usuário? (criar/login): ', async (action) => {
        if (action.toLowerCase() === 'criar') {
            createUser(rl);
        }
        else if (action.toLowerCase() === 'login') {
            userLogado = await loginUser(rl, userLogado);
            if (userLogado) {
                await acaoUsuarioLogado();
            }
        }
        else {
            console.log('Ação não reconhecida. Por favor, tente novamente.');
        }
        acaoUsuarioGeral();
    });
};


const acaoUsuarioLogado = async () => {
    return new Promise((resolve, reject) => {

    })
}





// Inicia o loop
acaoUsuarioGeral();