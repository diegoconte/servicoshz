// ===================================================
// SERVIÇOS: Secretaria de Educação
// ===================================================
bdServicos.push(
    {
        id: 3,
        titulo: "Emissão de Históricos Escolares",
        secretaria: "Secretaria Municipal de Educação",
        descricao: "Fornecer ao munícipe documento comprobatório de escolaridade e residência rural para fins de encaminhamento de processo de aposentadoria com averbação de tempo rural.",
        elegibilidade: "Todos os munícipes que frequentaram as escolas da Rede Municipal atualmente desativadas.",
        documentos: [
            "Carteira de Identidade (RG)"
        ],
        etapas: [
            { nome: "Solicitação junto à SME", desc: "O munícipe faz o pedido apresentando RG, CPF, nome da escola desativada, localidade e as séries que frequentou." },
            { nome: "Levantamento das Informações", desc: "A equipe administrativa realiza a busca nos arquivos históricos do município e emite o documento." },
            { nome: "Retirada do Documento", desc: "O cidadão retira a via física impressa do histórico ou atestado diretamente na Secretaria Municipal de Educação." }
        ],
        canais: [
            { tipo: "Presencial", local: "Secretaria Municipal de Educação (Rua da Conceição, 716, Vila Kennedy, Horizontina/RS)" },
            { tipo: "Telefone", local: "55 3537 7577" },
            { tipo: "E-mail", local: "sme@pmhorizontina.com.br" }
        ],
        prazos: { 
            espera: "Atendimento presencial imediato para protocolo da solicitação.", 
            analise: "Até 14 dias para pesquisa e emissão.", 
            total: "Até 14 dias (prazo final do pedido à entrega)." 
        },
        custo: { 
            gratuito: true, 
            descricao: "Este serviço é totalmente gratuito." 
        },
        resultado: "Atestado de Escolaridade ou Histórico Escolar impresso.",
        destaque: false
    },
    {
        id: 4,
        titulo: "Transporte Escolar",
        secretaria: "Secretaria Municipal de Educação",
        descricao: "Garantir transporte seguro e de qualidade para estudantes da educação básica residentes na zona rural, de modo a viabilizar o acesso e a permanência escolar e reduzir a evasão.",
        elegibilidade: "Alunos da educação básica pública (redes municipal e estadual) residentes em áreas rurais de Horizontina.",
        documentos: [
            "Não se aplica (Inscrição via formulário online ou solicitação direta na escola correspondente)"
        ],
        etapas: [
            { nome: "Solicitação do Transporte Escolar", desc: "Preenchimento do formulário eletrônico online ou diretamente na escola onde o aluno está matriculado." }
        ],
        canais: [
            { tipo: "Online", local: "Formulário Eletrônico de Solicitação", link: "https://docs.google.com/forms/d/e/1FAIpQLSc9JGWYBenswxIpk_JdPa0HUCoo94Y2yqX1WANLpE4f4Uo3dQ/viewform" },
            { tipo: "Presencial", local: "Secretaria Municipal de Educação (Rua da Conceição, 716, Vila Kennedy) ou na secretaria da escola" },
            { tipo: "Telefone", local: "55 3537 7514" },
            { tipo: "E-mail", local: "sme@pmhorizontina.com.br" }
        ],
        prazos: { 
            espera: "Imediato (Preenchimento do formulário online)", 
            analise: "Não se aplica", 
            total: "Variável conforme o período de início das rotas escolares planejadas." 
        },
        custo: { 
            gratuito: true, 
            descricao: "Serviço totalmente gratuito garantido pelo município." 
        },
        resultado: "Acesso do estudante à rota de transporte escolar estabelecida.",
        destaque: true
    },
    {
        id: 5,
        titulo: "Atendimento Clínico e Institucional de Fonoaudiologia",
        secretaria: "Secretaria Municipal de Educação",
        descricao: "Assessoria e intervenção fonoaudiológica, em caráter clínico ou institucional, junto à Rede Municipal de Ensino para prevenir, diagnosticar e atenuar problemáticas no desenvolvimento e na aprendizagem.",
        elegibilidade: "Alunos da Rede Municipal de Ensino de Horizontina regularmente matriculados e frequentes, além das equipes gestoras das escolas.",
        documentos: [
            "Não se aplica"
        ],
        etapas: [
            { nome: "Solicitação do Atendimento", desc: "A equipe gestora da escola onde o aluno estuda faz a solicitação de atendimento à equipe da secretaria." },
            { nome: "Anamnese", desc: "Realização da entrevista de anamnese pela fonoaudióloga da EISME (Equipe Interdisciplinar da Secretaria Municipal de Educação)." },
            { nome: "Atendimentos Periódicos", desc: "Sessões e intervenções individualizadas ou institucionais realizadas com o estudante." }
        ],
        canais: [
            { tipo: "Presencial", local: "Secretaria Municipal de Educação (Rua da Conceição, 716, Vila Kennedy, Horizontina/RS)" },
            { tipo: "Telefone", local: "55 9927 6763" },
            { tipo: "E-mail", local: "eisme@pmhorizontina.com.br" }
        ],
        prazos: { 
            espera: "Não se aplica (Serviço sob agendamento e fluxo programado)", 
            analise: "Variável conforme fila de triagem da equipe interdisciplinar", 
            total: "Acompanhamento ao longo do ano letivo de acordo com a necessidade de cada caso." 
        },
        custo: { 
            gratuito: true, 
            descricao: "Serviço totalmente gratuito oferecido aos alunos da rede municipal." 
        },
        resultado: "Suporte clínico-pedagógico e acompanhamento fonoaudiológico.",
        destaque: false
    },
    {
        id: 6,
        titulo: "Atendimento Educacional Especializado (AEE)",
        secretaria: "Secretaria Municipal de Educação",
        descricao: "Apoio pedagógico complementar aos professores regentes de turmas inclusas, atuando diretamente no desenvolvimento de competências e habilidades de alunos com necessidades especiais.",
        elegibilidade: "Alunos com deficiência, transtornos globais do desenvolvimento (TGD) e altas habilidades ou superdotação da Rede Municipal de Ensino de Horizontina.",
        documentos: [
            "Não se aplica (Avaliação integrada entre equipe escolar e coordenação)"
        ],
        etapas: [
            { nome: "Estudo de Caso e Plano AEE (PAEE)", desc: "A professora regente da turma e a professora de AEE analisam as necessidades do estudante e elaboram o plano. Confirmada a necessidade, o aluno é matriculado na turma de AEE." },
            { nome: "Atendimento Multifuncional", desc: "Frequência às aulas de atendimento educacional especializado no turno inverso ao regular (ou concomitante para turno integral)." }
        ],
        canais: [
            { tipo: "Presencial", local: "Nas salas de AEE das respectivas Escolas Municipais de Educação" },
            { tipo: "Telefone", local: "55 3537 4849" },
            { tipo: "E-mail", local: "pedagógico@pmhorizontina.com.br" }
        ],
        prazos: { 
            espera: "Não se aplica", 
            analise: "Avaliação pedagógica realizada de forma integrada e contínua", 
            total: "Acompanhamento contínuo durante o ano letivo correspondente." 
        },
        custo: { 
            gratuito: true, 
            descricao: "Serviço público totalmente gratuito." 
        },
        resultado: "Atendimento pedagógico especializado e adaptação de recursos educacionais.",
        destaque: false
    },
    {
        id: 7,
        titulo: "Alimentação Escolar",
        secretaria: "Secretaria Municipal de Educação",
        descricao: "Planejamento e fornecimento de refeições saudáveis, nutritivas e balanceadas que cubram as necessidades nutricionais de todos os alunos da Rede Municipal durante o período letivo.",
        elegibilidade: "Todos os estudantes matriculados nas escolas da Rede Municipal de Ensino de Horizontina.",
        documentos: [
            "Não se aplica (Inclusão automática no ato da matrícula regular do estudante)"
        ],
        etapas: [
            { nome: "Inclusão e Registro de Restrições", desc: "No ato da matrícula escolar regular, os pais ou responsáveis indicam qualquer restrição ou necessidade nutricional específica." },
            { nome: "Fornecimento das Refeições", desc: "Oferta diária das refeições preparadas sob supervisão técnica nutricional diretamente na unidade de ensino." }
        ],
        canais: [
            { tipo: "Presencial", local: "Refeitórios das respectivas Escolas Municipais" },
            { tipo: "Telefone", local: "55 3537 4849" },
            { tipo: "E-mail", local: "pedagógico@pmhorizontina.com.br" }
        ],
        prazos: { 
            espera: "Não se aplica", 
            analise: "Imediato a partir da frequência letiva", 
            total: "Fornecimento diário ininterrupto ao longo do ano letivo." 
        },
        custo: { 
            gratuito: true, 
            descricao: "Fornecimento público e gratuito." 
        },
        resultado: "Refeições saudáveis de qualidade servidas diariamente.",
        destaque: false
    },
    {
        id: 8,
        titulo: "Atendimento de Alunos do Ensino Fundamental",
        secretaria: "Secretaria Municipal de Educação",
        descricao: "Atender as crianças e adolescentes de 6 a 14 anos em Escolas Municipais de Ensino Fundamental.",
        elegibilidade: "Pais ou responsáveis legais por crianças de 6 a 14 anos residentes no município (idade escolar obrigatória).",
        documentos: [
            "Certidão de Nascimento da Criança",
            "CPF da Criança",
            "Carteira de Identidade da Criança (Opcional)",
            "Caderneta de Vacina da Criança",
            "Cartão do SUS da Criança",
            "Cartão Social (Opcional)",
            "Foto 3x4 da criança ou adolescente",
            "Atestado médico de restrições de saúde ou declaração médica de acompanhamento de doença crônica/investigação de síndromes/deficiências",
            "Laudo Médico no caso de crianças com deficiência Física, Sensorial, Transtorno do Espectro Autista (TEA), atraso global do desenvolvimento ou Diagnósticos Sindrômicos",
            "CPF dos Responsáveis Legais",
            "Comprovante de residência"
        ],
        etapas: [
            { nome: "Solicitação de Vaga", desc: "Acessar a Central de Vagas para inscrição online do 1º ao 4º ano. Para turmas do 5º ao 9º ano, o pedido de vaga deve ser feito diretamente nas escolas municipais." },
            { nome: "Confirmação da Vaga e Matrícula", desc: "Após designação do sistema, os responsáveis legais apresentam a documentação presencialmente na escola para efetivar a matrícula." },
            { nome: "Frequência na Escola", desc: "Garantia da presença diária do aluno na escola ao longo do ano letivo, sendo exigida frequência mínima de 75%." },
            { nome: "Rematrícula", desc: "No período indicado pela secretaria escolar, efetivar presencialmente a rematrícula do estudante." }
        ],
        canais: [
            { tipo: "Online", local: "Central de Vagas - EducarWeb", link: "https://horizontina.educarweb.net.br/servicoexterno/matricula-2026" },
            { tipo: "Presencial", local: "Secretaria Municipal de Educação ou diretamente na Escola Municipal de interesse" },
            { tipo: "Telefone", local: "55 3537 4849" },
            { tipo: "E-mail", local: "pedagógico@pmhorizontina.com.br" }
        ],
        prazos: { 
            espera: "Imediato para protocolo online.", 
            analise: "Conforme cronograma de fluxo e designação do sistema.", 
            total: "Definido de acordo com o calendário letivo e período de matrículas." 
        },
        custo: { 
            gratuito: true, 
            descricao: "Serviço escolar público e gratuito." 
        },
        resultado: "Estudante matriculado e ativo no Ensino Fundamental da rede municipal.",
        destaque: true
    },
    {
        id: 9,
        titulo: "Reformas, Ampliações e Construções de Espaços Escolares",
        secretaria: "Secretaria Municipal de Educação",
        descricao: "Planejamento e execução de melhorias físicas, reformas estruturais e ampliações nas Escolas Municipais de Ensino.",
        elegibilidade: "Não se aplica (Atividade técnico-administrativa de caráter estritamente institucional).",
        documentos: [
            "Não se aplica (Gestão e planejamento interno de engenharia escolar)"
        ],
        etapas: [
            { nome: "Planejamento e Vistoria", desc: "Mapeamento e identificação das necessidades físicas das unidades escolares por parte das equipes diretivas e engenharia municipal." },
            { nome: "Projetos e Licitações", desc: "Desenvolvimento técnico das plantas estruturais e processos licitatórios necessários para as obras." },
            { nome: "Acompanhamento da Obra", desc: "Fiscalização e recebimento final das reformas e ampliações no ambiente escolar." }
        ],
        canais: [
            { tipo: "Presencial", local: "Secretaria Municipal de Educação (Rua da Conceição, 716, Vila Kennedy, Horizontina/RS)" },
            { tipo: "Telefone", local: "55 3537 7513" },
            { tipo: "E-mail", local: "sme@pmhorizontina.com.br" }
        ],
        prazos: { 
            espera: "Não se aplica (Demandas internas)", 
            analise: "Cronograma de obras programado anualmente", 
            total: "Variável conforme a dimensão física de cada projeto e cronograma de execução." 
        },
        custo: { 
            gratuito: true, 
            descricao: "Não se aplica (Financiado via recursos públicos orçamentários)." 
        },
        resultado: "Prédios escolares reformados, ampliados e em conformidade estrutural.",
        destaque: false
    },
    {
        id: 10,
        titulo: "Atendimento Clínico e Institucional de Psicóloga",
        secretaria: "Secretaria Municipal de Educação",
        descricao: "Assessoria e intervenção psicológica individual ou de modo interdisciplinar junto à Rede Municipal de Ensino para prevenir, diagnosticar e atenuar problemáticas no desenvolvimento e na aprendizagem de crianças e adolescentes.",
        elegibilidade: "Alunos matriculados e frequentes na Rede Municipal de Ensino de Horizontina, além das equipes gestoras das escolas.",
        documentos: [
            "Não se aplica (Encaminhamento interno via ficha de triagem da escola)"
        ],
        etapas: [
            { nome: "Solicitação do Atendimento", desc: "A equipe gestora da escola realiza o encaminhamento do estudante para a secretaria municipal." },
            { nome: "Anamnese Pedagógica", desc: "Realização da entrevista de anamnese e acolhimento com a psicóloga responsável." },
            { nome: "Atendimentos Periódicos", desc: "Sessões e intervenções individuais ou em grupo, acompanhadas de orientação familiar quando necessário." }
        ],
        canais: [
            { tipo: "Presencial", local: "Secretaria Municipal de Educação - EISME (Rua da Conceição, 716, Vila Kennedy, Horizontina/RS)" },
            { tipo: "Telefone", local: "55 9927 6763" },
            { tipo: "E-mail", local: "eisme@pmhorizontina.com.br" }
        ],
        prazos: { 
            espera: "Não se aplica (Atendimentos sob fluxo programado)", 
            analise: "Triagem realizada continuamente de acordo com a fila interdisciplinar", 
            total: "Acompanhamento ao longo do ano letivo de acordo com a necessidade diagnóstica de cada caso." 
        },
        custo: { 
            gratuito: true, 
            descricao: "Atendimento público totalmente gratuito." 
        },
        resultado: "Apoio emocional, psicopedagógico e direcionamento institucional.",
        destaque: false
    },
    {
        id: 11,
        titulo: "Atendimento de Alunos da Educação Infantil",
        secretaria: "Secretaria Municipal de Educação",
        descricao: "Garantir o atendimento de crianças de 0 a 5 anos completos em creches e pré-escolas na Rede Municipal de Ensino.",
        elegibilidade: "Pais ou responsáveis legais por crianças de 0 a 5 anos residentes no município. Para a vaga de turno integral, a renda do grupo familiar deve ser inferior a 5 salários mínimos e os responsáveis devem comprovar trabalho em turno integral.",
        documentos: [
            "Certidão de Nascimento da Criança",
            "CPF da Criança",
            "Carteira de Identidade da Criança (Opcional)",
            "Caderneta de Vacina da Criança",
            "Cartão do SUS da Criança",
            "Cartão Social (Opcional)",
            "Atestado médico de restrições de saúde, acompanhamento de doença crônica ou investigação de síndromes/deficiências",
            "Laudo Médico no caso de crianças com deficiência Física, Sensorial, TEA, atraso global ou Diagnósticos Sindrômicos",
            "CPF dos Responsáveis Legais",
            "Comprovante de residência",
            "Comprovante de rendimento do grupo familiar (obrigatório para pleitear turno integral)"
        ],
        etapas: [
            { nome: "Inscrição na Central de Vagas", desc: "Acessar o portal EducarWeb e realizar a inscrição de pedido de vaga indicando dados e documentos." },
            { nome: "Confirmação e Matrícula", desc: "Após designação do sistema, apresentar a documentação física original na escola indicada para conferência e efetivação da matrícula." },
            { nome: "Frequência Regular", desc: "Conduzir a criança diariamente para as aulas (obrigatória a frequência mínima de 60% para crianças de 4 e 5 anos)." },
            { nome: "Efetivação de Rematrícula", desc: "Comparecer à escola no período de rematrícula anual para atualizar o cadastro e assegurar a permanência." }
        ],
        canais: [
            { tipo: "Online", local: "Central de Vagas - EducarWeb", link: "https://horizontina.educarweb.net.br/servicoexterno/matricula-2026" },
            { tipo: "Presencial", local: "Secretaria Municipal de Educação ou secretaria da respectiva Escola de Educação Infantil" },
            { tipo: "Telefone", local: "55 3537 4849" },
            { tipo: "E-mail", local: "pedagógico@pmhorizontina.com.br" }
        ],
        prazos: { 
            espera: "Imediato para preenchimento de solicitação online.", 
            analise: "Variável conforme o fluxo de vagas da Central e critérios de renda para turmas integrais.", 
            total: "Vagas designadas de acordo com as regras de idade obrigatória ou classificação socioeconômica." 
        },
        custo: { 
            gratuito: true, 
            descricao: "Serviço totalmente gratuito." 
        },
        resultado: "Estudante devidamente matriculado e frequentando a Educação Infantil municipal.",
        destaque: true
    },
    {
        id: 12,
        titulo: "Atendimento Clínico e Institucional de Serviço Social",
        secretaria: "Secretaria Municipal de Educação",
        descricao: "Assessoria, intervenção e acompanhamento social individualizado ou coletivo junto à Rede Municipal de Ensino para combater a vulnerabilidade social e as problemáticas com reflexo negativo na aprendizagem.",
        elegibilidade: "Alunos regularmente matriculados e frequentes na Rede Municipal de Ensino, além das equipes diretivas das escolas.",
        documentos: [
            "Não se aplica"
        ],
        etapas: [
            { nome: "Ficha de Encaminhamento", desc: "A equipe gestora da escola encaminha a demanda do aluno para a equipe interdisciplinar da SME." },
            { nome: "Entrevista e Anamnese Social", desc: "Realização de entrevista com a família para avaliação das condições socioeconômicas e de convívio familiar." },
            { nome: "Acompanhamentos e Visitas", desc: "Sessões e visitas domiciliares contínuas, além de possíveis encaminhamentos para o CRAS, CREAS e demais órgãos da rede protetiva." }
        ],
        canais: [
            { tipo: "Presencial", local: "Secretaria Municipal de Educação - EISME (Rua da Conceição, 716, Vila Kennedy, Horizontina/RS)" },
            { tipo: "Telefone", local: "55 9927 6763" },
            { tipo: "E-mail", local: "eisme@pmhorizontina.com.br" }
        ],
        prazos: { 
            espera: "Não se aplica (Atendimento agendado e programado)", 
            analise: "Fila de triagem conforme grau de vulnerabilidade social do caso", 
            total: "Acompanhamento socioassistencial ao longo do ano letivo." 
        },
        custo: { 
            gratuito: true, 
            descricao: "Atendimento público gratuito garantido por lei." 
        },
        resultado: "Acompanhamento social e encaminhamentos protetivos devidamente prestados.",
        destaque: false
    }
);