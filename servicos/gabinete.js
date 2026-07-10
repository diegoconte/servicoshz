// ===================================================
// SERVIÇOS: Secretaria do Gabinete do Prefeito
// ===================================================
bdServicos.push(
    {
        id: 2,
        titulo: "Controladoria e Controle Interno",
        secretaria: "Secretaria do Gabinete do Prefeito",
        descricao: "Planejar, coordenar e executar atividades de auditoria e fiscalização interna de conformidade legal, além de atender de forma direta as demandas, prazos e diligências de controle do Tribunal de Contas do Estado (TCE/RS).",
        elegibilidade: "Não se aplica (Serviço técnico-administrativo restrito de caráter estritamente interno).",
        documentos: [
            "Não se aplica (Instrução direta por atos oficiais e procedimentos internos)"
        ],
        etapas: [
            { nome: "Planejamento e Cronograma", desc: "Elaboração de cronogramas e escopos anuais de fiscalizações nos setores do Executivo." },
            { nome: "Execução de Auditorias", desc: "Análise sistemática da conformidade legal, financeira, contábil e operacional dos atos da administração." },
            { nome: "Relatório de Controle Interno", desc: "Geração de notas técnicas, pareceres orientadores e relatórios periódicos de conformidade." },
            { nome: "Atendimento ao TCE/RS", desc: "Compilação de dados municipais e envio sistemático de respostas às diligências e auditorias do Tribunal de Contas." }
        ],
        canais: [
            { tipo: "Presencial", local: "Gabinete do Prefeito - Departamento de Controle Interno (Rua Balduíno Schneider, 375)" },
            { tipo: "Telefone", local: "55 3537 7500" }
        ],
        prazos: { 
            espera: "Não se aplica (Atendimento de fluxos internos programados)", 
            analise: "Definido por prazos regimentais e prazos legais exigidos pelo TCE/RS", 
            total: "Variável (Dependendo da complexidade do objeto auditado)" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Não se aplica (Trata-se de atividade institucional sem taxas administrativas)." 
        },
        resultado: "Pareceres técnicos, relatórios periódicos de controle e respostas de conformidade instruídas.",
        destaque: false
    }
);