// ===================================================
// SERVIÇOS: Secretaria de Saúde
// ===================================================
bdServicos.push(
    {
        id: 1,
        titulo: "Farmácia Básica Municipal",
        secretaria: "Secretaria de Saúde",
        descricao: "Dispensação de medicamentos e dietas da relação municipal (REMUME), além do encaminhamento de solicitações de medicamentos e dietas fornecidos pelo Estado.",
        elegibilidade: "Qualquer cidadão residente no município de Horizontina, com cadastro atualizado na sua unidade de saúde de referência.",
        documentos: [
            "Receita médica (original)",
            "Cartão do Munícipe",
            "Documento de Identidade oficial com foto do responsável pela retirada"
        ],
        etapas: [
            { nome: "Apresentação", desc: "O cidadão apresenta a receita médica válida e os documentos obrigatórios no balcão de atendimento." },
            { nome: "Avaliação dos Itens", desc: "O servidor da farmácia avalia a prescrição médica para verificar a disponibilidade dos itens no estoque." },
            { nome: "Lançamento no Sistema", desc: "Registro da dispensação e dados de controle nos sistemas IPM Saúde ou AME Estado." },
            { nome: "Dispensação e Orientação", desc: "Entrega física do medicamento ou dieta ao paciente com as devidas orientações de uso." },
            { nome: "Assinatura do Recibo", desc: "O cidadão ou responsável assina o recibo comprovando a retirada." },
            { nome: "Medicamento Especial (se necessário)", desc: "Orientações sobre o agendamento e encaminhamento para itens de média e alta complexidade fora da lista municipal padrão." }
        ],
        canais: [
            { tipo: "Presencial", local: "Rua Arnoldo Schneider, 935 (Segunda a Sexta-feira, das 07:45 às 11:15 e das 13:30 às 17:00)" },
            { tipo: "Telefone", local: "55 3537 6173" },
            { tipo: "E-mail", local: "farmacia@horizontina.rs.gov.br" }
        ],
        prazos: { 
            espera: "Variável (atendimento por ordem de chegada física, sem painel eletrônico de senhas)", 
            analise: "Imediato (no ato do atendimento presencial)", 
            total: "Imediato (entrega no momento do atendimento, sujeita a estoque)" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Este serviço é totalmente gratuito para o cidadão." 
        },
        resultado: "Medicamento e/ou dieta entregue presencialmente.",
        destaque: true
    },
    {
        id: 20,
        titulo: "CAPS - Centro de Atenção Psicossocial",
        secretaria: "Secretaria de Saúde",
        descricao: "Atendimento interdisciplinar acolhedor voltado a pessoas de todas as idades que apresentam sofrimento psíquico intenso, grave e persistente, bem como transtornos decorrentes do uso de álcool e outras drogas.",
        elegibilidade: "Qualquer cidadão residente no município de Horizontina com sofrimento psíquico severo e persistente.",
        documentos: [
            "Documentos pessoais oficiais (RG ou CNH)",
            "Cartão Nacional do SUS atualizado"
        ],
        etapas: [
            { nome: "Acolhimento Inicial", desc: "Entrevista detalhada conduzida por profissionais técnicos para compreender as demandas urgentes e a história de vida do cidadão." },
            { nome: "Elaboração do PTS", desc: "Criação do Projeto Terapêutico Singular de forma multidisciplinar, desenhando um plano de cuidados sob medida para o paciente." },
            { nome: "Acompanhamento Continuo", desc: "Sessões de psicoterapia, consultas médicas especializadas, acompanhamento familiar e participação em atividades/oficinas terapêuticas em grupo." }
        ],
        canais: [
            { tipo: "Presencial", local: "Rua Santa Rosa, nº 23 (Segunda a Sexta-feira, das 07:15 às 17:15)" },
            { tipo: "Telefone", local: "55 3537 7546" },
            { tipo: "E-mail", local: "caps@horizontina.com.br" }
        ],
        prazos: { 
            espera: "Até 30 minutos para atendimentos agendados; até 1 hora para demandas espontâneas (triadas por risco)", 
            analise: "Imediata (avaliação técnica de risco feita no primeiro acolhimento)", 
            total: "Variável (atendimento de fluxo terapêutico contínuo)" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Serviço totalmente gratuito fornecido pelo SUS." 
        },
        resultado: "Plano terapêutico implementado, acompanhamento psicossocial e reabilitação de saúde mental.",
        destaque: false
    },
    {
        id: 21,
        titulo: "Licenciamento e Fiscalização da Vigilância Sanitária",
        secretaria: "Secretaria de Saúde",
        descricao: "Emissão e renovação de Alvará Sanitário, fiscalizações preventivas e atendimento a denúncias de irregularidades em estabelecimentos comerciais e de serviços de saúde ou de interesse à saúde pública.",
        elegibilidade: "Qualquer pessoa física ou jurídica proprietária de estabelecimentos comerciais, drogarias, locais de manipulação de alimentos e serviços de saúde no município.",
        documentos: [
            "Alvará de Localização e Funcionamento vigente (pré-requisito obrigatório)",
            "Documentos técnicos específicos para a atividade (consultar guia detalhado de cada setor no portal)"
        ],
        etapas: [
            { nome: "Solicitação Online", desc: "Envio de requerimento de concessão ou renovação de alvará anexando a documentação específica via portal municipal Atende.net." },
            { nome: "Triagem Documental", desc: "Conferência prévia da documentação enviada para autorização de vistoria." },
            { nome: "Vistoria Técnica In Loco", desc: "Inspeção sanitária no local realizada pelos fiscais para avaliar as condições e adequação às normas vigentes." },
            { nome: "Decisão e Emissão", desc: "Se o local estiver apto, o Alvará Sanitário é emitido via sistema SIVISA. Caso contrário, são indicadas adequações ou instaurados processos administrativos." }
        ],
        canais: [
            { tipo: "Online", local: "Portal Geral de Autoatendimento Atende.NET", link: "https://horizontina.atende.net" },
            { tipo: "Presencial", local: "Rua Tuparendi, nº 1382 (Segunda a Sexta, das 07:30 às 11:30 e das 13:15 às 17:15)" },
            { tipo: "Telefone", local: "55 99178 7798 (WhatsApp)" },
            { tipo: "E-mail", local: "visa@horizontina.rs.gov.br" }
        ],
        prazos: { 
            espera: "Até 2 dias úteis para processamento inicial; até 20 dias corridos para vistoria e resposta definitiva em denúncias", 
            analise: "Variável de acordo com o porte do estabelecimento e cronograma de fiscalizações externas", 
            total: "Até 30 dias para liberação do alvará, condicionado à conformidade sanitária" 
        },
        custo: { 
            gratuito: false, 
            descricao: "Cobrança de taxas de fiscalização sanitária para fins de licenciamento anual, variando pelo ramo de atividade e área física." 
        },
        resultado: "Alvará Sanitário emitido de forma digital ou laudo de inspeção oficial.",
        destaque: false
    },
    {
        id: 22,
        titulo: "Setor de Transporte e Frotas de Saúde",
        secretaria: "Secretaria de Saúde",
        descricao: "Agendamento e transporte de pacientes que necessitam de locomoção assistida para a realização de consultas especializadas, exames diagnósticos, tratamentos continuados (oncologia, hemodiálise) ou cirurgias fora ou dentro do município.",
        elegibilidade: "Munícipes de Horizontina em tratamento de saúde, com consultas ou exames devidamente encaminhados e autorizados pela Secretaria Municipal de Saúde.",
        documentos: [
            "Guia de encaminhamento/agendamento médico emitido pelo SUS (original)",
            "Documentos pessoais (RG e CPF)",
            "Cadastro ativo no sistema municipal de saúde"
        ],
        etapas: [
            { nome: "Apresentação do Pedido", desc: "Apresentação presencial da guia de agendamento de viagem com antecedência para verificar a disponibilidade." },
            { nome: "Lançamento de Rota", desc: "Organização e planejamento das rotas diárias de frotas e escalação de motoristas/veículos compatíveis." },
            { nome: "Realização da Viagem", desc: "Deslocamento seguro do paciente da origem até o local de atendimento médico e retorno programado." }
        ],
        canais: [
            { tipo: "Presencial", local: "Setor de Frotas - Rua Tuparendi, nº 1382" },
            { tipo: "Telefone", local: "55 3537 7558 / 55 99938 4211" },
            { tipo: "E-mail", local: "saude@horizontina.rs.gov.br" }
        ],
        prazos: { 
            espera: "Imediato (agendado com antecedência no guichê de frotas)", 
            analise: "Até 1 dia útil para processamento e liberação do veículo", 
            total: "Agendamento realizado conforme a data oficial da viagem solicitada" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Transporte público e humanitário gratuito para pacientes autorizados." 
        },
        resultado: "Acesso garantido do paciente ao veículo para transporte de saúde de forma segura.",
        destaque: false
    },
    {
        id: 23,
        titulo: "Agendamento de Exames Médicos e Diagnósticos",
        secretaria: "Secretaria de Saúde",
        descricao: "Serviço responsável pela triagem, controle e agendamento de exames laboratoriais, de imagem (raios-X, ultrassonografia, tomografia, ressonância) e exames especializados de média e alta complexidade prescritos pelo SUS.",
        elegibilidade: "Cidadãos de Horizontina que possuam guia de requisição médica emitida por profissional da rede pública de saúde.",
        documentos: [
            "Guia de Solicitação Médica/Pedido de Exame Original",
            "Documento de identidade oficial com foto (RG ou CNH)",
            "Cartão Nacional do SUS atualizado",
            "Comprovante de residência atualizado no município"
        ],
        etapas: [
            { nome: "Acolhimento da Requisição", desc: "O cidadão entrega a documentação e a solicitação de exame original na recepção da sua Unidade Básica ou no setor de regulação." },
            { nome: "Triagem e Auditoria", desc: "Análise técnica dos critérios de gravidade, urgência clínica e validação da guia de solicitação." },
            { nome: "Inserção no Sistema", desc: "Lançamento da solicitação nos sistemas locais ou na Central de Regulação do Estado (GERCON/SISREG) para alta complexidade." },
            { nome: "Emissão do Comprovante", desc: "Confirmação da marcação e entrega da guia de agendamento impresso contendo o local, data e orientações de preparo." }
        ],
        canais: [
            { tipo: "Presencial", local: "Setor de Regulação - Rua Tuparendi, nº 1382" },
            { tipo: "Telefone", local: "55 99938 4212" },
            { tipo: "E-mail", local: "elisangelafenner@horizontina.rs.gov.br" }
        ],
        prazos: { 
            espera: "Até 20 minutos de espera em fila presencial para protocolo", 
            analise: "Até 5 dias úteis para exames básicos de rotina municipal; até 30 dias para exames dependentes de regulação estadual", 
            total: "Variável de acordo com a urgência clínica e disponibilidade física de vagas na rede credenciada" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Serviço totalmente gratuito integrado à rede SUS." 
        },
        resultado: "Comprovante de agendamento (Guia de Exame Confirmado) com data, hora e local definidos.",
        destaque: true
    },
    {
        id: 24,
        titulo: "Vigilância Epidemiológica e Serviços de Imunização",
        secretaria: "Secretaria de Saúde",
        descricao: "Ações de controle de doenças transmissíveis através da coleta sistemática de dados, detecção e controle rápido de surtos. Atua de forma integrada com a administração contínua do Calendário Nacional de Vacinação, soros e campanhas de prevenção.",
        elegibilidade: "Toda a população residente em Horizontina, conforme as faixas etárias e calendários técnicos vigentes.",
        documentos: [
            "Cartão Nacional do SUS",
            "Caderneta de Vacinação / Caderneta de Vacinas do Cidadão"
        ],
        etapas: [
            { nome: "Triagem da Caderneta", desc: "Avaliação do histórico vacinal do paciente para identificar doses em atraso ou vacinas recomendadas de rotina." },
            { nome: "Administração da Dose", desc: "Procedimento seguro de preparo e aplicação da vacina, soro ou imunoglobulina recomendada." },
            { nome: "Registro no Sistema", desc: "Inclusão permanente da dose administrada nos sistemas de informações do SUS e atualização da carteira física." }
        ],
        canais: [
            { tipo: "Presencial", local: "Sala de Vacinas Central - Rua Regina Viana, nº 303 (Segunda a Sexta, das 07:30 às 11:30 e das 13:15 às 17:15)" },
            { tipo: "Telefone", local: "55 3537 7550" }
        ],
        prazos: { 
            espera: "Atendimento imediato por ordem de chegada na recepção da sala de vacinas", 
            analise: "Imediata (avaliação técnica da carteira de vacinas na hora)", 
            total: "Imediato (atendimento concluído no ato do comparecimento)" 
        },
        custo: { 
            gratuito: true, 
            descricao: "As doses de vacina do Programa Nacional de Imunizações são gratuitas." 
        },
        resultado: "Vacina aplicada e caderneta física e digital devidamente atualizada.",
        destaque: false
    },
    {
        id: 25,
        titulo: "Atendimento em Unidade Básica de Saúde (UBS)",
        secretaria: "Secretaria de Saúde",
        descricao: "Acesso principal do cidadão à rede de saúde. Oferta assistência integral continuada por meio de consultas médicas gerais, acompanhamento de enfermagem, atendimentos odontológicos, coletas preventivas, curativos e dispensação descentralizada de ações do SUS.",
        elegibilidade: "Qualquer cidadão residente em Horizontina, preferencialmente cadastrado na unidade de saúde de referência do seu bairro ou área rural.",
        documentos: [
            "Cartão Nacional do SUS",
            "Documento de identidade oficial com foto (RG ou Certidão para crianças)",
            "Comprovante de residência atualizado para comprovar território da UBS (ou Autodeclaração de residência)",
            "Caderneta de Vacinação"
        ],
        etapas: [
            { nome: "Identificação e Recepção", desc: "Apresentação de dados cadastrais na recepção para confirmação do território e abertura do prontuário." },
            { nome: "Acolhimento com Triagem", desc: "Escuta qualificada das queixas pela equipe de enfermagem, avaliação preliminar de sinais vitais e classificação de prioridade clínica." },
            { nome: "Consulta Técnica", desc: "Realização da consulta médica, de enfermagem ou odontológica para diagnóstico, tratamento ou requisição de exames/retornos." },
            { nome: "Encaminhamentos", desc: "Realização imediata de procedimentos internos (vacinas, curativos, medicações) ou emissão de guias de regulação quando necessário." }
        ],
        canais: [
            { tipo: "Presencial", local: "UBS Centro (R. Tiradentes, 286); UBS Cascata; UBS Kennedy (R. Ijuí, 480); UBS Industrial (R. Cruz Alta, 517); UBS Bela União (R. Honório Lemos, 625); UBS Rural (R. São Cristóvão, 1473); UBS São Francisco (R. Sergipe, 125)" },
            { tipo: "Telefone", local: "UBS Centro (55 3537 3836); UBS Cascata (55 3537 3111); UBS Kennedy (55 3537 3413); UBS Industrial (55 3537 4886); UBS Bela União (55 3537 3890); UBS Rural (55 3537 4187); UBS São Francisco (55 3537 7560)" }
        ],
        prazos: { 
            espera: "Variável conforme o fluxo do dia na UBS e a classificação de risco do acolhimento", 
            analise: "Imediata a partir do momento de chegada para acolhimento", 
            total: "Atendimento médico realizado no mesmo dia para urgências primárias, ou agendado conforme escala de preventivos" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Atendimentos da Atenção Primária são totalmente gratuitos pelo SUS." 
        },
        resultado: "Consulta assistencial realizada, receitas médicas instruídas ou guias de exames/especialidades geradas.",
        destaque: true
    },
    {
        id: 26,
        titulo: "Atendimentos e Agendamentos Administrativos de Saúde",
        secretaria: "Secretaria de Saúde",
        descricao: "Suporte administrativo direto ao munícipe no balcão central da Secretaria de Saúde. Realiza a emissão de autorizações especiais, atualização de dados cadastrais do CADSUS, orientações sobre fluxos de viagens e recepção de pedidos administrativos diversos.",
        elegibilidade: "Cidadãos usuários do SUS residentes no município de Horizontina.",
        documentos: [
            "Documento de identificação com foto (RG ou CNH)",
            "Cartão Nacional do SUS",
            "Número de telefone atualizado para contato",
            "Encaminhamento ou laudos médicos que justifiquem o pedido administrativo"
        ],
        etapas: [
            { nome: "Abertura de Protocolo", desc: "Apresentação presencial da solicitação e entrega dos documentos obrigatórios para conferência inicial." },
            { nome: "Análise Cadastral", desc: "Consulta nos bancos de dados unificados (IPM, SISREG) e verificação de elegibilidade do paciente." },
            { nome: "Processamento e Cadastro", desc: "Efetivação de agendamentos internos, emissão de autorizações especiais ou inclusão da demanda na fila de regulação do Estado." },
            { nome: "Comunicação", desc: "Retorno de contato por telefone ou mensagem ao usuário indicando a liberação do seu pedido ou orientações complementares." }
        ],
        canais: [
            { tipo: "Presencial", local: "Sede Administrativa da Saúde - Rua Tuparendi, nº 1382 (Seg a Qui, das 07:30 às 11:30 e das 13:15 às 17:15. Sex das 07:30 às 11:30 e 13:15 às 15:00)" },
            { tipo: "Telefone", local: "55 3537 7556 / 55 3537 7555" },
            { tipo: "E-mail", local: "saude@horizontina.rs.gov.br" }
        ],
        prazos: { 
            espera: "Atendimento imediato por ordem de chegada presencial", 
            analise: "Até 48 horas úteis para análise de cadastros e triagem inicial", 
            total: "Variável conforme o tipo de procedimento e fluxo de aprovação das cotas do município/Estado" 
        },
        custo: { 
            gratuito: true, 
            descricao: "Serviço estritamente técnico de utilidade pública totalmente gratuito." 
        },
        resultado: "Protocolo administrativo aberto, alteração cadastral consolidada ou autorização emitida.",
        destaque: false
    },
    {
        id: 27,
        titulo: "Vigilância Ambiental (Controle de Vetores e Endemias)",
        secretaria: "Secretaria de Saúde",
        descricao: "Ações contínuas de vistorias, monitoramento de vetores e prevenção de doenças como Dengue, Zika, Chikungunya e febre amarela. Promove visitas prediais de rotina, busca ativa de escorpiões, eliminação de focos, atendimento de denúncias ambientais e atividades educativas de controle biológico.",
        elegibilidade: "Qualquer munícipe de Horizontina que identifique focos potenciais de proliferação de mosquitos, escorpiões ou condições insalubres em terrenos.",
        documentos: [
            "Não se aplica (Atuação direta in loco ou por protocolo/denúncia registrada)"
        ],
        etapas: [
            { nome: "Recepção de Demanda", desc: "Acolhimento da denúncia ou solicitação técnica por telefone, e-mail ou encaminhamento direto pela prefeitura." },
            { nome: "Vistoria Técnica In Loco", desc: "Deslocamento imediato do Agente de Combate às Endemias ao endereço apontado para fazer inspeção física no lote." },
            { nome: "Orientação e Tratamento", desc: "Orientação educativa direta aos proprietários e aplicação de defensivos biológicos ou remoção de focos para controle imediato de perigo." },
            { nome: "Registro de Visita", desc: "Lançamento dos dados coletados na plataforma municipal e encaminhamento de notificações fiscais caso constatada omissão recorrente." }
        ],
        canais: [
            { tipo: "Presencial", local: "Setor de Endemias - Sede Administrativa da Saúde" },
            { tipo: "Telefone", local: "55 3537 7557" },
            { tipo: "E-mail", local: "denguehorizontina@gmail.com" }
        ],
        prazos: { 
            espera: "Atendimento imediato para chamados urgentes e denúncias de focos ativos", 
            analise: "Até 48 horas úteis para planejar a visita técnica externa no endereço", 
            total: "Conclusão da vistoria e aplicação de medidas corretivas em até 5 dias úteis" 
        },
        custo: { 
            gratuito: true, 
            descricao: "As vistorias e ações do Setor de Endemias são oferecidas de forma totalmente gratuita." 
        },
        resultado: "Inspeção técnica executada, focos de vetores neutralizados e termo de orientação/notificação instruído.",
        destaque: false
    }
);