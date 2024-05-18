function calcularExcesso() {
    const altura = parseFloat(document.getElementById('altura').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const profundidade = parseFloat(document.getElementById('profundidade').value);
    const valorPassagem = parseFloat(document.getElementById('valor').value);

    const volumeCm3 = altura * largura * profundidade;
    const volumeDm3 = volumeCm3 / 1000;


    const franquiaVolume = 300; // 300 dm³ permitidos
    const excessoVolume = Math.max(0, volumeDm3 - franquiaVolume);
    const taxaExcesso = 0.005 * valorPassagem;
    console.log(taxaExcesso)

    const custoExcesso = excessoVolume * taxaExcesso;

    document.getElementById('result').innerHTML = `
        <p class="text-gray-700"><strong>Volume da Bagagem:</strong> ${volumeDm3.toFixed(2)} Decimetros Cubicos</p>
        <p class="text-gray-700"><strong>Excesso de Volume:</strong> ${excessoVolume.toFixed(2)} Decimetros Cubicos</p>
        <p class="text-gray-700"><strong>Custo por decimetro cubico:</strong> R$ ${taxaExcesso.toFixed(2)}</p>
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
        <p class="text-gray-700"><strong>Valor por Quilo:</strong> ${taxaExcesso.toFixed(2)} Por quilo</p>
        <p class="text-gray-700"><strong>Custo do Excesso:</strong> R$ ${custoExcesso.toFixed(2)}</p>
    `;
}
