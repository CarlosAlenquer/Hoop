function checkForm() {
    var flag1, flag2, flag3 = 0;
    
    var nome = document.getElementById("name");
    if (nome.checkValidity() == false) {
        flag1 = 1;
    } 
    
    var email = document.getElementById("e-mail");
    if (email.checkValidity() == false) {
        flag2 = 1;
    } 
    
    var subject = document.getElementById("subject");
    if (subject.checkValidity() == false) {
        flag3 = 1;
    } 

    if(flag1 == 1 && flag2 == 0 && flag3 == 0) {
        alert("Preencha o seu nome!");
    }

    if(flag1 == 0 && flag2 == 1 && flag3 == 0) {
        alert("Preencha o seu email!");
    }

    if(flag1 == 0 && flag2 == 0 && flag3 == 1) {
        alert("Preencha com o seu texto!");
    }

    if(flag1 == 1 && flag2 == 1 && flag3 == 0) {
        alert("Preencha o seu nome e com o seu email!");
    }

    if(flag1 == 1 && flag2 == 1 && flag3 == 1) {
        alert("Preencha o seu nome, com o seu email e o seu texto!");
    }

    if(flag1 == 0 && flag2 == 1 && flag3 == 1) {
        alert("Preencha o seu email e o seu texto!");
    }

    if(flag1 == 1 && flag2 == 0 && flag3 == 1) {
        alert("Preencha o seu nome e o seu texto!");
    }

}

function checkForm2() {
    var emailNews = document.getElementById("emailNews2");
    if (emailNews.checkValidity() == false) {
        alert("Preencha o seu email para receber a newsletter!");
    } 
}
