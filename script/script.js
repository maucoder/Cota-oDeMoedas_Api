
document.querySelector('#d-canada').addEventListener('click', function () {
    obterDados('CAD-BRL', 7);
});

document.querySelector('#euro').addEventListener('click', function () {
    obterDados('EUR-BRL', 7);
});

function obterDados(valor, quantidade) {

    let url = `https://economia.awesomeapi.com.br/${valor}/${quantidade}`;

    const app = new XMLHttpRequest();
    app.open('GET', url, true);
    app.send();

    app.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {

            let dados = JSON.parse(this.responseText);

            let resultado = document.querySelector('#resultado');
                resultado.innerHTML = '';

            for (let item of dados) {
                resultado.innerHTML += `<li>Valor: $${item.high}</li>`
            }

            let resultadoData = document.querySelector('#resultado-data');
                resultadoData.innerHTML = '';

                // Formatando Data com split
                let novaData = `${dados[0].create_date.substr(0,10)}`
                let split = novaData.split('-');
                let novaDataFinal = split[2] + "/" +split[1]+ "/" + split[0];

                resultadoData.innerHTML = `Data: ${novaDataFinal} Hora: ${dados[0].create_date.substr(11, 18)}`;
        }
    }
}