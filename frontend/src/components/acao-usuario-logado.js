const axios = require('axios');

const acaoUsuarioLogado = (rl, user) => {
    return new Promise((resolve, reject) => {
        rl.question('Deseja adicionar ou remover um produto? (adicionar/remover): ', (action) => {
            if (action.toLowerCase() === 'adicionar') {
                rl.question('Qual o nome do produto? ', (productName) => {
                    rl.question('Qual a quantidade do produto? ', (productQuantity) => {
                        console.log(`Adicionando produto: ${productName}, Quantidade: ${productQuantity}`);
                        acaoUsuarioLogado();
                    });
                });
            } else if (action.toLowerCase() === 'remover') {
                console.log('Removendo produto...');
            } else {
                console.log('Ação não reconhecida. Por favor, tente novamente.');
            }
            acaoUsuarioLogado();
        });
    })
}

module.exports = acaoUsuarioLogado;