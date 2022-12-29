// import { baseUrl} from "/src/scripts/variables.js"

// buscando os dados do usuário
async function getUser(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json();
}

export {getUser}