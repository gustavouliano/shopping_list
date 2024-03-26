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

const acaoUsuarioLogado = () => {
    return new Promise((resolve, reject) => {
        rl.question('Deseja adicionar ou remover um produto? (adicionar/remover/listar/calcular): ', (action) => {
            if (action.toLowerCase() === 'adicionar') {
                rl.question('Qual o nome do produto? ', (productName) => {
                    rl.question('Qual a quantidade do produto? ', (productQuantity) => {
                        console.log(`Adicionando produto: ${productName}, Quantidade: ${productQuantity}`);
                        axios({
                            method: 'post',
                            url: 'http://localhost:3000/users/products',
                            headers: {
                                'content-type': 'application/json',
                            },
                            data: {
                                userId: userLogado.id,
                                description: productName,
                                quantity: productQuantity
                            }
                        })
                            .then(response => {
                                console.log('Produto adicionado com sucesso.');
                                acaoUsuarioLogado();
                                // rl.close();
                            })
                            .catch(error => {
                                console.log('Erro ao adicionar produto: ', error);
                                // rl.close();
                            });
                    });
                });
            } else if (action.toLowerCase() === 'remover') {
                rl.question('Qual o nome do produto? ', (productName) => {
                    console.log(`Removendo produto: ${productName}`);
                    axios({
                        method: 'delete',
                        url: 'http://localhost:3000/users/products/' + userLogado.id,
                        headers: {
                            'content-type': 'application/json',
                        },
                        data: {
                            productDescription: productName,
                        }
                    })
                        .then(response => {
                            console.log('Produto removido com sucesso.');
                            // rl.close();
                        })
                        .catch(error => {
                            console.log('Erro ao remover produto: ', error);
                            // rl.close();
                        });
                });
            } else if (action.toLowerCase() == 'listar') {
                axios({
                    method: 'get',
                    url: 'http://localhost:3000/users/products/' + userLogado.id,
                    headers: {
                        'content-type': 'application/json',
                    }
                })
                    .then(response => {
                        const products = response.data.products;
                        console.clear();
                        products.forEach(product => {
                            console.log("Produto: " + product.description + "| Qtd: " + product.quantity);
                        });
                        setTimeout(() => {
                            acaoUsuarioLogado();
                        }, 1000)
                        // rl.close();
                    })
                    .catch(error => {
                        console.log('Erro ao listar produtos ', error);
                        // rl.close();
                    });
            } else if (action.toLowerCase() == 'calcular') {
                axios({
                    method: 'get',
                    url: 'http://localhost:3000/users/products/calculate/' + userLogado.id,
                    headers: {
                        'content-type': 'application/json',
                    }
                })
                    .then(response => {
                        const productQuantity = response.data.productQuantity;
                        console.log("Total de produtos na lista (somando todas as quantidades): " + productQuantity);
                        acaoUsuarioLogado();
                        // rl.close();
                    })
                    .catch(error => {
                        console.log('Erro ao listar produtos ', error);
                        // rl.close();
                    });
            } else {
                console.log('Ação não reconhecida. Por favor, tente novamente.');
            }
            acaoUsuarioLogado();
        });
    })
}



// Inicia o loop
acaoUsuarioGeral();