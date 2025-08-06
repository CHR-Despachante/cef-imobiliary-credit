document.addEventListener('DOMContentLoaded', function () {
	
	// Objeto de dados com as informações de financiamento (valores numéricos)
	const dadosFinanciamento = [
		// SBPE (Sistema Brasileiro de Poupança e Empréstimo)
		// TR (Taxa Referencial)
		{
			show: false,
			// rowSpanText: "SBPE - TR",
			// rowSpanCount: 6,
			modalidade: "SBPE",
			tipoImovel: "Usado",
			amortizacao: "SAC",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 70,
			comprometimentoRenda: 30,
		},
		
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Usado",
			amortizacao: "PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 50,
			comprometimentoRenda: 25,
		},
		
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Novo",
			amortizacao: "SAC",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Novo",
			amortizacao: "PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 80,
			comprometimentoRenda: 25,
		},
		{
			rowSpanText: "SBPE",
			rowSpanCount: 4,
			modalidade: "SBPE",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 90,
			comprometimentoRenda: 30,
		},
		{
			modalidade: "SBPE",
			tipoImovel: "Empreendimento",
			amortizacao: "PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 80,
			comprometimentoRenda: 25,
		},
		
		// Poupança
		{
			show: false,
			// rowSpanText: "SBPE - Poupança",
			// rowSpanCount: 6,
			modalidade: "SBPE",
			tipoImovel: "Usado",
			amortizacao: "SAC",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 70,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Usado",
			amortizacao: "PRICE",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 50,
			comprometimentoRenda: 25,
		},
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Novo",
			amortizacao: "SAC",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "SBPE",
			tipoImovel: "Novo",
			amortizacao: "PRICE",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 80,
			comprometimentoRenda: 25,
		},
		{
			modalidade: "SBPE",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 90,
			comprometimentoRenda: 30,
		},
		{
			modalidade: "SBPE",
			tipoImovel: "Empreendimento",
			amortizacao: "PRICE",
			indexador: "Poupança",
			prazoMinimo: 120,
			prazoMaximo: 360,
			cotaMaxima: 80,
			comprometimentoRenda: 25,
		},
		
		
		// Pró-Cotista FGTS
		// {
		//   modalidade: "Pró-Cotista",
		//   tipoImovel: "Novo ou Usado",
		//   amortizacao: "SAC / PRICE",
		//   indexador: "TR",
		//   prazoMinimo: 120,
		//   prazoMaximo: 420,
		//   cotaMaxima: 80,
		//   comprometimentoRenda: 30,
		// },
		
		// Minha Casa, Minha Vida (MCMV)
		// Novo ou Usado
		{
			show: false,
			// rowSpanText: "MCMV - Novo ou Usado",
			// rowSpanCount: 4,
			modalidade: "MCMV - Faixa 1",
			tipoImovel: "Novo ou Usado",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 70,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "MCMV - Faixa 2",
			tipoImovel: "Novo ou Usado",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "MCMV - Faixa 3",
			tipoImovel: "Novo ou Usado",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
		},
		{
			show: false,
			modalidade: "MCMV - Faixa 4",
			tipoImovel: "Novo ou Usado",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
		},
		
		// //
		// MCMV - Empreendimento
		{
			rowSpanText: "MCMV",
			rowSpanCount: 7,
			modalidade: "MCMV - Faixa 1",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 2160,
			minRenda: 0,
			maxFinanciamentoContagem: 245000,
			maxFinanciamentoBHTE: 264000
		},
		{
			modalidade: "MCMV - Faixa 1,5",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 2850,
			minRenda: 2160.01,
			maxFinanciamento: 264000,
		},
		{
			modalidade: "MCMV - Faixa 2",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 3500,
			minRenda: 2850.01,
			maxFinanciamento: 264000,
		},
		{
			modalidade: "MCMV - Faixa 2,5",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 4000,
			minRenda: 3500.01,
			maxFinanciamento: 264000,
		},
		{
			modalidade: "MCMV - Faixa 3",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 4700,
			minRenda: 4000.01,
			maxFinanciamento: 350000,
		},
		{
			modalidade: "MCMV - Faixa 3,5",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 8600,
			minRenda: 4700.01,
			maxFinanciamento: 350000,
		},
		{
			modalidade: "MCMV - Faixa 4 (Classe Média)",
			tipoImovel: "Empreendimento",
			amortizacao: "SAC ou PRICE",
			indexador: "TR",
			prazoMinimo: 120,
			prazoMaximo: 420,
			cotaMaxima: 80,
			comprometimentoRenda: 30,
			maxRenda: 12000,
			minRenda: 8600.01,
			maxFinanciamento: 500000,
		},
	];
	
	const tabelaBody = document.getElementById('tabela-financiamento-body');
	
	/**
	 * Formata um valor numérico para uma string de percentual.
	 * Trata casos especiais onde o valor pode não ser um número.
	 * @param {number|null} valor O número a ser formatado.
	 * @param {string} textoPadrao O texto a ser exibido se o valor for nulo ou inválido.
	 * @returns {string} O valor formatado como "Até X%" ou o texto padrão.
	 */
	function formatarPercentual(valor, textoPadrao = 'Varia conforme análise') {
		if (typeof valor === 'number' && !isNaN(valor)) {
			// return `Até ${valor}%`;
			return `${valor}%`;
		}
		// Para casos como a Faixa 1 do MCMV, onde o valor não é um percentual fixo.
		if (valor === null) {
			if (textoPadrao === 'Varia conforme análise') return "Subsídio Elevado";
			else return textoPadrao;
		}
		return textoPadrao;
	}
	
	// Função para renderizar os dados na tabela
	function renderizarTabela() {
		// Limpa o corpo da tabela antes de inserir novas linhas
		tabelaBody.innerHTML = '';
		
		// Itera sobre cada objeto no array de dados e cria uma linha na tabela
		dadosFinanciamento.forEach(item => {
			if (!Object.keys(item).includes("show") && item.show !== false) {
				const row = document.createElement('tr');
				
				// Formata os valores numéricos para exibição
				const cotaFormatada = formatarPercentual(item.cotaMaxima);
				const comprometimentoFormatado = formatarPercentual(item.comprometimentoRenda, 'Varia conforme renda e subsídio');
				
				
				row.innerHTML = `
                <!-- ${item.rowSpanText && item.rowSpanCount ? `<td rowspan="${item.rowSpanCount}">${item.rowSpanText}</td>` : ''} -->
                <td class="text-center fw-normal">${item.modalidade}</td>
                <td>${item.amortizacao}</td>
                <td>${item.indexador}</td>
                <td>${item.prazoMinimo}</td>
                <td>${item.prazoMaximo}</td>
                <td>${cotaFormatada}</td>
                <td>${comprometimentoFormatado}</td>
                <td>${Object.keys(item).includes("maxRenda") && Object.keys(item).includes("minRenda") ? item.minRenda.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) + " à " + item.maxRenda.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) : "-"}</td>
                <td>${Object.keys(item).includes("maxFinanciamento") ? [...(!Array.isArray(item.maxFinanciamento) ? [item.maxFinanciamento] : item.maxFinanciamento)].map((mf, _, self) => mf.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})).join(" ou ") : "-" }</td>
                <td></td>
            `;
				
				tabelaBody.appendChild(row);
			}
		});
	}
	
	// Chama a função para renderizar a tabela assim que a página carregar
	renderizarTabela();
	
});
