function inicio() {
    let primeiroNumero = Number(prompt("Digite o primeiro número"));
    let segundoNumero = Number(prompt("Digite o segundo número"));

    let numIguais = primeiroNumero === segundoNumero ? `Os números ${primeiroNumero} e ${segundoNumero} são IGUAIS` : `Os números ${primeiroNumero} e ${segundoNumero} são DIFERENTES`;

    let soma = primeiroNumero + segundoNumero;

    let mOuM10 = soma > 10 ? "maior" : "menor";
    let mOuM20 = soma > 20 ? "maior" : "menor";

    alert(`${numIguais}. Sua soma é ${soma}, que é ${mOuM10} que 10 e ${mOuM20} que 20`);

    function questao1() {

        let questao = Number(prompt("Deseja fazer de novo? 1 - SIM; 2 - SAIR"));

        switch (questao) {
            case 1:
                inicio();
                break;
            case 2:
                alert("Até a próxima");
                break;
            default:
                alert("Você precisa escolher entre 1 ou 2");
                questao1();

        }
    }

    questao1();
}

inicio();