function calcularExcesso() {
    const altura = parseFloat(document.getElementById('altura').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const profundidade = parseFloat(document.getElementById('profundidade').value);
    const valorPassagem = parseFloat(document.getElementById('valor').value);
    const diminuirVolume = document.getElementById('diminuirVolume').checked;
    
    
    const volumeCm3 = altura * largura * profundidade;
    let volumeTotal = volumeCm3 * 300;


    
    const taxaExcesso = 0.005 * valorPassagem;

    if (diminuirVolume) {
        volumeTotal -= 30;
    }
   

    const custoExcesso = volumeTotal * taxaExcesso;

    document.getElementById('result').innerHTML = `
        <p class="text-gray-700"><strong>Volume total:</strong> ${volumeTotal.toFixed(2)} Decimetros Cubicos</p>
        <p class="text-gray-700"><strong>Custo por unidade 0,5%:</strong> R$ ${taxaExcesso.toFixed(2)}</p>
        <p class="text-gray-700"><strong>Custo do Excesso:</strong> R$ ${custoExcesso.toFixed(2)}</p>
    `;
}
function calcularExcessoPeso() {
    let peso = parseFloat(document.getElementById('peso').value);
    const valorPassagemPeso = parseFloat(document.getElementById('valorPassagem').value);
     const diminuirVolumePeso = document.getElementById('diminuirVolumePeso').checked;
    
    const taxaExcesso = 0.005 * valorPassagemPeso;


    if (diminuirVolumePeso) {
        peso -= 30;
    }
    
    const custoExcesso = peso * taxaExcesso;
    document.getElementById('resultPeso').innerHTML = `
        <p class="text-gray-700"><strong>Excesso de Peso:</strong> ${peso.toFixed(2)} Quilos</p>
        <p class="text-gray-700"><strong>Valor por Quilo 0.5%:</strong> ${taxaExcesso.toFixed(2)} Por quilo</p>
        <p class="text-gray-700"><strong>Custo do Excesso:</strong> R$ ${custoExcesso.toFixed(2)}</p>
    `;
}
