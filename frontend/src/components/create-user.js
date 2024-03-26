const axios = require('axios');

const createUser = (rl) => {
  rl.question('Digite o nome do usuário: ', (name) => {
    rl.question('Digite o email do usuário: ', (email) => {
      rl.question('Digite a senha do usuário: ', (password) => {
        const user = {
          name: name,
          email: email,
          password: password
        };

        axios({
          method: 'post',
          url: 'http://localhost:3000/users',
          headers: {
            'content-type': 'application/json',
          },
          data: user
        })
          .then(response => {
            console.log('Usuário criado com sucesso.');
            rl.close();
          })
          .catch(error => {
            console.log('Erro ao criar usuário: ', error);
            rl.close();
          });
      });
    });
  });
};

module.exports = createUser;