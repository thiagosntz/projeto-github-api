import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js"

// buscando os repositórios do usuário no git
async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json();
}

export {getRepositories}