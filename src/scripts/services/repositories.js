// import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js"

// buscando os repositórios do usuário no git
async function getRepositories(userName){
    const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=10`)
    return await response.json();
}

export {getRepositories}