// ===================================================
// SERVIÇOS: Secretaria de Desenvolvimento Econômico
// ===================================================
bdServicos.push(
    {
        id: 29,
        titulo: "Programa Gaúcho de Artesanato (PGA) - Carteira do Artesão",
        secretaria: "Secretaria de Desenvolvimento Econômico",
        descricao: "Promove o reconhecimento e a valorização dos artesãos de Horizontina. Oferece cadastramento regional, emissão e renovação da Carteira do Artesão, capacitações e apoio à participação em feiras e eventos de comercialização de produtos artesanais.",
        elegibilidade: "Qualquer pessoa física residente no Rio Grande do Sul, com idade mínima de 16 anos, que exerça atividade artesanal de forma individual ou em unidade produtiva artesanal.",
        documentos: [
            "CPF",
            "Comprovante de residência atualizado",
            "Fotografia 3x4 recente (quando solicitada pelo agente avaliador)",
            "Apresentação física de peças prontas para a avaliação técnica, conforme as tipologias de artesanato declaradas",
            "Formulário de cadastro estadual devidamente preenchido no momento do atendimento"
        ],
        etapas: [
            { nome: "Apresentação documental", desc: "O artesão entrega a documentação básica e faz o preenchimento da ficha de cadastro do programa." },
            { nome: "Apresentação das peças", desc: "Demonstração e entrega das amostras físicas das peças para análise técnica das técnicas empregadas." },
            { nome: "Avaliação técnica", desc: "A equipe avaliadora regional analisa se as peças condizem com as diretrizes da Base Conceitual do Artesanato Brasileiro." },
            { nome: "Homologação do cadastro", desc: "Parecer definitivo autorizando a inclusão do artesão no sistema SICAB estadual e federal." },
            { nome: "Emissão da Carteira", desc: "Com a aprovação, a Carteira do Artesão oficial é emitida contendo as especialidades profissionais (validade de 6 anos)." }
        ],
        canais: [
            { tipo: "Presencial", local: "Secretaria de Desenvolvimento Econômico - SINE (Av. Helmut Simm, 100)" },
            { tipo: "Telefone", local: "55 3537 7541" },
            { tipo: "E-mail", local: "fgtassinehz@gmail.com" },
            { tipo: "Online", local: "Portal do Artesanato Gaúcho", link: "https://artesanatogaucho.rs.gov.br/carteira-do-artesao-pga" }
        ],
        prazos: { 
            espera: "De 15 a 30 minutos de espera em caso de atendimento presencial padrão", 
            analise: "A avaliação técnica presencial é realizada sob agendamento prévio após a formação de turmas com o mínimo de 6 interessados para deslocação do avaliador regional do PGA", 
            total: "Variável de acordo com o cronograma de viagens do avaliador técnico do Estado" 
        },
        custo: { 
            gratuito: false, 
            descricao: "Serviço sujeito a taxas estaduais de emissão e renovação da carteira instituídas pela tabela oficial da FGTAS/RS." 
        },
        resultado: "Inclusão no Sistema de Informações Cadastrais do Artesanato Brasileiro (SICAB) e liberação da Carteira do Artesão.",
        destaque: false
    },
    {
        id: 30,
        titulo: "Habilitação ao Seguro-Desemprego",
        secretaria: "Secretaria de Desenvolvimento Econômico",
        descricao: "Garante assistência financeira temporária e suporte na recolocação profissional ao trabalhador formal dispensado sem justa causa, empregados domésticos demitidos, pescadores em período de defeso ou trabalhadores resgatados.",
        elegibilidade: "Trabalhador formal demitido sem justa causa que atenda aos requisitos de tempo de carteira assinada, limite de renda e não recebimento de outros benefícios previdenciários concomitantes.",
        documentos: [
            "CPF",
            "Requerimento de Seguro-Desemprego emitido pelo empregador no momento da rescisão do contrato de trabalho",
            "Termo de Rescisão do Contrato de Trabalho (TRCT) homologado ou Termo de Quitação",
            "Comprovante de saque ou extrato atualizado do FGTS (quando solicitado pela equipe do SINE)"
        ],
        etapas: [
            { nome: "Apresentação do Pedido", desc: "O trabalhador apresenta as guias e documentos no balcão presencial do SINE Horizontina ou anexa-os nos sistemas móveis oficiais." },
            { nome: "Conferência de dados", desc: "Cruzamento dos vínculos trabalhistas do requerente para validação dos critérios legais de concessão." },
            { nome: "Registro de requerimento", desc: "A solicitação de auxílio-desemprego é devidamente transmitida no banco de dados do Ministério do Trabalho e Emprego." },
            { nome: "Análise técnica federal", desc: "Processamento nacional da elegibilidade do trabalhador e emissão do parecer definitivo." },
            { nome: "Liberação de parcelas", desc: "Homologado o pedido, os recursos financeiros são depositados em conta do trabalhador conforme cronograma governamental." }
        ],
        canais: [
            { tipo: "Presencial", local: "Agência FGTAS/SINE Horizontina - Av. Helmut Simm, 100 (Segunda a Sexta, das 07:30 às 12:00 e das 13:30 às 17:00)" },
            { tipo: "Telefone", local: "55 3537 7541" },
            { tipo: "E-mail", local: "fgtassinehz@gmail.com" }
        ],
        prazos: { 
            espera: "De 15 a 30 minutos em caso de triagem presencial por ordem de chegada", 
            analise: "Imediata (Durante a entrevista de atendimento e processamento do protocolo)", 
            total: "Primeira parcela disponibilizada para pagamento em até 30 dias corridos contados a partir da aprovação do requerimento" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Serviço público assistencial oferecido de forma 100% gratuita." 
        },
        resultado: "Habilitação ao seguro-desemprego com emissão de guia contendo o calendário das parcelas de amparo financeiro.",
        destaque: true
    },
    {
        id: 31,
        titulo: "Intermediação de Vagas de Emprego (IMO)",
        secretaria: "Secretaria de Desenvolvimento Econômico",
        descricao: "Serviço gratuito do SINE de aproximação entre cidadãos em busca de inserção no mercado de trabalho e empresas parceiras locais que possuem oportunidades de vagas em aberto. Realiza cadastramento de currículos, cruzamento de dados de perfis e encaminhamento para entrevistas.",
        elegibilidade: "Qualquer trabalhador maior de 14 anos de idade residente em Horizontina em busca de oportunidade de colocação ou recolocação profissional.",
        documentos: [
            "Documento de identidade oficial com foto (RG ou CNH)",
            "Carteira de Trabalho e Previdência Social (CTPS) física ou digital"
        ],
        etapas: [
            { nome: "Cadastro do perfil profissional", desc: "O trabalhador apresenta documentos de identificação, formação escolar e histórico profissional para criação de cadastro do currículo no SINE." },
            { nome: "Triagem de vagas", desc: "O atendente realiza a busca em tempo real no banco do SINE buscando vagas com exigências condizentes com o perfil profissional do candidato." },
            { nome: "Encaminhamento", desc: "Identificada a compatibilidade, o SINE emite a Carta de Encaminhamento contendo informações de contato do contratante." },
            { nome: "Entrevista de emprego", desc: "O cidadão comparece munido do encaminhamento no endereço da empresa parceira para realização dos testes de seleção." },
            { nome: "Retorno da vaga", desc: "A empresa informa o resultado do processo seletivo para fins de preenchimento ou liberação contínua da vaga no SINE." }
        ],
        canais: [
            { tipo: "Presencial", local: "Agência FGTAS/SINE Horizontina - Av. Helmut Simm, 100 (Segunda a Sexta, das 07:30 às 12:00 e das 13:30 às 17:00)" },
            { tipo: "Telefone", local: "55 3537 7541" },
            { tipo: "E-mail", local: "fgtassinehz@gmail.com" },
            { tipo: "Online", local: "Redes Sociais Oficiais - SINE Horizontina (Instagram/Facebook)" }
        ],
        prazos: { 
            espera: "Até 30 minutos em fila por ordem de atendimento na recepção presencial", 
            analise: "Imediata (A triagem e cruzamento de vagas no banco de dados ocorrem na hora do atendimento)", 
            total: "Imediato (Comunicação de vagas e liberação de cartas de entrevista no ato)" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Serviço público gratuito de inserção ao mercado de trabalho amparado pela Lei nº 13.667/2018." 
        },
        resultado: "Carta de Encaminhamento SINE impressa com data e hora para realização de entrevista de trabalho na empresa solicitante.",
        destaque: true
    }
);