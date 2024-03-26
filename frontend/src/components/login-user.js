const axios = require('axios');

const loginUser = (rl, userLogado) => {
    return new Promise((resolve, reject) => {
        rl.question('Digite o email do usuário: ', (email) => {
            rl.question('Digite a senha do usuário: ', (password) => {
                const user = {
                    email: email,
                    password: password
                };
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/users/login',
                    headers: {
                        'content-type': 'application/json',
                    },
                    data: user
                })
                    .then(response => {
                        if (response.data.login){
                            userLogado = response.data.login;
                        }
                        else{
                            console.log("E-mail ou senha incorreto(s).");
                        }
                        resolve(userLogado);
                    })
                    .catch(error => {
                        // rl.close();
                        reject(new Error('Login inválido'));
                        console.log('Erro ao realizar login');
                    });
            });
        });

    })
};

module.exports = loginUser;
