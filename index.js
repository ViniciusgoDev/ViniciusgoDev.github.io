function calcularExcesso() {
    const altura = parseFloat(document.getElementById('altura').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const profundidade = parseFloat(document.getElementById('profundidade').value);
    const valorPassagem = parseFloat(document.getElementById('valor').value);

    const volumeCm3 = altura * largura * profundidade;
    const volumeTotal = volumeCm3 * 300;


    const franquiaVolume = 300;
    const excessoVolume = Math.max(0, volumeTotal - franquiaVolume);
    const taxaExcesso = 0.005 * valorPassagem;
   

    const custoExcesso = excessoVolume * taxaExcesso;

    document.getElementById('result').innerHTML = `
        <p class="text-gray-700"><strong>Volume total:</strong> ${volumeTotal.toFixed(2)} Decimetros Cubicos</p>
        <p class="text-gray-700"><strong>Excesso de Volume:</strong> ${excessoVolume.toFixed(2)} Decimetros Cubicos</p>
        <p class="text-gray-700"><strong>Custo por unidade 0,5%:</strong> R$ ${taxaExcesso.toFixed(2)}</p>
        <p class="text-gray-700"><strong>Custo do Excesso:</strong> R$ ${custoExcesso.toFixed(2)}</p>
    `;
}
function calcularExcessoPeso() {
    const peso = parseFloat(document.getElementById('peso').value);
    const valorPassagemPeso = parseFloat(document.getElementById('valorPassagem').value);
    const taxaExcesso = 0.005 * valorPassagemPeso;

    const excessoPeso = Math.max(0, peso - 30);
    const custoExcesso = excessoPeso * taxaExcesso;
    document.getElementById('resultPeso').innerHTML = `
        <p class="text-gray-700"><strong>Excesso de Peso:</strong> ${excessoPeso.toFixed(2)} Quilos</p>
        <p class="text-gray-700"><strong>Valor por Quilo 0.5%:</strong> ${taxaExcesso.toFixed(2)} Por quilo</p>
        <p class="text-gray-700"><strong>Custo do Excesso:</strong> R$ ${custoExcesso.toFixed(2)}</p>
    `;
}
