//Creditos a @danielcapua

function validaCpf(){
    var cpf = document.getElementById('cpf').value;
    cpf = cpf.replace( "." , "" );
    cpf = cpf.replace( "-" , "" );
    cpf = cpf.replace( "." , "" );

    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"){
        document.getElementById("cpf").style.border = " 1px solid rgb(255, 0, 0)"; //isso deixa o campo avermelhado
        document.getElementById("nao").style.display = 'block';
        document.getElementById("sim").style.display = 'none';
        return false;
        } else {
        var soma = 0;
        soma = soma + (parseInt(cpf.substring( 0 , 1))) * 10;
        soma = soma + (parseInt(cpf.substring( 1 , 2))) * 9;
        soma = soma + (parseInt(cpf.substring( 2 , 3))) * 8;
        soma = soma + (parseInt(cpf.substring( 3 , 4))) * 7;
        soma = soma + (parseInt(cpf.substring( 4 , 5))) * 6;
        soma = soma + (parseInt(cpf.substring( 5 , 6))) * 5;
        soma = soma + (parseInt(cpf.substring( 6 , 7))) * 4;
        soma = soma + (parseInt(cpf.substring( 7 , 8))) * 3;
        soma = soma + (parseInt(cpf.substring( 8 , 9))) * 2;
        }
        
        var resto1 = (soma * 10) % 11;
        
        if ((resto1 == 10) || (resto1 == 11)) {
        resto1 = 0;
        }
        
        var soma = 0;
        soma = soma + (parseInt(cpf.substring( 0 , 1))) * 11;
        soma = soma + (parseInt(cpf.substring( 1 , 2))) * 10;
        soma = soma + (parseInt(cpf.substring( 2 , 3))) * 9;
        soma = soma + (parseInt(cpf.substring( 3 , 4))) * 8;
        soma = soma + (parseInt(cpf.substring( 4 , 5))) * 7;
        soma = soma + (parseInt(cpf.substring( 5 , 6))) * 6;
        soma = soma + (parseInt(cpf.substring( 6 , 7))) * 5;
        soma = soma + (parseInt(cpf.substring( 7 , 8))) * 4;
        soma = soma + (parseInt(cpf.substring( 8 , 9))) * 3;
        soma = soma + (parseInt(cpf.substring( 9 , 10))) * 2;
        
        var resto2 = (soma *10) % 11;
        if ((resto2 == 10) || (resto2 == 11)) {
        resto2 = 0;
        }
        
        if ((resto1 == (parseInt(cpf.substring( 9 , 10)))) &&(resto2 == (parseInt(cpf.substring( 10 , 11)))) ) {
            document.getElementById("cpf").style.border = " 1px solid rgb(0, 255, 0)"
            document.getElementById("sim").style.display = 'block';
            document.getElementById("nao").style.display = 'none';
            return true;
        }else{
            document.getElementById("cpf").style.border = " 1px solid rgb(255, 0, 0)"; //isso deixa o campo avermelhado
            document.getElementById("nao").style.display = 'block';
            document.getElementById("sim").style.display = 'none';
            return false;
            }
}