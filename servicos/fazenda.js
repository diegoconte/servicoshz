// ===================================================
// SERVIÇOS: SECRETARIA DA FAZENDA
// ===================================================
bdServicos.push(
    {
        id: 2,
        titulo: "Emissão de Alvará de Licença e Funcionamento",
        secretaria: "Secretaria da Fazenda",
        descricao: "Documento obrigatório que autoriza o funcionamento de atividades comerciais, industriais, institucionais e de prestação de serviços no município.",
        elegibilidade: "Pessoas Jurídicas (Empresas) e Profissionais Autônomos estabelecidos in Horizontina.",
        documentos: ["CNPJ atualizado", "Contrato Social", "RG e CPF dos sócios", "Alvará PPCI (Bombeiros)", "Comprovante de endereço do imóvel"],
        etapas: [
            { nome: "Protocolo", desc: "Envio da documentação via Portal de Serviços." },
            { nome: "Análise Tributária e Zoneamento", desc: "Verificação se a atividade é permitida no local." },
            { nome: "Pagamento de Taxa", desc: "Emissão e pagamento da guia." },
            { nome: "Emissão do Alvará", desc: "Documento liberado para impressão." }
        ],
        canais: [
            { tipo: "Online", local: "Sistema de Alvará Digital", link: "#" },
            { tipo: "Presencial", local: "Paço Municipal - Setor de Tributação (Seg a Sex, 08h-12h)" }
        ],
        prazos: { espera: "Até 30 min (Presencial)", analise: "10 dias úteis", total: "15 dias úteis" },
        custo: { gratuito: false, descricao: "Cobrança de Taxa de Licença de Localização (TLL). O valor varia de acordo com o ramo de atividade e metragem." },
        resultado: "Alvará de Funcionamento (PDF validado digitalmente).",
        destaque: true
    },
    {
        id: 5,
        titulo: "2ª Via do IPTU",
        secretaria: "Secretaria da Fazenda",
        descricao: "Emissão da segunda via das guias de pagamento do Imposto Predial e Territorial Urbano para o exercício atual ou dívida ativa.",
        elegibilidade: "Qualquer cidadão que possua o número da Inscrição Imobiliária ou CPF do proprietário.",
        documentos: ["Número da Inscrição do Imóvel (Cadastro) ou CPF do Proprietário."],
        etapas: [
            { nome: "Acesso ao Sistema", desc: "Informar os dados de identificação do imóvel." },
            { nome: "Geração da Guia", desc: "Sistema emite código de barras/PIX para pagamento." }
        ],
        canais: [
            { tipo: "Online", local: "Portal de Serviços Tributários", link: "#" }
        ],
        prazos: { espera: "Imediato", analise: "Automática", total: "Imediato" },
        custo: { gratuito: true, descricao: "A emissão do documento é gratuita. O contribuinte pagará apenas o valor do imposto constante na guia." },
        resultado: "Guia de pagamento (DAM) em formato PDF.",
        destaque: true
    }
);