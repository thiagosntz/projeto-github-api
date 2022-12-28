import { getUser} from "/src/scripts/services/user.js";
import { getRepositories} from "/src/scripts/services/repositories.js";

import {user} from '/src/scripts/objects/user.js'
import {screen} from '/src/scripts/objects/screen.js'



// criando evento de clique para mandar a informação do input para a função getUserProfile
document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validationEmptyInput(userName)) return
    getUserData(userName)
})

// criando evento keyup para o enter funcionar como o botão
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13;

    if (isEnterKeyPressed){
        if(validationEmptyInput(userName)) return
        getUserData(userName)
    }
})

// criando função que valida o input
function validationEmptyInput(userName){
    if (userName.length === 0){
        alert('Preencha o campo com o nome de usuário do GitHub')
        return true
    }
}


// buscando o perfil do usuário
async function getUserData(userName){

    const userResponse = await getUser(userName)

    if (userResponse.message == 'Not Found'){
        screen.renderNotFound()
        return
    }


    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)

}

