class Usuario {
    constructor(nome, telefone, celular, url, data, email, cep, cidade, insta, git, signo, id) {
        this.nome = nome;
        this.telefone = telefone;
        this.celular = celular;
        this.url = url;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.insta = insta;
        this.git = git;
        this.age = this.calculatorAge();
        this.signo = this.getZodiacSign();


    }

    getZodiacSign() {
        let birthdate = new Date(this.data);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
    calculatorAge() {
        console.log("passou pela conta de idade")
        const data = this.data;
        const birthYear = new Date(data).getFullYear();
        const weYear = new Date().getFullYear();
        const birthMonth = new Date(data).getMonth() + 1;
        const weMonth = new Date().getMonth() + 1;

        const age = weYear - birthYear;
        if (birthMonth > weMonth) {
            return age - 1;
        } else {
            return age;
        }
    }

}
class ListarTelefones {
    constructor() {
        this.listausarios = [];
    }
    adicionar(usuario) {
        this.listausarios.push(usuario);
        let data = usuario.calculatorAge();
     

    }

}

const bibliotecaUsuarios = new ListarTelefones();


function adicionar() {
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

    verificarInput();
    aparecerTela();
    const newUsuario = new Usuario(nome, telefone, celular, url, data, email, cep, cidade, insta, git);


    bibliotecaUsuarios.adicionar(newUsuario);
    console.log(bibliotecaUsuarios);
}


function verificarInput() {
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

    if (nome == '' || telefone == '' || celular == '' || url == '' || data == '' || email == '' || cep == '' || cidade == '' || insta == '' || git == '') {
        envieMsg('Por favor, preencha todos os campos😞', 'erro');
    } else if (!isURLValida(url)) {
        envieMsg('URL da imagem inválida!', 'error');
    } else {
        envieMsg('sucesso!!😁', 'sucesso');
        limparInputs();
    }
}

function envieMsg(msg, tipoMsg) {
    let msgInp = document.getElementById("msg");
    msgInp.innerHTML = '';

    let msgParaTela = `<p class = '${tipoMsg}' >${msg} </p>`;

    msgInp.innerHTML = msgParaTela;

    setTimeout(function () {
        msgInp.innerHTML = '';
    }, 2000)
}

function aparecerTela() {
    const listausarios = document.getElementById("aparecer-baixo");
    listausarios.innerHTML = "";

    bibliotecaUsuarios.listausarios.forEach(usuario => {
        const divTell = `
        <div class = 'aparecer1' onclick ="aparecerLateral()"> 
        <h1>${usuario.nome}</h1>
        <p><strong>telefone:</strong>${separingTellphone(usuario.telefone)}</p>
        <p><strong>celular:</strong> ${separingCellphone(usuario.celular)}</p>
        </div>`;
        listausarios.innerHTML += divTell;
    });
}

function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function separingTellphone(telefone) {
    const arrTell = telefone.split("");

    arrTell.splice(4, 0, "-");

    return arrTell.join("");
}

function separingCellphone(celular) {
    const arrcell = celular.split("");

    arrcell.splice(0, 0, "(");
    arrcell.splice(3, 0, ")");
    arrcell.splice(4, 0, " ");
    arrcell.splice(10, 0, "-");
    //(00) 00000-0000

    return arrcell.join("");
}
function separingCEP(cep) {
    const arrCEP = cep.split("");

    arrCEP.splice(5, 0, "-");

    return arrCEP.join("");
}

function aparecerLateral() {
    const listausarios = document.getElementById("aparecer-lado");
    listausarios.innerHTML = "";

    bibliotecaUsuarios.listausarios.forEach(usuario => {
        const divTell2 = `
    <div class = 'aparecer2'> 
        <h1>${usuario.nome}</h1>
        <p><strong>celular:</strong> ${separingCellphone(usuario.celular)}</p>
        <p><strong>telefone:</strong>${separingCellphone(usuario.telefone)}</p>
        <p><strong>Data de nascimento:</strong>${dateBr(usuario.data)}</p>
        <p><strong>idade:</strong>${usuario.age}</p>
        <p><strong>signo:</strong>${usuario.signo}</p>
        <p><strong>email:</strong>${usuario.email}</p>
        <p><strong>cep:</strong>${separingCEP(usuario.cep)}</p>
        <p><strong>cidade:</strong>${usuario.cidade}</p>

        <div id=logos>
        <a target="_blank" href="${abirLink(usuario.insta)}"><i class="fa-brands fa-instagram"></i></a>
        <a target="_blank" href="${abirLink(usuario.git)}"><i class="fa-brands fa-github"></i></a>
        <a target="_blank" href="${abirLink(usuario.celular)}"> <i class="fa-brands fa-whatsapp"></i></a>
        </div>
        
    </div>`;

   
       
    });
    listausarios.innerHTML += divTell2;
}


function dateBr(data) {
    console.log("Passou pela funcao dateBr()");

    let dateArray = data.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}


function limparInputs() {
    let nome = document.getElementById("input-nome").value = "";
    let telefone = document.getElementById("input-telefone").value = "";
    let celular = document.getElementById("input-celular").value = "";
    let url = document.getElementById("input-url").value = "";
    let data = document.getElementById("input-data").value = "";
    let email = document.getElementById("input-email").value = "";
    let cep = document.getElementById("input-cep").value = "";
    let cidade = document.getElementById("input-cidade").value = "";
    let insta = document.getElementById("input-insta").value = "";
    let git = document.getElementById("input-git").value = "";
}

function abirLink(insta){
    return `https://www.instagram.com/${insta}`
}
function abirLinkW(celular){
    return `https://www.wa.me/55${celular}`
}
function abirLinkG(git){
    return `https://github.com/${git}`
}