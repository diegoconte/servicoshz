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
    },
    {
        id: 13,
        titulo: "Acesso a Imagens de Videomonitoramento e Cercamento Eletrônico",
        secretaria: "Secretaria do Gabinete do Prefeito",
        descricao: "Disponibilização de autorização oficial para acesso a registros gravados pelo sistema de videomonitoramento municipal e cercamento eletrônico. Nota importante: As imagens do videomonitoramento ficam gravadas por até 28 dias; as fotos do cercamento eletrônico são preservadas por 30 dias e seus logs de registro por 60 dias.",
        elegibilidade: "Qualquer pessoa que necessite de comprovação de fatos por imagem, desde que apresente o respectivo Registro de Ocorrência Policial.",
        documentos: [
            "Protocolo de solicitação formal devidamente justificado",
            "Registro de Ocorrência Policial (BO) relacionado ao fato"
        ],
        etapas: [
            { nome: "Abertura do Protocolo", desc: "O cidadão protocola presencialmente o pedido com as justificativas necessárias e anexa a ocorrência policial." },
            { nome: "Análise Legal", desc: "O Departamento de Segurança Pública avalia a legalidade do pedido em conformidade com as diretrizes da LGPD." },
            { nome: "Emissão de Autorização", desc: "Se aprovado, o departamento emite o documento físico de autorização de cópia de imagens." },
            { nome: "Coleta de Imagens", desc: "O cidadão retira a autorização e comparece com um dispositivo de armazenamento (pendrive) na sede da Brigada Militar para receber as imagens." }
        ],
        canais: [
            { tipo: "Presencial", local: "Central de Protocolo - Rua Balduíno Schneider, nº 375 (Segunda a Sexta, das 08:00 às 17:00)" },
            { tipo: "Online", local: "Acompanhamento do protocolo no Portal Atende.NET", link: "https://horizontina.atende.net" }
        ],
        prazos: { 
            espera: "Até 2 horas (dias úteis) para recepção e abertura do protocolo físico.", 
            analise: "Até 5 dias úteis para resposta e emissão do parecer definitivo.", 
            total: "Até 5 dias úteis para entrega da autorização ao requerente." 
        },
        custo: { 
            gratuito: true, 
            descricao: "O serviço de solicitação e emissão da autorização é totalmente gratuito." 
        },
        resultado: "Documento oficial constando a autorização para salvamento de imagens junto à Brigada Militar.",
        destaque: false
    }
);