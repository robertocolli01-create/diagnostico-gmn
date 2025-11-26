/**
 * Função principal chamada pelo botão 'Analisar Meu Perfil Agora'.
 * Esta função simula a análise do perfil Google Meu Negócio.
 */
function gerarDiagnostico() {
    // 1. Capturar o nome da empresa e os elementos de resultado
    const nomeInput = document.getElementById('nomeEmpresa');
    const nomeEmpresa = nomeInput.value.trim();
    const resultadoDiv = document.getElementById('resultado-diagnostico');
    const empresaAnalisadaSpan = document.getElementById('empresaAnalisada');
    const relatorioDiv = document.getElementById('relatorio');

    // 2. Validação simples
    if (nomeEmpresa === "") {
        alert("Por favor, insira o nome da sua empresa para continuar o diagnóstico.");
        nomeInput.focus();
        // Oculta o resultado caso estivesse visível de uma tentativa anterior
        resultadoDiv.classList.add('hidden'); 
        return; // Pára a função se o campo estiver vazio
    }

    // 3. Gerar Pontos de Diagnóstico Simulado
    
    // Lista de pontos de otimização que mostram a sua expertise
    const pontosCriticos = [
        "Status de Categorias: Categoria principal não está otimizada.",
        "Fotos: Última atualização de fotos foi há mais de 6 meses.",
        "Horários de Funcionamento: Horários não estão preenchidos para feriados/datas especiais.",
        "Respostas a Avaliações: Mais de 30% das avaliações recentes não foram respondidas.",
        "Publicações (Posts): Nenhuma publicação recente nos últimos 7 dias.",
        "Descrição: A descrição do perfil não contém palavras-chave de alto valor.",
    ];

    // Simulação da pontuação (usada para tornar o relatório mais dinâmico)
    const pontuacao = gerarPontuacaoSimulada(); 
    
    // Criar o conteúdo HTML do relatório
    let relatorioHTML = `
        <p>✅ **Nome da Empresa:** ${nomeEmpresa}</p>
        <p>📊 **Pontuação de Otimização Atual (Estimada):** <span style="font-weight: bold; color: ${pontuacao.cor};">${pontuacao.valor} / 100</span></p>
        <hr>
        <h3>Pontos de Melhoria Encontrados:</h3>
        <ul>
    `;

    // Adiciona uma lista de 3 pontos aleatórios para simular o diagnóstico
    const indicesSelecionados = [];
    while (indicesSelecionados.length < 3) {
        const randomIndex = Math.floor(Math.random() * pontosCriticos.length);
        if (!indicesSelecionados.includes(randomIndex)) {
            indicesSelecionados.push(randomIndex);
            relatorioHTML += `<li>❌ ${pontosCriticos[randomIndex]}</li>`;
        }
    }

    relatorioHTML += `</ul>`;

    // 4. Inserir o conteúdo na página e mostrar o resultado
    
    empresaAnalisadaSpan.textContent = nomeEmpresa; // Atualiza o nome da empresa no título
    relatorioDiv.innerHTML = relatorioHTML; // Insere o relatório HTML gerado
    resultadoDiv.classList.remove('hidden'); // Remove a classe 'hidden' para exibir a secção
    
    // Leva o utilizador para a secção de resultado (útil em telemóveis)
    resultadoDiv.scrollIntoView({ behavior: 'smooth' }); 
}

/**
 * Função auxiliar para gerar uma pontuação simulada, dando um ar de profissionalismo.
 * @returns {object} Um objeto contendo o valor da pontuação e a cor associada.
 */
function gerarPontuacaoSimulada() {
    // Gera um número entre 40 e 75 (sugere que há sempre espaço para melhorar)
    const valor = Math.floor(Math.random() * (75 - 40 + 1)) + 40; 
    let cor = '';

    if (valor < 50) {
        cor = 'red'; // Pontuação baixa
    } else if (valor < 65) {
        cor = '#f0ad4e'; // Laranja (atenção)
    } else {
        cor = 'green'; // Razoável, mas melhorável
    }

    return { valor, cor };
}