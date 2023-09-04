class Usuario{
    constructor(nome, telefone, celular, url, data, email, cep, cidade, instagram, github, signo, id){
        this.nome = nome;
        this.telefone = telefone;
        this.celular= celular;
        this.url = url;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.instagram = instagram;
        this.github = github;
        this.id = this.generateId; 
        this.age = this.calculateAge();
        this.signo = this.getZodiacSign();
    }
    generateId() {
        return Math.floor(Math.random() * 10000);
    }
}

function adicionar(){
    let nome = document.getElementById("input-nome").value;
    let telefone = document.getElementById("input-telefone").value;
    let celular = document.getElementById("input-celular").value;
    let url = document.getElementById("input-url").value;
    let data = document.getElementById("input-data").value;
    let email = document.getElementById("input-email").value;
    let cep = document.getElementById("input-cep").value;
    let cidade = document.getElementById("input-cidade").value;
    let insta = document.getElementById("input-insta").value;
    let git = document.getElementById("input-git").value;


    console.log(nome);
    console.log(telefone);
    console.log(celular);
    console.log(url);
    console.log(data);
    console.log(email);
    console.log(cep);
    console.log(cidade);
    console.log(insta);
    console.log(git);

}
















function generateId() {
    return Math.floor(Math.random() * 10000);
}