const prompt = require('prompt-sync')();

while (true) {
    const vitorias = Number(prompt('Quantas vitórias teve:'));
    const derrotas = Number(prompt('Quantas derrotas teve:'));

    function calcularNivel(vitorias, derrotas) {
        let saldoVitorias = vitorias - derrotas;
        let nivelHerói ;
        if (vitorias <= 10) {
            nivelHerói  = 'Ferro';
        } else if (vitorias <= 20) {
            nivelHerói  = 'Bronze';
        } else if (vitorias <= 50) {
            nivelHerói  = 'Prata';
        } else if (vitorias <= 80) {
            nivelHerói  = 'Ouro';
        } else if (vitorias <= 90) {
            nivelHerói  = 'Diamante';
        } else if (vitorias <= 100) {
            nivelHerói  = 'Lendário';
        } else {
            nivelHerói  = 'Imortal';
        }

        return { saldoVitorias, nivelHerói  };
    }

    const resultadoNivel = calcularNivel(vitorias, derrotas);

    console.log(`O Herói tem um saldo de ${resultadoNivel.saldoVitorias} e está no nível de ${resultadoNivel.nivelHerói }`);

    const resposta = prompt('Deseja continuar? [S/N] ');

    if (!resposta.toLowerCase().startsWith('s')) {
        console.log('Terminou');
        break; // Encerra o loop
    }
}
