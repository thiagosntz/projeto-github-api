
// criando objeto
const user = {
    avatarUrl: '',
    name: '',
    userName: '',
    reposistories: [],
    // método para setar informações
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    // método para setar os repositórios
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export {user}